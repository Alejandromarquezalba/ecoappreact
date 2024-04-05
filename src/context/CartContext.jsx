import { createContext, useState } from 'react'

export const CartContext = createContext()
export const CartProvider = ({children}) =>{
  const [cart, setCart] = useState([])

  const addItem = (productToAdd)=>{
    if(!isInCart(productToAdd.id)){
      setCart(prev=>[...prev,productToAdd])
    }else{console.error('Ya se encuentra agregado un producto')}
  }

  const isInCart = (id) =>{
    return cart.some(prod => prod.id === id)
  }
  const clearCart = () => {
    setCart([])
  }
  const removeItem = (id) => {
    const updatedCart = cart.filter(prod => prod.id !== id)
    setCart(updatedCart)
  }
  const getTotalQuantity = ()=>{
    let acumluador = 0
    cart.forEach(prod => {
      acumluador += prod.quantity
    })
    return acumluador
  }
  
  
  const getTotal = () => {
    let acumulador = 0
    cart.forEach(prod => {
      acumulador += prod.quantity * prod.price
    })
    return acumulador
  }
  const total = getTotal()


  const totalQuantity = getTotalQuantity()
//---------
  return (
    <CartContext.Provider value={{cart, addItem, totalQuantity, total, clearCart, isInCart, removeItem}}>
      {children}
    </CartContext.Provider>
  )
}


