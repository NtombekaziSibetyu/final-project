import React, {useEffect, useContext} from 'react';
import BookingContext from '../../context/booking/BookingContext'

const Bookings = ({booking}) => {
    const bookingContext = useContext(BookingContext);
    const {  getAppointments, cancelAppointments } = bookingContext;
    const { _id, type, date} = booking;

    useEffect(() => {
        getAppointments();
        // eslint-disable-next-line
    }, []);

    const onClick = () => {
        cancelAppointments(_id);
    }

    return (
        <div className='card'>
           <h3 className="text-primary text-left">
               Appointment Type : {type}
           </h3>
           <h3>
               Date and Time : { date }
           </h3>
           <p>
               <button className='btn btn-block btn-dark' onClick={onClick}> Cancel </button>
           </p>
        </div>
    )
}

export default Bookings;
