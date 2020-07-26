import React,{ useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import Bookings from '../appointment/Bookings';
import BookingForm from '../appointment/BookingForm';
import BookingContext from '../../context/booking/BookingContext'
import PatientContext from '../../context/patient/PatientContext';

const PatientItem = () => {
    const bookingContext = useContext(BookingContext);
    const patientContext = useContext(PatientContext)
    const { _id, bookings, makeAppointment, getAppointments } = bookingContext;
    const { logout,  } = patientContext;
    
    const logOut = () => {
        logout();
    }

    return (
        <div className='container'>
            <ul>
                <li>
                    <p> </p><h4>Your appointments</h4>                       
                    <button className='btn btn-block btn-right' onClick={logOut} >Logout</button>

                    {bookings.length < 0 ? 
                    (<div>
                        <p className="center">You do not have any appointments</p>
                        <button className="btn btn-block" >Book Appointment</button>
                    </div>
                    ) :
                    (bookings.map(booking =>
                    <Bookings key={booking._id} booking={booking} />))}
                </li>
            </ul>
        </div>
    )
}

export default PatientItem;
