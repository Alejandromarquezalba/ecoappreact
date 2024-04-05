import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetal"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        const productDoc = doc(db, 'products', itemId)

        getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                const data = queryDocumentSnapshot.data()
                const productAdapted = { id: queryDocumentSnapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch().finally()
    }, [itemId])

    return (
        <div style={{ background: 'purple'}}>
            <h1 style={{textAlign:'center'}}>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
/*
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where} from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig';

const List = ({ greeting }) => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState(true)

    
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
         .catch()
         
    },[categoryId])

    if(cargando){
        return <h2 style={{textAlign:'center'}}>Cargando...</h2>
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
        <div style={{backgroundColor:'orange'}}>
            <h1 style={{textAlign:'center', fontSize:55}}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default List;
*/