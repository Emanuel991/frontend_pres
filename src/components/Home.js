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
        <div>
            {operations.map((operation)=>{
                return <Operations key={operation.id} monto={operation.monto} fecha={operation.fecha} 
                tipo={operation.tipo}/>
            })}
        </div>
    </>
  )
}

export default Home