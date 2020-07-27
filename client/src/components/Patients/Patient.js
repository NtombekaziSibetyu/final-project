import React, { useContext } from 'react';
import PatientContext from '../../context/patient/PatientContext';
import BookingContext from '../../context/booking/BookingContext'; 
import BookingForm from '../appointment/BookingForm';
import Bookings from '../appointment/Bookings';

const Patient = () => {
    const bookingContext = useContext( BookingContext);
    const patientContext = useContext(patientContext)
    const { bookings } = bookingContext
    const { logout } = patientContext;

    const onClick = () => {
        logout();
    }
    return (
        <div>
           <h3>Welcome <span className='btn btn-block' onClick={onClick}> Log out</span></h3>
           {
               bookings === null ? (
                    <BookingForm/>   
               ) :
               (bookings.map( booking => (
                   <Bookings booking={booking} />
               )))
           }
           
        </div>
    )
}

export default Patient
