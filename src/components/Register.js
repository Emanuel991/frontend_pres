import React from 'react';
import { Formik } from 'formik';
import { register } from '../services/UserService';
import './Forms.css'

const Register = () => (
  <div className='container'>
    <Formik initialValues={{ nombre: '', apellido: '', dni: '', email: '', username: '', password: '', confirmPwd: '' }}
        validate={values => {
            const errors = {}
            if(!values.nombre){
                errors.nombre ='Por favor, ingresa un nombre'
            }
            if(!values.email){
                errors.email = 'Por favor ingresa un correo electronico'
            }else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Direccion de correo electronico inválida'
            }
            if(values.password !== values.confirmPwd ){
                errors.confirmPwd = 'Las contraseñas no coinciden'
            }
            if(!/^[A-Za-z]\w{7,14}$/.test(values.password)){
                errors.password = 'la contraseña debe tener entre 7 y 16 caracteres y contener mayusculas, minusculas y debe empezar con una letra'
            }
            if(values.dni.length !== 8)
                errors.dni = 'el dni solo debe contener 8 digitos numericos'
            return errors;
        }}
        onSubmit={(values, {setSubmitting}) => {
            const {nombre, apellido, dni, email, username, password} = values;
            register({nombre, apellido, dni, email, username, password})
            .then(res => {
                if (res) {
                    console.log('response: ', res);
                    return res;
                }
                return;
            })
        }}>
        {({ values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
            <form onSubmit={handleSubmit} className='m-4 container-form position-absolute top-50 start-50 translate-middle' >
            <h3>Crear nueva cuenta</h3>
            <div>
                <label htmlFor='nombre' className='form-label'>Nombre</label>
                <input type='text' className='form-control' placeholder='nombre' id='nombre' 
                name='nombre' value={values.nombre} onChange={handleChange} onBlur={handleBlur}/>
                <div className='error'>{errors.nombre && touched.nombre && errors.nombre}</div>
            </div>
            <div>
                <label htmlFor='apellido' className='form-label'>Apellido</label>
                <input type='text' className='form-control' placeholder='apellido' 
                name='apellido' value={values.apellido} onChange={handleChange} onBlur={handleBlur} id='apellido'/>
            </div>
            <div>
                <label htmlFor='dni' className='form-label'>DNI</label>
                <input type='text' className='form-control' placeholder='dni' 
                name='dni' value={values.dni} onChange={handleChange} onBlur={handleBlur} id='dni'/>
                <div className='error'>{errors.dni && touched.dni && errors.dni}</div>
            </div>
            <div>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='text' className='form-control' placeholder='email' 
                name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} id='email'/>
                <div className='error'>{errors.email && touched.email && errors.email}</div>
            </div>
            <div>
                <label htmlFor='username' className='form-label'>Nombre de usuario</label>
                <input type='text' className='form-control' placeholder='username' 
                name='username' value={values.username} onChange={handleChange} onBlur={handleBlur} id='username'/>
            </div>
            <div>
                <label htmlFor='password' className='form-label'>Contraseña</label>
                <input type='password' className='form-control' placeholder='pwd' 
                name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} id='password'/>
                <div className='error'>{errors.password && touched.password && errors.password}</div>
            </div>
            <div>
                <label htmlFor='confirmPwd' className='form-label'>Repetir Contraseña</label>
                <input type='password' className='form-control' placeholder='confirm password' 
                name='confirmPwd' value={values.confirmPwd} onChange={handleChange} onBlur={handleBlur} id='confirmPwd'/>
                <div className='error'>{errors.confirmPwd && touched.confirmPwd && errors.confirmPwd}</div>
            </div>
            <br />
            <button type='submit' className='btn btn-dark'>Register</button>
        </form>
        )}
    </Formik>
  </div>
);

export default Register;