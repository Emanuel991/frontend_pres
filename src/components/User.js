import React, {useEffect, useState} from 'react'

const User = () => {
  
    const [user, setUser] = useState({})

    useEffect(()=>{
        fetch('http://localhost:4000/users/usuario/1')
        .then((res)=> {return res.json()})
        .then((data)=> {
          console.log(data);
          setUser(data);
        })
    },[]) 

  return (
    <>
        <div className="card w-50 border-top-0 border-2 rounded">
          <div className="card-body">
              <h5 className="card-title">Saldo disponible</h5>
            <div className='d-flex mt-3'>
              <p className="card-text me-5"> monto: {user.saldo}$</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default User