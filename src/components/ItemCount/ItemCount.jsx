import { useState } from "react"


const Count = ({ initial = 1, stock, onAdd }) => {
    
    const [cuenta, setCuenta] = useState(initial);
    const disminuir = () => {
        if(cuenta > 1){
            setCuenta(prev => prev - 1)
        }
    }
    const crecer = () => {
        if (cuenta < stock){
            setCuenta(prev => prev + 1)
        }
    }
    return (
        <div style={{display:"flex", justifyContent:'center'}}>
            <h1>{cuenta}</h1>
            <button onClick={crecer} style={{width:75, height:75}}>+</button>
            <button onClick={() => onAdd(cuenta)} style={{width:75, height:75}}>Agregar al carrito</button>
            <button onClick={disminuir} style={{width:75, height:75}}>-</button>
        </div>
    )    
}

export default Count;