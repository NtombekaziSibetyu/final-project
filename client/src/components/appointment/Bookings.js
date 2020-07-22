import React, {useEffect} from 'react';
import BookingContext from '../../context/booking/BookingContext'

const Booking = () => {
    const bookingContext = useContext(BookingContext);
    const { _id,bookings, getAppointments } = bookingContext;

    useEffect(() => {
        getAppointments();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='container'>
            
        </div>
    )
}

export default Booking;
