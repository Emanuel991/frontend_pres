import React from 'react'

const Operations = (props) => {
  return (
    <>
        <div className="card w-50 border-top-0 border-2 rounded">
          <div className="card-body">
              <h5 className="card-title">{props.fecha}</h5>
            <div className='d-flex mt-3'>
              <p className="card-text me-5">{props.tipo} monto: {props.monto}$</p>
              <a href="#" className="btn btn-primary">modificar</a>
              <a href="#" className="btn btn-danger">Eliminar</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default Operations