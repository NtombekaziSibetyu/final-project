import React, { useReducer} from 'react';
import axios from 'axios';
import {
    REGISTER,
    REGISTER_ERROR,
    LOGIN,
    LOGIN_ERROR,
    REMOVE_ERRORS,
    GET_PATIENT,
    ERROR,
    LOGOUT
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

    const setToken = token => {
        if(token) {
            axios.defaults.headers.common['x-auth-token'] = token;
        }else{
            delete axios.defaults.headers.common['x-auth-token'];
        }
    }

    //regiter a patient
    const register = async formData =>{
        const config = {     
            headers: { 'Content-Type': 'application/json' }
        }
        try {
            const res = axios.post('/api/patients',formData, config);
            dispatch({
                type:REGISTER,
                payload: res.data
            });
            showPatient()
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
            });
            showPatient()
        } catch (err) {
            dispatch({
                type: LOGIN_ERROR,
                payload: err.response.data.msg
            })
        }
    }

    //show the patients info
    const showPatient = async () => {
        if(localStorage.token){
            setToken(localStorage.token);
        }
        try {
            const res = await axios.get('/api/bookings')
            dispatch({type: GET_PATIENT, payload: res.data})
        } catch (error) {
            dispatch({ type: ERROR })
        }
    }

    //REMOVING THE ERRORS
    const removeErrors = () => dispatch({ type: REMOVE_ERRORS});

    //patient logout
    const logout = () => dispatch({ type: LOGOUT})

    return (
        <PatientContext.Provider
        value = {{
            token: state.token,
            authorised: state.authorised,
            loading: state.loading,
            user: state.user,
            error: state.error,
            setToken,
            register,
            showPatient,
            login,
            logout,
            removeErrors
        }}
        >   
            {props.children}
        </PatientContext.Provider>
    )
}

export default PatientState;
