import React, { useEffect, useContext, useState} from 'react';
import PatientContext from '../../../context/patient/PatientContext';
import Register from '../register/Register'
import PatientState from '../../../context/patient/PatientState';

const Login = props => {
    const patientContext = useContext( PatientContext );

    const { authorised, logIn, error, removeErrors} = patientContext;

    useEffect(() => {
        if(authorised){
            props.history.push('/');
        }
        if(error === 'invalid credentials') {
            alert('User cannot be registered');
            removeErrors(); 
        }
        // eslint-disable-next-line
    }, [ authorised, error, props.history])

    const [patient, setPatient] = useState({
        name: '',
        identityNo: ''  
    })

    const { name, identityNo } = patient;

    const handleChange = e => setPatient({...patient, [e.target.name] : e.target.value});

    const loginPatient = e => {
        e.preventDefault();
        if(name === '' || identityNo === ''){
            alert('Please fill in both fullname and password')
        }
        else {
            logIn({
                name,
                identityNo
            });
        }
    }

    return (
        <div className='container'>
            <div>
                <h4>Not registered?</h4>
                <a href="/register">Register here</a>
            </div>
            <form onSubmit={loginPatient}>
                <h3>Login</h3>
                <div className='form-group'>
                    <label htmlFor='name'>Fullname</label>
                    <input type='text' name='name' value={name} onChange={handleChange} placeholder='fullname' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor='identityNo'>Password</label>
                    <input type='text' name='identityNo' value={identityNo} onChange={handleChange} required placeholder='enter ID number'/>
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit' value="Login" >Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
