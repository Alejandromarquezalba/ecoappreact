import { useState } from "react"


const Count = ({ initial = 1, stock, onAdd }) => {
    
    const [count, setCount] = useState(initial);
    const disminuir = () => {
        if(count > 1){
            setCount(prev => prev - 1)
        }
    }
    const crecer = () => {
        if (count < stock){
            setCount(prev => prev + 1)
        }
    }
    return (
        <div style={{display:"flex", justifyContent:'center'}}>
            <h1>{count}</h1>
            <button onClick={crecer} style={{width:75, height:75}}>Agregar++</button>
            <button onClick={() => onAdd(count)} style={{width:75, height:75}}>Agregar al conuntador</button>
            <button onClick={disminuir} style={{width:75, height:75}}>Restar--</button>
        </div>
    )    
}

export default Count;