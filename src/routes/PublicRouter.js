import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {UserContext} from '../contexts/UserContext'

const PublicRouter = ({children}) => {
    const {user} = useContext(UserContext);
    console.log('chldren: ',children)
  return (
    user !== 'undefined' ? children : <Navigate to='/'/>
  )
}

export default PublicRouter