import React, { useReducer } from 'react';
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
import patientReducer from './patientReducer'

const PatientState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authorised: false,
        patient: null,
        error: null
    }
    const SettingToken = token => {
        if(token) {
            axios.defaults.headers.common['x-auth-token'] = token;
        } else {
            delete axios.defaults.headers.common['x-auth-token'];
        }
    };
    const [ state, dispatch] = useReducer( patientReducer, initialState);

    //show the patients infos
    const showPatient = async () => {
        if(localStorage.token){
            SettingToken(localStorage.token);  
         }
        try {
            const res = await axios.get('/api/auth')
            dispatch({
                type: GET_PATIENT, 
                payload: res.data})
        } catch (error) {
            dispatch({ type: ERROR })
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
                type: REGISTER,
                payload: res.data
            });
            showPatient();
        } catch (err) {
            dispatch({
                type: REGISTER_ERROR,
                payload: err.response.data.msg
            })
        }
    }

    //patient login
    const logIn = async formData => {
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }; 
        try {
            const res = await axios.post('/api/auth', formData, config);

            dispatch({
                type: LOGIN,
                payload: res.data
            });
            showPatient();
        } catch (err) {
            dispatch({
                type: LOGIN_ERROR,
                payload: err.response.data.msg
            })
        }
    }

    //REMOVING THE ERRORS
    const removeErrors = () => dispatch({ type: REMOVE_ERRORS});

    //patient logout
    const logout = () => dispatch({ type: LOGOUT })

    return (
        <PatientContext.Provider
        value = {{
            token: state.token,
            authorised: state.authorised,
            patient: state.patient,
            error: state.error,
            SettingToken,
            register,
            showPatient,
            logIn,
            logout,
            removeErrors
        }}
        >   
            {props.children}
        </PatientContext.Provider>
    )
}

export default PatientState;
