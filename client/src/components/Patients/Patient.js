import React, { useContext, useEffect, Fragment } from 'react';
import PatientContext from '../../context/patient/PatientContext';
import BookingContext from '../../context/booking/BookingContext'; 
import BookingForm from '../appointment/BookingForm';
import Bookings from '../appointment/Bookings';

const Patient = props => {
    const bookingContext = useContext( BookingContext);
    const patientContext = useContext( PatientContext)
    const { bookings, getAppointments } = bookingContext
    const { logout, authorised } = patientContext;

    useEffect( ( ) => {
        if( authorised ) {
            getAppointments();
        }
        if( !authorised) {
            props.history.push('/');
        }
    },[ authorised, props.history])

    const onClick = () => {
        logout();
    }
    return (
        <div className='container'>
            <div>
            <button className='btn' style={{float:'left'}}><a href="/book" >New Booking</a></button>
            <button className='btn' style={{float:'right'}} onClick={onClick}> Log out</button> 
            </div>
          <div>
          { bookings.length !== 0 ? 
           bookings.map(( booking => 
           <Bookings booking={booking} />)) 
          : <BookingForm/>}
          </div>
        </div>
    )
}

export default Patient;
