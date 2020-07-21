import {
    REGISTER,
    REGISTER_ERROR,
    LOGIN,
    LOGIN_ERROR,
    REMOVE_ERRORS
} from '../types';

export default (state, action) => {
    switch( action.type) {
        case REGISTER:
        case LOGIN:
        localStorage.setItem('token', action.payload.token);   
            return{
                ...state,
                ...action.payload,
                authorised: true,
                loading: false,
                
                }
        case REGISTER_ERROR:
        case LOGIN_ERROR:
            return{
                ...state,
                ...action.payload,
                authorised: false,
                loading: false,
            }
        case REMOVE_ERRORS:
            return {
                ...state,
                error: null
            }
       default:
           return state;
    }
}