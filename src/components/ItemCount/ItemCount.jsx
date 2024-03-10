import { useState } from "react"
import { useCount} from '../../hooks/useCount'

const Count = () => {
    
    const {count,crecer,disminuir} = useCount()

    return (
        <div>
            <h1>{cuenta}</h1>
            <button onClick={crecer}>Aumentar +</button>
            <button onClick={disminuir}>Restar -</button>
        </div>
    )    
}

export default Count;