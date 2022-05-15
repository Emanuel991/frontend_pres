import React, { useContext, useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { Login } from '../services/AuthService';
import {UserContext} from '../contexts/UserContext'
import { NavLink, useNavigate } from 'react-router-dom';
import './Forms.css'

const LoginForm = () => {
    
    const [form, setForm] = useState({});
    const {email,password} = form;
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setForm({...form})
        Login({email,password})
         .then((data) => {
            //  console.log(data)
            if(data === ""){
                setForm({...form})
            }else{
                const loginData = JSON.parse(data)
                setUser(loginData);
                localStorage.setItem('token', loginData.token);
                localStorage.setItem('user', loginData.userId);
                return navigate("/");
            }
        }) 
        .catch(error => {console.log(error)})
    }

  return (
    <>
        <div className='container-form position-absolute top-50 start-50 translate-middle'>
            <Form>
                <h3>Iniciar sesión</h3>
                <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id='email' name='email' defaultValue={form.email} onChange={handleChange}  
                            placeholder="Ingresar email" />
                        </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" id='password' name='password' defaultValue={form.password} onChange={handleChange} 
                            placeholder="Ingresar contraseña" />
                </Form.Group>
                <Button onClick={handleSubmit}>Submit</Button>
                <br />
                <NavLink to='/register'>no tienes una cuenta? registrate aquí</NavLink>
            </Form>
        </div>
    </>
  )
}

export default LoginForm