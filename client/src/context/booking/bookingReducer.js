import {
    MAKE_APPOINTMENT,
    GET_APPOINTMENTS,
    CANCEL_APPOINTMENT
} from '../types';

export default ( state, action) => {
    switch( action.type) {
        case MAKE_APPOINTMENT:
            return{
                
            }
        case GET_APPOINTMENTS:
            return{

            }
        case CANCEL_APPOINTMENT:
            return{
                
            }
        default:
            return state;
    }
}
