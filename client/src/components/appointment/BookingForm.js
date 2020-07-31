import React, { useContext, useEffect, useState} from 'react';
import BookingContext from '../../context/booking/BookingContext';
import PatientContext from '../../context/patient/PatientContext';

const BookingForm = props => {
    const bookingContext = useContext(BookingContext);
    const patientContext = useContext( PatientContext)

    const { booked, makeAppointment, getAppointments } = bookingContext;
    const { logout, authorised } = patientContext;


    useEffect(() => {
        setBooking({
            type:'',
            date: ''
        })  
        if(booked) {
           props.history.push('/');
        }
    }, [booked, props.history])

    const [bookings, setBooking] = useState({
        type: '',
        date: ''
    });

    const { type, date} = bookings;

    const handleChange = e => setBooking({...bookings, [e.target.name]: e.target.value});

    const addBooking = e => {
        e.preventDefault();
        makeAppointment(bookings);
        if(authorised){
            getAppointments(); 
        }
    }
    
    return (
        <div>
        <form onSubmit = {addBooking} className='booking-form'>
            <div className='form-group'>
                <label htmlFor='type'>Appointment Type</label>
                <input type='text' name='type' id='type'
                value={type} onChange={handleChange}></input>
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
    </div>  
    )
}

export default BookingForm;
