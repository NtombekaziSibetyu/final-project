import {
    MAKE_APPOINTMENT,
    GET_APPOINTMENTS,
    CANCEL_APPOINTMENT,
    REMOVE_ERRORS
} from '../types';


export default ( state, action) => {
    switch( action.type) {
        case MAKE_APPOINTMENT:
            return{
               ...state,
               bookings: [action.payload, ...state.bookings],
               booked : true,
               error : false
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
                    booking => booking._id !== action.payload),
                booked: false  
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
