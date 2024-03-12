import minhat from '../CardWidget/assets/minhat.png'
import classes from './CardWidget.module.css'
import { useState } from 'react'



const Card = () => {
    

    return (
        <button className={classes.card}>
            <img src={minhat} alt="sombrerito"/>
            <h2>$0</h2>
        </button>
    )
}

export default Card;