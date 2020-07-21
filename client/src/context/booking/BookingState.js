import React, { useReducer} from 'react';
import bookingReducer from './bookingReducer';
import BookingContext from './BookingContext';
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
        <BookingContext.Provider
        value = {{
            booking: state.booking,
            loading: state.loading,
            error: state.error,
            cancelAppointments,
            makeAppointment,
            getAppointments
        }}>
           {props.children} 
        </BookingContext.Provider>
    )
}

export default BookingState
