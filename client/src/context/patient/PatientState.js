import React, { useReducer} from 'react';
import axios from 'axios';
import {
    REGISTER,
    REGISTER_ERROR,
    LOGIN,
    LOGIN_ERROR,
    REMOVE_ERRORS
} from '../types';
import PatientContext from './PatientContext';
import PatientReducer from './PatientReducer'

const PatientState = props => {

    const initialState = [{
        token: localStorage.getItem('token'),
        authorised: false,
        patient: null,
        loading: true,
        error: null
    }
    ]
    const [ state, dispatch] = useReducer( PatientReducer, initialState);

    //regiister a patient
    const register = async formData =>{
        const config = {     
            headers: { 'Content-Type': 'application/json' }
        }
        try {
            const res = axios.post('/api/patients',formData, config);
            dispatch({
                type:REGISTER,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: REGISTER_ERROR,
                payload: err.response.data.msg
            })
        }
    }
    //patient login
    const login = async formData => {
        const config = { headers: { 'Content-Type': 'application/json' }}

        
        try {
            const res = await axios.post('/api/auth', formData, config);

            dispatch({
                type: LOGIN,
                payload: res.data
            }) 
        } catch (err) {
            dispatch({
                type: LOGIN_ERROR,
                payload: err.response.data.msg
            })
        }
    }
    //REMOVING THE ERRORS
    const removeErrors = () => dispatch({ type: REMOVE_ERRORS});

    return (
        <PatientContext.Provider
        value = {{
            token: state.token,
            authorised: state.authorised,
            loading: state.loading,
            user: state.user,
            error: state.error,
            register,
            login,
            removeErrors
        }}
        >   
            {props.children}
        </PatientContext.Provider>
    )
}

export default PatientState;
