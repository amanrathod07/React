import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username:"hitesh",
    age:21
  }
  return (
    <>
    
    <h1 className="bg-red-400 text-black p-4 rounded-xl">Tilwind Test</h1>
    <Card username="chai aur code" />
    <Card/>
    </>
  )
}

export default App
