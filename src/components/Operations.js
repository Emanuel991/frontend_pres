import React from 'react'

const Operations = (props) => {
  return (
    <>
        <div className="card border-top-0 border-2 shadow rounded m-3">
          <div className="card-body">
              <h5 className="card-title">{props.fecha}</h5>
            <div className='d-flex mt-3'>
              <p className="card-text me-5">{props.tipo} monto: $ {props.monto}</p>
              <div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Operations