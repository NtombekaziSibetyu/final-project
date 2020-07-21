import React, { useReducer} from 'react';
import axios from 'axios';
import bookingReducer from './bookingReducer';
import BookingContext from './BookingContext';
import {
    MAKE_APPOINTMENT,
    GET_APPOINTMENTS,
    CANCEL_APPOINTMENT,
    BOOKING_ERROR,
    REMOVE_ERRORS
} from '../types';
import { response } from 'express';

const BookingState = props => {
    const initialState = {
        booking: null,
        error: false
    }

    const [ state, dispatch ] = useReducer( bookingReducer, initialState)

    //show appointments
    const getAppointments = async booking =>{

        try {
           const res = await axios.get('/api/booking', booking) 
            dispatch({ type: GET_APPOINTMENTS, payload: res.data})
        } catch (err) {
            dispatch({ type: BOOKING_ERROR, payload: err.response.msg})
        }
    }

    //book an appointment
    const makeAppointment = async booking => {
        const config = {
            headers: {'Content-Type':'application/json'}
        }
        try {
            const res = await axios.post('api/booking', booking, config)
            dispatch({type: MAKE_APPOINTMENT, payload: res.data})
        } catch (err) {
            dispatch({ type: BOOKING_ERROR, payload: err.response.msg })
        }
    }
    //cancel appointment
    const cancelAppointments = async id => {
        try {
            await axios.delete(`/api/booking/${id}`)
            dispatch({ type: CANCEL_APPOINTMENT, payload: id})
        } catch (err) {
            dispatch({ type: BOOKING_ERROR, payload: err.response.msg})
        }
    }
    return (
        <BookingContext.Provider
            value = {{
                booking: state.booking,
                error: state.error,
                cancelAppointments,
                makeAppointment,
                getAppointments
            }}>
           {props.children} 
        </BookingContext.Provider>
    )
}

export default BookingState;
