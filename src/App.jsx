import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/ItemNavbar/ItemNavbar'
import List from './components/ItemListContainer/ItemListContainer'
import Count from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetalContainer'


function App() {
  return (
    
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<List greeting={'App/Broser/Routes/Route'}/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<List greeting={'Esta es la categorica'}/>}/>
        </Routes>
    
    </BrowserRouter>
    
  )
}


//INICIO
//BUSQUEDA
//DETALLE
//revisar el carrito
//Y una confirmación de la orden


//CONTADOR QUE PUEDA AGREGAR AUMENTAR O DISMINUIR UNA CANTIDAD Y PODER AGREGAR ESA CANTIDAD AL CARRITO
export default App
