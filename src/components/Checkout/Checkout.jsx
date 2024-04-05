import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, QuerySnapshot, writeBatch, Timestamp, addDoc } from 'firebase/firestore'
import { SubForm } from "../SubForm/SubForm"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = ()=>{
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const {cart, total, clearCart} = useContext(CartContext)

    const createOrder = async ({name, email, cel, email2})=>{
        setLoading(true)
        try{
            setOrderId('Ahora valgo algo')
            const objOrder = {
                buyer : {
                    name, email, cel, email2
                },
                items: cart,
                total: total, 
            }
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(),'in', ids))
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
            docs.forEach(doc => {
                //datos de db
                const data = doc.data()
                const stockDb = data.stock
                //datos de carrito
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...data})
                }
            })
            if(outOfStock.length === 0) {
                batch.commit()
                
                const orderCollection = collection(db, 'orders')
                const {id} = await addDoc(orderCollection,objOrder)
                setOrderId(id)
                console.log(id)
            } else {
                console.log('hay productos que no tienen stock disponible')
            }
        } 
        catch (error) {   
        } 
        finally {
            setLoading(false)
        }
    }
    if(loading){
        console.log('La orden está en proceso')
        console.log(orderId)
    }
    if(orderId){
        return <h1 style={{textAlign:'center'}}>Este es tu ID:{orderId}</h1>
    }
    return(
        <div style={{textAlign:'center'}}>
            <h2>Formulario de Checkout</h2>
            <SubForm onConfirm={createOrder}></SubForm>
        </div>
    )
}
export default Checkout;
