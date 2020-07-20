import React, { useReducer} from 'react';
import bookingReducer from './bookingReducer';
import {
    MAKE_APPOINTMENT,
    GET_APPOINTMENTS,
    CANCEL_APPOINTENTS
} from '../types';

const BookingState = props => {
    const initialState = {
        booking: null,
        loading: true,
        error: false
    }

    const [ state, dispatch ] = useReducer( bookingReducer, initialState)

    //show appointments
    const getAppointments = () =>{
        
    }

    //book an appointment
    const makeAppointment = () => {

    }
    //cancel appointment
    const cancelAppointments = () => {

    }
    return (
        <div>
            
        </div>
    )
}

export default BookingState
