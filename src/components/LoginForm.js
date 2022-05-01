import React, { useContext, useState } from 'react'
import {Button, Form} from 'react-bootstrap'
import { Login } from '../services/AuthService';
import {UserContext} from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom';

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
        <div className='container'>
            <Form>
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
            </Form>
        </div>
    </>
  )
}

export default LoginForm