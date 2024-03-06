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
//COMPONENTE NAVBAR
//COMPONENTE LIST CONTAINER (debe recibir una props como titulo y mostrarla en la pantalla principal)
//Y COMPONENTE CARDWIDGET (un boton con una img) TIENE QUE IR DENTRO DEL COMPONENTE DE NAVBAR
export default App
