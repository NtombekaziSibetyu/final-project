import {
    REGISTER,
    REGISTER_ERROR,
    LOGIN,
    LOGN_ERROR
} from '../types';

export default (state, action) => {
    switch( action.type) {
        case REGISTER:
        case LOGIN:
        localStorage.setItem('token', action.payload.token);   
            return{
                ...state,
                ...action.payload,
                authorsed: true,
                loading: false
                }
       default:
           return state;
    }
}