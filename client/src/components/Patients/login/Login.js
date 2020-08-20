import React, { useEffect, useContext, useState} from 'react';
import PatientContext from '../../../context/patient/PatientContext';

const Login = props => {
    const patientContext = useContext( PatientContext );

    const { authorised, logIn, error, removeErrors} = patientContext;
    const createNode = (element) => {
        return document.createElement(element);
    }
    useEffect( () => {
        
        if( error === 'invalid credentials' ) {
            let message = document.getElementsByClassName('error')
            message.innerHTML = 'Invalid credentials';
            
            removeErrors(); 
        }
        if( authorised ) {
            props.history.push('/patient')
        }
        // eslint-disable-next-line
    }, [ authorised, error, props.history])

    const [patient, setPatient] = useState({
        email: '',
        password: ''  
    })

    const { email, password } = patient;
    const handleChange = e => setPatient({...patient, [e.target.name] : e.target.value});

    const loginPatient = e => {
        e.preventDefault(); 
           
        logIn(patient); 
        }
    //
    return (
        <div className='container'>
            <div>
                <h4>Not registered?</h4>
                <a href="/register">Register here</a>
            </div>
            <form onSubmit={loginPatient} className='form'>
                <h3>Login</h3>
                <div className='form-group'>
                    <label htmlFor='email'>Email Adsress</label>
                    <input type='email' name='email' value={email} 
                    onChange={handleChange} placeholder='Registered Email Address' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' 
                    value={password} onChange={handleChange} 
                     minLength='8' maxLength='13' placeholder='Enter password' required/>
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'  >Login</button>
                </div>
                <span className='error'></span>
            </form>
        </div>
    )
}

export default Login;
