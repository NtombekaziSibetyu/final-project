import React, { useContext, useEffect } from 'react';
import PatientContext from '../../context/patient/PatientContext';
import BookingContext from '../../context/booking/BookingContext'; 
import BookingForm from '../appointment/BookingForm';
import Bookings from '../appointment/Bookings';

const Patient = () => {
    const bookingContext = useContext( BookingContext);
    const patientContext = useContext(PatientContext)
    const { bookings } = bookingContext
    const { logout } = patientContext;

    useEffect( () => {
        patientContext.showPatient();
    })

    const onClick = () => {
        logout();
    }
    return (
        <div className='container'>
        <button className='btn' style={{float:'right'}} onClick={onClick}> Log out</button>
            <h3>Welcome </h3>  
           {bookings !== 0 ? 
           (bookings.map( booking => (
                   <Bookings booking={booking} />
               ))) :
               (<BookingForm/>)
           } 
        </div>
    )
}

export default Patient
