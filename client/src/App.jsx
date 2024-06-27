import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/EmpLogin/Login'
import Adminlogin from './pages/AdminLogin/Adminlogin'
// import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/auth/admin" element={<Adminlogin />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App