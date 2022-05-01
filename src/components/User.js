import React, {useEffect, useContext} from 'react'
import UserContext from '../contexts/UserContext';
import { getUser } from '../services/UserService'
import FormOperation from './FormOperation';

const User = () => {
  
    const {user, setUser} = useContext(UserContext);

    useEffect(()=>{
        getUser().then((data) => {
          setUser(data)
        })
    },[]) 

  return (
    <>
          <div className="card">
            <div className="card-body">
                <h5 className="card-title">Saldo disponible</h5>
              <div className='d-flex mt-3'>
                <p className="card-text me-5"> monto: {JSON.stringify(user.saldo)}</p>
              </div>
              <FormOperation />
            </div>
          </div>
    </>
  )
}

export default User