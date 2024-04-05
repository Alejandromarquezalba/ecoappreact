import { useState } from "react"

export const SubForm = ({onConfirm})=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [email2, setEmail2] = useState('')
    const [cel, setCel] = useState('')
    const handleConfirm = (event)=>{
        event.preventDefault()
        const userData = {name,email,cel,email2}
        onConfirm(userData)
    }
    return (
        <div>
            <form onSubmit={handleConfirm} style={{display:'block' }}>
                <label>Nombre:
                    <input required type="text" value={name} onChange={({target})  =>  {setName(target.value)}}></input>
                </label>
                <label>Correo:
                    <input required type="text" value={email} onChange={({target})  =>  {setEmail(target.value)}}></input>
                </label>
                <label>Repita correo electronico:
                    <input required type="text" value={email2} onChange={({target})  =>  {setEmail2(target.value)}}></input>
                </label>
                <label>Telefono:
                    <input required type="text" value={cel} onChange={({target})  =>  {setCel(target.value)}}></input>
                </label>

                <button type="submit">Enviar datos</button>
            </form>
        </div>
    )





}