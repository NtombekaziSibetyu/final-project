import React, { useContext, useEffect, useState} from 'react';
import BookingContext from '../../context/booking/BookingContext';

const BookingForm = () => {
    const bookingContext = useContext(BookingContext);
    const { booking, error, makeAppointment } = bookingContext;

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
        makeAppointment({
            type,
            date
        });
    }
    return (
        <form onSubmit = {addBooking}>
            <h3>Book an appointment</h3>
            <div className='form-group'>
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    <option value={'Dentist'}>Dentist</option>
                    <option value={'General'}>General Check-up</option>
                    <option value={'Optometry - Eye Test'}>Optometrist</option>
                    <option value={"Pediatrician"}>Pediatrician</option>
                </select>
            </div>
            <div className='form-group'>
                <label htmlFor="date">Date and Time</label>
                <input type="datetime" name="date" id="date" value={date} onChange={handleChange}/>
            </div>
            <div className='form-btn'>
                <button type="submit" className='btn btn-block'>Book Appointment</button>
            </div>
        </form>
    )
}

export default BookingForm;
