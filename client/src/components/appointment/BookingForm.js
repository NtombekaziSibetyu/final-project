import React, { useContext, useEffect, useState} from 'react';
import BookingContext from '../../context/booking/BookingContext';

const BookingForm = () => {
    const bookingContext = useContext(BookingContext);
    const {  makeAppointment } = bookingContext;

    useEffect(() => {
        setBooking({
            type:'',
            date: ''
        })
    }, [])

    const [bookings, setBooking] = useState({
        type: '',
        date: ''
    });

    const { type, date} = bookings;

    const handleChange = e => setBooking({...bookings, [e.target.name]: e.target.value});

    const addBooking = e => {
        e.preventDefault();
        makeAppointment(bookings);
    }
    
    return (
        <form onSubmit = {addBooking} className='form'>
            <h3>Book an appointment</h3>
            <div className='form-group'>
                <label htmlFor="type">Type</label>
                <input type="text" id="type" name="type" 
                onChange={handleChange}
                value={type} required/>
            </div>
            <div className='form-group'>
                <label htmlFor="date">Appointment Date</label>
                <input type="datetime-local" name="date" id="date" 
                value={date} onChange={handleChange} required/>
            </div>
            
            <div className='form-btn'>
                <button type="submit" className='btn btn-block'>Book Appointment</button>
            </div>
        </form>
    )
}

export default BookingForm;
