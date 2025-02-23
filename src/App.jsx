import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import { Toaster } from 'react-hot-toast'
import User from './pages/user/user'
import Admin from './pages/admin/admin'
import Logo from './components/Logo'
import { BiLogOut } from 'react-icons/bi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Toaster/>
    <Routes path = "/*">
      <Route path="/" element={<Login/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/admin/*" element={<Admin/>}/>
      <Route path="/logo" element={<Logo/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
