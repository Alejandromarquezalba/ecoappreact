import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, QuerySnapshot, writeBatch, Timestamp } from 'firebase/firestore'
import { SubForm } from "../SubForm/SubForm"

const Checkout = ()=>{

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async (name, email, cel)=>{

        try{
            setLoading(true)
            const objetctOrder = {
                buyer : {
                    name, email, cel
                },
                items: cart,
                total: total, 
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
            docs.forEach(doc => {
                //datos de db
                const data = doc.data
                const stockdb = data.stock
                //datos de carrito
                const productAddedToCart = cart.find(prod => prod.id == doc.id)
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
        return <p>Este es tu ID {orderId}</p>
    }
    return(
        <div style={{textAlign:'center'}}>
            <h2>Formulario de Checkout</h2>
            <SubForm onConfirm={createOrder}></SubForm>
        </div>

    )
}


export default Checkout;
