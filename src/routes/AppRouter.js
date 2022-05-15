import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route exact path="/login" element={localStorage.getItem('token') ? <Navigate replace to='/' /> : <LoginForm />} /> */}
        </Routes>
    </>
  )
}

export default AppRouter