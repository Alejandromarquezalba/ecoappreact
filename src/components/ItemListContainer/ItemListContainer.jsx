import classes from './ItemListContainer.module.css'
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const List = ({ greeting }) => {
    const { categoryId } = useParams()
    const [products, setProducts] = useState([])
    const [cargando, setCargando] = useState(true)

    
    useEffect(()=>{
        setCargando(true)
        const funcionasyncrona = categoryId? getProductsByCategory : getProducts
        funcionasyncrona(categoryId)
        .then (result => {setProducts(result)})
        .catch(error  => {console.log(error) })
        .finally(()   => {setCargando(false)})
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
        <div>
            <h1 style={{textAlign:'center', fontSize:55}}>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default List;