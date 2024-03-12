import { useState, useEffect} from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetal";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [product, setProduct] = useState(null)
    useEffect(()=>{
        getProductsById(itemId)
        .then( result=>{ 
            setProduct(result)
        })
        .catch( error=>console.log(error))
    },[itemId])


    return (
        <main>
            <h1 style={{textAlign:'center'}}>Detalles</h1>
            <ItemDetail {...product}/>
        </main>
    )

}


export default ItemDetailContainer;