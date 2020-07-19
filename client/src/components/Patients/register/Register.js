import React from 'react';

const Register = () => {
    return (
        <form>
            <h1>Register </h1>
            <div className='form-group'>
                <label htmlFor='name'>Fullname</label>
                <input type="text" placeholder='fullname'/>
            </div>
            <div className='form-group'>
                <label htmlFor='idno'>ID number</label>
                <input type="text" placeholder='identity number' />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='email'/>
            </div>
            <div>
                <button className='btn-block'>Register</button>
            </div>
            
        </form>
    )
}

export default Register;
