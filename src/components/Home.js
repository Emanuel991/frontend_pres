import React, { useEffect, useState } from 'react'
import Operations from './Operations';

const Home = () => {

    const [operations, setOperations] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/lista_ultimas')
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setOperations(data);
    })
    .catch((err) => {console.log('Data not found: ', err)})
  }, [])

  return (
    <>
        <div className='container'>
          <div className='col p-2 '>
            <div className='row flex-column d-flex justify-content-center d-flex align-items-center '>
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

export default Home