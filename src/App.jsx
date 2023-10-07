import { useState } from 'react'
import './App.css'
import Header from "./lib/Header";
import Body from "./lib/Body";

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="overflow-x-hidden">
    <Header/>
    <Body/>
  </div>
  )
}

export default App
