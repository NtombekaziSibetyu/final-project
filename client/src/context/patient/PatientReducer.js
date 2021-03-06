import {
    REGISTER,
    REGISTER_ERROR,
    LOGIN,
    GET_PATIENT,
    LOGIN_ERROR,
    REMOVE_ERRORS,
    LOGOUT
} from '../types';

export default (state, action) => {
    switch( action.type) {
        case GET_PATIENT:
            return {
                ...state,
                authorised:true,
                patient: action.payload
            }
        case REGISTER:
        case LOGIN:
            localStorage.setItem('token', action.payload.token);   
            return{
                ...state,
                ...action.payload,
                authorised: true,
                }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return{
                ...state,
                ...action.payload,
                authorised: false,
                patient:null ,
                error: action.payload
            }
        case REMOVE_ERRORS:
            return {
                ...state,
                error: null
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                authorised: false,
                patient: null,
                error: action.payload
            }
       default:
           return state;
    }
}