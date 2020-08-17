import React, { useContext, useEffect, useState} from 'react';
import PatientContext from '../../../context/patient/PatientContext'


const Register = props => {

    const patientContext = useContext( PatientContext );

    const { authorised, register, error, removeErrors} = patientContext;

    useEffect(() => {
        if(authorised){
            props.history.push('/patient');   
        }
        
        // eslint-disable-next-line
    }, [ authorised, error, props.history]);

    const [patient, setPatient] = useState({
        name: '',
        identityNo: '',
        email: '',
        phone: '',
        address: ''
    })

    const { name, identityNo, email, phone, address} = patient;

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
            alert('Registered, login to make appointments');
        }
    }
    return (
        <div className='container'>
        <form onSubmit ={registerPatient} className='form' >
            <h1>Register </h1>
            <div className='form-group'>
                <label htmlFor='name'>Fullname</label>
                <input type="text" name='name' value={name} 
                onChange={handleChange} placeholder='Fullname' required/>
            </div>
            <div className='form-group'>
                    <label htmlFor='identityNo'>ID Number</label>
                    <input type='password' name='identityNo' minLength='13'
                    value={identityNo} onChange={handleChange} 
                    placeholder='enter ID number' required />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' value={email} 
                onChange={handleChange}  placeholder='Email' required/>
            </div>
            <div className='form-group'>
                <label htmlFor='phone'>Phone</label>
                <input type="text" name='phone' value={phone} minLength='10'
                onChange={handleChange} required placeholder="Phone"/>
            </div>
            <div>
                <label htmlFor="address">Physical Address</label>
                <input type="text" name='address' value={address} onChange={handleChange} required/>
            </div>
            <div>
                <button className='btn btn-block' type='submit'>Register</button>
            </div>
            
        </form>
        </div>
    )
}

export default Register;
