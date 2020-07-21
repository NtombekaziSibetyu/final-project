import React from 'react';

const Login = () => {
    return (
        <div className='container'>
            <form>
                <h3>
                    Login
                </h3>
                <div className='form-group'>
                    <label htmlFor='name'>Fullname</label>
                    <input type='text' placeholder='fullname'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='identityNo'>Password</label>
                    <input type='text' placeholder='enter ID number'/>
                </div>
                <div className='form-group'>
                    <button className='btn btn-block'>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
