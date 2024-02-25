import { useState } from "react"

const Count = () => {
    const [cuenta, setCuenta] = useState(-69);

    const accionar = () => {
        setCuenta( 100 )
    }
    

    return (
        <div>
            <h1>{cuenta}</h1>
            <button>Aumentar +</button>
            <button onClick={accionar}>Restar -</button>
        </div>
    )    
}

export default Count;