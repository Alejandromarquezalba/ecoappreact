import classes from './ItemListContainer/'
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig';
import { useNotification } from '../notification/hooks/useNotification';

const List = ({ greeting }) => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState(true)
    const { showNotification} = useNotification()
    
    useEffect(()=>{
       setCargando(true)
        
       const ProductsCollection = 
       categoryId ? 
       query(collection(db, 'products'), where('category', '==', categoryId)) : 
       collection(db, 'products')

       getDocs(ProductsCollection)
         .then(querySnapshot => {
            const productsAdapted = querySnapshot.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
         })
         .catch(error => {showNotification('Ha ocurrido un error')})
         .finally(()=>{
            setCargando(false)
         })
         
    },[categoryId])

    if(cargando){
        return <h1 style={{textAlign:'center'}}>Los productos se están cargando, espere por favor...</h1>
    }
    

    const productsComponents = products.map(product => {
        return (
            <div>
                <h2>{product.category}</h2>
                <h2>{product.name}</h2>
                <img src={product.img} style={{width:200, height:200}}/>
                <p>{product.edad}</p>
            </div>
        )
    })   
    return (
        <div style={{backgroundColor: 'green'}}>
            <h1 style={{textAlign:'center', fontSize:55}}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default List;