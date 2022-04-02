import React, { useEffect, useState } from 'react'
import Operations from './Operations';
import FormOperation from './FormOperation';
import User from './User'

const Home = () => {

    const [operations, setOperations] = useState([]);

  useEffect(()=>{
    reload();
  }, [])

  const reload = () =>{
    fetch('http://localhost:4000/operations/lista_ultimas')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setOperations(data);
    })
    .catch((err) => {console.log('Data not found: ', err)})
  }

  return (
    <>
        <div className='container'>
        <User />
        <FormOperation />  
          <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12 '>
            <div className='row'>
              <h3>Ultima actividad</h3>
                {operations.map((operation)=>{
                      return <Operations key={operation.id} monto={operation.monto} fecha={operation.fecha} 
                      tipo={operation.tipo}/>
                  })}
            </div>
          </div>
        </div>
    </>
  )
}

export default Home;