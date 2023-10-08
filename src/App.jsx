import { useState } from 'react'
import './App.css'
import Header from "./lib/Header";
import Body from "./lib/Body";
import { Routes, Route } from "react-router-dom";
import Noticias from "./lib/Noticias";
import Acercade from './lib/Acercade';
import Proyectos from './lib/Proyectos';
import Footer from "./lib/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="overflow-x-hidden">
    <Routes>
      <Route path='/' element={<Header/>} >
        <Route path='noticias' element={<Noticias/>}></Route>
        <Route path='/' element={<Body/>}></Route>
        <Route path='/' element={<Footer/>}></Route>
        <Route path='acercade' element={<Acercade/>}></Route>
        <Route path='proyectos' element={<Proyectos/>}></Route>
      </Route>
    </Routes>
    
    
    
  </div>
  )
}

export default App
