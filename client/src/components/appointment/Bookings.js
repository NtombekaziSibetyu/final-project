import React, { useEffect, useContext } from 'react';
import BookingContext from '../../context/booking/BookingContext'

const Bookings = ({ booking}) => {
    const bookingContext = useContext(BookingContext);
    const {  getAppointments, cancelAppointments } = bookingContext;
    const { _id, type, date, time} = booking;

    useEffect(() => {
        getAppointments();
        // eslint-disable-next-line
    }, []);

    const onClick = () => {
        cancelAppointments(_id);
    }

    return (
        <div className = 'container'>
            <div className = 'card'>
            <h5 className = "text text-left">
               Appointment Type : { type }
           </h5>
           <h5 className="text text-left" >
               Date : { date }
           </h5 >
           <h5  className="text text-left">
               Time : {time}
           </h5>
           <p>
               <button className='btn btn-dark' onClick={onClick}> Cancel </button>
           </p>
          </div> 
        </div>
    )
}

export default Bookings;
