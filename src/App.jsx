import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/ItemNavbar/ItemNavbar'
import List from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <Navbar/>
      <List greeting='Cuadrado'/>
      <List greeting='Círculo'/>
      <List greeting='Triángulo'/>
      <List greeting='híper dodecaedro'/>
    </div>
  )
}

//CONTADOR QUE PUEDA AGREGAR AUMENTAR O DISMINUIR UNA CANTIDAD Y PODER AGREGAR ESA CANTIDAD AL CARRITO
export default App
