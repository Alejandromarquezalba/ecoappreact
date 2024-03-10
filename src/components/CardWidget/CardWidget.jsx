import minhat from '../CardWidget/assets/minhat.png'
import classes from './CardWidget.module.css'
import { useState } from 'react'



const Card = () => {
    const [count, setCount] = useState(0);

    const sumar = () => {
        setCount(prev => prev + 1)
    }

    return (
        <button className={classes.card} onClick={sumar}>
            <img src={minhat} alt="sombrerito"/>

            <h2>{count}</h2>
        </button>
    )
}

export default Card;