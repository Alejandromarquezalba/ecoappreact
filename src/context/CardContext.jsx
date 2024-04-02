import { useState, createContext, Children } from "react";

export const CardContext = createContext()

export const CardProvider = ({ children }) => {
    const [card, setCard] = useState([])

    const addItem = (productToAdd)=>{
        if(!isInCard(productToAdd.id)){
            setCard(prev => [...prev, productToAdd])
        } else {
            console.error('Producto ya agregado')
        }
    }

    const isInCard = (id)=>{
        return card.some(prod => prod.id == id)
    }

    const getTotalQuantity = ()=>{
        let stack = 0
        card.forEach(prev => {
            stack += prod.quantity
        })
        return stack
    }

    const totalQuantity = getTotalQuantity()

    const getTotal = ()=>{
        let stack = 0

        card.forEach(prev => {
            stack += prod.quantity * prod.price
        })
    }

    const clearCart = ()=>{
        setCard([])
    }
    const total = getTotal()
    return (
        <CardProvider.Provider value={{card, addItem, totalQuantity, total, clearCart}}>
            {children}
        </CardProvider.Provider>
    )
}

