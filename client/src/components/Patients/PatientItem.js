import React,{ useEffect} from 'react';
import Booking from '../appointment/Booking';
import BookingContext from '../../context/booking/BookingContext'

const PatientItem = () => {
    const bookingContext = useContext(BookingContext);
    const { bookings, getAppointments } = bookingContext;

    useEffect(() => {
        getAppointments();
        // eslint-disable-next-line
    }, []);
    return (
        <div className='container'>
            <ul>
                <li>
                    <h4>Your appointments</h4>
                    {bookings.length === 0 ? 
                    (<p className="center">You do not have any appointments</p>) :
                    (bookings.map(booking =>
                    <Booking/>))}
                </li>
            </ul>
        </div>
    )
}

export default PatientItem;
