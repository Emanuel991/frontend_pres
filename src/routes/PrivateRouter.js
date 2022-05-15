import React, {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'

const PrivateRouter = ({children}) => {
    const {user} = useContext(UserContext);
    // console.log(user)
  return (
    user ? children : <Navigate to='/login' />
  )
}

export default PrivateRouter