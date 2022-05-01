import React, { useContext, useEffect, useState } from 'react'
import Operations from './Operations';
import FormOperation from './FormOperation';
import User from './User'
import { getOperations } from '../services/OperationService';
import './Home.css'
import Errors from './Errors';

const Home = () => {
  
    const [operations, setOperations] = useState([]);
    const [error, setError] = useState(false);

  useEffect(()=>{
    reload();
    //console.log('token: ', JSON.parse(token));
  }, [])

  const reload = () =>{
    getOperations()
    .then((data) => {
        if(data.error){
          setError(data.error)
        }else{
          setOperations(data)
        }
    })
  }

  return (
    <>
      <Errors>
        <div className='container container-user py-3'>
          <User />
          
        </div>
          <div className="container container-color p-3 my-3">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-8 col-lg-6">
                <h3>Ultima actividad</h3>
                  {operations.map((operation)=>{
                        return <Operations key={operation.id} monto={operation.monto} fecha={operation.fecha} 
                        tipo={operation.tipo}/>
                    })}
              </div>
            </div>
          </div>
      </Errors>
    </>
  )
}

export default Home;