import React, { useContext, useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import PatientContext from '../../../context/patient/PatientContext'
import './Register.css'


const Register = props => {

    const patientContext = useContext( PatientContext );
    const history = useHistory();

    const { register, error, removeErrors} = patientContext;

    const [patient, setPatient] = useState({
        name: '',
        identityNo: '',
        email: '',
        password:"",
        phone: '',
        address: ''
    })

    const { name, identityNo, email, password, phone, address} = patient;

    const handleChange = e => setPatient(
        {...patient, [e.target.name] : e.target.value}
        );

    const registerPatient = e => {
        e.preventDefault();

        if(error === 'The ID number you have entered is already registered/ belongs to someone else'){
            alert('User cannot be registered');
            removeErrors();
        }else {
            register(patient);
            props.history.push('/patient')
            alert('Registered, login to make appointments');
        }
    }

    return (
        <div className='container'>
            <form onSubmit ={registerPatient} className='form' >
                <h1 className="text-center">Register </h1>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control"
                        required
                        value={name} 
                        onChange={handleChange} 
                        placeholder="Full name" aria-label="Full name"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control"
                        required 
                        minLength='13'
                        maxLength='13'
                        value={identityNo} onChange={handleChange} 
                        placeholder="ID Number" aria-label="ID Number"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" 
                        value={phone} minLength='10'
                        onChange={handleChange} required placeholder="Phone"/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" 
                        value={address} onChange={handleChange} required
                        placeholder="Address" aria-label="Address"/>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" 
                        value={email} 
                        onChange={handleChange}
                        placeholder="Email" aria-label="Email" required/>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" 
                        value={password}
                        minLength='8' maxLength='13'
                        onChange={handleChange}  placeholder='Password' required/>
                    </div>
                </div>
                <button type='submit' className="btn btn-info btn-center">Register</button>
            </form>
        </div>
    )
}

export default Register;
