import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';
import { useNotification } from '../notification/hooks/useNotification';
import { Link } from 'react-router-dom'; 

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}
const ItemDetail = ({ id, name, category, img, price, edad, description, stock})=>{

    const [inputType, setInputType] = useState('button')

    const [quantity, setQuantity] = useState(0)
    
    const { addItem } = useContext(CartContext)
    const {showNotification} = useNotification()

    const ItemCount = inputType === 'input' ? InputCount : ButtonCount
    
    const handleOnAdd = (quantity) => {
        const objProductToAdd = {id, name, price, quantity}
        showNotification('success',`Ha realizado su compra de ${quantity} ${name}`)
        setQuantity(quantity)
        addItem(objProductToAdd)
    }


    return(
        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <h2>Categoría: {category}</h2>
            <h2>Nombre: {name}</h2>
            <img src={img} style={{width:200, height:200}}/>
            <p>Edad: {edad}</p>
            <p>Descripción: {description}</p>
            {quantity == 0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/>: <Link to='/cart'>Terminar compra</Link>}
        </div>
    )
}
export default ItemDetail;
