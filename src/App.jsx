import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes path = "/">
      <Route path="/" element={<Login/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
