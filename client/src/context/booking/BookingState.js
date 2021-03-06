import React, { useReducer} from 'react';
import axios from 'axios';
import bookingReducer from './bookingReducer';
import BookingContext from './BookingContext';
import SetToken from '../../utils/setToken';
import {
    MAKE_APPOINTMENT,
    GET_APPOINTMENTS,
    CANCEL_APPOINTMENT,
    BOOKING_ERROR,
    REMOVE_ERRORS
} from '../types';

const BookingState = props => {
    const initialState = {
        bookings: [],
        error: false,
        booked: false
    }

    const [ state, dispatch ] = useReducer( bookingReducer, initialState )

    //show appointments
    const getAppointments = async () =>{
        let config = {     
            headers: { 'Content-Type': 'application/json' }
        }
        if(localStorage.token){
           config = SetToken(localStorage.token);  
        }
        try {
           const res = await axios.get('/api/bookings', config) 
            dispatch({ type: GET_APPOINTMENTS, payload: res.data})
        } catch (err) {
            dispatch({ type: BOOKING_ERROR, payload: err.response.msg })
        }
    }

    //book an appointment
    const makeAppointment = async booking => {
        let config = {     
            headers: { 'Content-Type': 'application/json' }
        }
        if(localStorage.token){
           config = SetToken(localStorage.token);  
        }
        try {
            const res = await axios.post('api/bookings', booking, config)
            dispatch({
                type: MAKE_APPOINTMENT, 
                payload: res.data})
            getAppointments();
        } catch (err) {
            dispatch({ type: BOOKING_ERROR, payload: err.response.msg })
        }
      }

    //cancel appointment
    const cancelAppointments = async id => {
        let config = {     
            headers: { 'Content-Type': 'application/json' }
        }
        if(localStorage.token){
           config = SetToken(localStorage.token);  
        }
        try {
            await axios.delete(`/api/bookings/${id}`, config)
            dispatch({ type: CANCEL_APPOINTMENT, payload: id})
        } catch (err) {
            dispatch({ type: BOOKING_ERROR, payload: err.response.msg})
        }
    }

    //REMOVING THE ERRORS
    const removeErrors = () => dispatch({ type: REMOVE_ERRORS})

    
    return (
        <BookingContext.Provider
            value = {{
                bookings: state.bookings,
                error: state.error,
                booked: state.booked,
                cancelAppointments,
                makeAppointment,
                getAppointments,
                SetToken,
                removeErrors
            }}>
           {props.children} 
        </BookingContext.Provider>
    )
}

export default BookingState;
