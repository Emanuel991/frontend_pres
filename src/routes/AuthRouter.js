import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import PrivateRouter from './PrivateRouter'
import PublicRouter from './PublicRouter'
import LoginForm from '../components/LoginForm'
import AppRouter from './AppRouter'
import Register from '../components/Register'

const AuthRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<PrivateRouter><AppRouter /></PrivateRouter>} />
            <Route path='/login' element={<PublicRouter><LoginForm /></PublicRouter>} />
            <Route path='/register' element={<PublicRouter><Register /></PublicRouter>} />
        </Routes>
    </Router>
  )
}

export default AuthRouter