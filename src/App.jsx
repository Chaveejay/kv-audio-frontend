import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import { Toaster } from 'react-hot-toast'
import User from './pages/user/user'
import Admin from './pages/admin/admin'
import Logo from './components/Logo'

function App() {

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
