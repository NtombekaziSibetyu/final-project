import {
    MAKE_APPOINTMENT,
    GET_APPOINTMENTS,
    CANCEL_APPOINTMENT
} from '../types';

export default ( state, action) => {
    switch( action.type) {
        case MAKE_APPOINTMENT:
            return{
               ...state,
               booking: [action.payload, ...state.booking],
            
            }
        case GET_APPOINTMENTS:
            return{
                ...state,
                booking: action.payload
            }
        case CANCEL_APPOINTMENT:
            return{
              ...state  
            }
        default:
            return state;
    }
}
