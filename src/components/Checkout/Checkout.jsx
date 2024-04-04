import { useContext, useState } from "react"
//import { CartContext } from "../../context/CartContext" 
import { getDocs, collection, query, where, documentId, QuerySnapshot, writeBatch } from 'firebase/firestore'


const Checkout = ()=>{

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [card, total, clearCart] = useContext(CartContext)

    const createOrder = async (userData)=>{

        try{
            setLoading(true)
            const objetctOrder = {
                buyer : {
                    name: 'pepe grillo',
                    email: 'correo@correo.correo',
                    phone: 123456789
                },
                items: card,
                total: total
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = card.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
            
            const querySnapshot = await getDocs(productsCollection)
            
            const { docs } = querySnapshot
            docs.forEach(doc => {
                //datos de db
                const data = doc.data
                const stockdb = data.stock
                //datos de carrito
                const productAddedToCart = card.find(prod => prod.id == doc.id)
                const prodQuantity = productAddedToCart.quantity
                if(stockdb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...data})
                }
            })
            if (outOfStock.length == 0){
                batch.commit()
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objetctOrder)

                clearCart()
                setOrderId(id)
                
            } else {
                console.log('Hay productos sin stock')
            }
        }
        catch (error){
            return (<h1>La orden está en proceso. . .</h1>)
        }
        finally{
            setLoading(false)
        }
    }
    if(loading){
        console.log('La orden está en proceso')
    }
    if(orderId){
        return <h1>El id de su orden es: {orderId}</h1>
    }
    return(
        <div>
            <h2>Checkout</h2>
            <h3>Armardo de Formulario</h3>
            <button onClick={createOrder}>Boton de generar la compra</button>
        </div>

    )
}


export default Checkout;
