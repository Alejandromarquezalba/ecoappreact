import minhat from '../CardWidget/assets/minhat.png'
import classes from './CardWidget.module.css'
import { CartContext } from '../../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

const Card = () => {


    const {totalQuantity} = useContext(CartContext)
    
    return (
        
        <Link className={classes.card}>
            <img src={minhat} alt="sombrerito"/>
            {totalQuantity}
        </Link>
    )
}

export default Card;