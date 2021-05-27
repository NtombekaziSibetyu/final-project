import React, { useEffect, useContext, useState} from 'react';
import { useHistory } from "react-router-dom";
import PatientContext from '../../../context/patient/PatientContext';
import './Login.css'

const Login = props => {
    const patientContext = useContext( PatientContext );
    const history = useHistory();

    const { authorised, logIn, error, removeErrors} = patientContext;
    
    useEffect( () => {
        
        if( error === 'invalid credentials' ) {
        
            removeErrors(); 
        }
        if( authorised ) {
            props.history.push('/patient');
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
        <div className='container center'>
            <div className="text-center">
                <h4>Not registered?</h4>
                <a href="/register">Register here</a>
                <h3>Login</h3>
            </div>
            <form onSubmit={loginPatient} className='form'>
                <div className="mb-3">
                    <input type="text" className="form-control" id="formGroupExampleInput"
                     value={email} 
                     onChange={handleChange} placeholder='Registered Email Address' required/>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                    value={password} onChange={handleChange} 
                    minLength='8' maxLength='13' placeholder='Enter password' required/>
                </div>
                <button type='submit' className="btn btn-info btn-center">Login</button>
                <span className='error'></span>
            </form>
        </div>
    )
}

export default Login;
