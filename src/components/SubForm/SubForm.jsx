import { useState } from "react"

export const SubForm = ({onConfirm})=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cel, setCel] = useState('')

    const hadleSend = (e)=>{
        e.preventDefault()
        const userData = {name,email,cel}
        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={hadleSend} style={{display:'block' }}>
                <label>Nombre:
                    <input required type="text" value={name} onChange={({target})  =>  {setName(target.value)}}></input>
                </label>
                <label>Correo:
                    <input required type="text" value={email} onChange={({target})  =>  {setEmail(target.value)}}></input>
                </label>
                <label>Telefono:
                    <input required type="text" value={cel} onChange={({target})  =>  {setCel(target.value)}}></input>
                </label>

                <button type="submit">Enviar datos</button>
            </form>
        </div>
    )





}