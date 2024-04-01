import { useState, useEffect} from "react";
import { getDoc, doc} from 'firebase/firestore'
import ItemDetail from "../ItemDetail/ItemDetal";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const { itemId } = useParams()

    const [product, setProduct] = useState(null)
    useEffect(()=>{
        const ProductDoc = doc(dc, 'products', itemId)
        getDoc(ProductDoc)
            .then(querySnapshot => {
                const data = querySnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...data}
                setProduct(productAdapted)
            })
            .catch()
    },[itemId])

    return (
        <main>
            <h1 style={{textAlign:'center'}}>Detalles</h1>
            <ItemDetail {...product}/>
        </main>
    )

}

export default ItemDetailContainer;