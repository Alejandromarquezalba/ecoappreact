import { useEffect, useRef } from "react"

const Button = () => {
    const buttonRefer = useRef()
    const handleClick = (e) => {
        console.log(e)
    }
    return (
        <button ref={buttonRefer} onClick={handleClick}>Button</button>
    )
}
export default Button