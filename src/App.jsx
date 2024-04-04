import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/ItemNavbar/ItemNavbar'
import List from './components/ItemListContainer/ItemListContainer'
import Count from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Checkout from './components/Checkout/Checkout'
import CartView from '../src/components/CartView/CartView'
import { CartProvider } from './context/CartContext'




function App() {

  

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<List greeting={'Bienvenido'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryId' element={<List greeting={'Esta es la categorica'}/>}/>
            <Route path='/cart' element={<CartView/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
          </Routes>
      
      </BrowserRouter>
    </CartProvider>

    </>
  )
}



export default App