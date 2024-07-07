import React from 'react'
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/EmpLogin/Login'
import Adminlogin from './pages/AdminLogin/Adminlogin'
import AdminDash from './pages/AdminDashboard/AdminDash'
import ProtectedRouteAdmin from './pages/components/ProtectedRouteAdmin'
import ProtectedRouteEmp from './pages/components/ProtectRouteEmp'
import EmpDash from './pages/EmpDashboard/EmpDash'
// import "./App.css"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<ProtectedRouteEmp element={EmpDash }/>}/>
        <Route path="/admin" element={<Adminlogin />}/>
        <Route path="/admin/dashboard" element={<ProtectedRouteAdmin element={AdminDash }/> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App