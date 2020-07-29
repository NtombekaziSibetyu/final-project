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
               bookings: [action.payload, ...state.bookings],
            }
        case GET_APPOINTMENTS:
            return{
                ...state,
                bookings: action.payload
            }
        case CANCEL_APPOINTMENT:
            return{
                ...state,
                bookings: state.bookings.filter(
                    booking => booking._id !== action.payload)  
            }
        default:
            return state;
    }
}
