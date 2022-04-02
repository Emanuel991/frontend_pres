import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export default function FormOperation()  {

  const [show, setShow] = useState(false);

  const [form, setForm] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = e => {
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
  }

  const submit = e => {
    e.preventDefault()
    fetch('http://localhost:4000/operations/nueva_operacion', {
        method:"POST",
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
        body: JSON.stringify(form)
    })
    .then(res => {
        console.log(res)
        return res.json()})
    .catch((error)=>{
        console.log(error)})
    alert('Operación realizada exitosamente')
    setShow(false)
    window.location.reload();
  }

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Nueva Operación
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Operación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Concepto</Form.Label>
                        <Form.Control type="text" id='concepto' name='concepto' defaultValue={form.concepto} onChange={handleChange}  
                        placeholder="Ingresar concepto" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Tipo</Form.Label>
                        <Form.Select aria-label="TIpo de Operación" name='tipo' onChange={handleChange}>
                            <option value="ingreso">Ingreso</option>
                            <option value="egreso">Egreso</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Monto</Form.Label>
                        <Form.Control type="text" id='monto' name='monto' defaultValue={form.monto} onChange={handleChange} 
                        placeholder="Ingresar monto" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={submit}>
                Guardar cambios
            </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

