import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/EmpLogin/Login'
import Adminlogin from './pages/AdminLogin/Adminlogin'
import AdminDash from './pages/AdminDashboard/AdminDash'
// import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Adminlogin />}/>
        <Route path="/admin/dashboard" element={<AdminDash />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App