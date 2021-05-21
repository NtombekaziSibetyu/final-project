import React, { useContext, useEffect, useState} from 'react';
import BookingContext from '../../context/booking/BookingContext';
import './booking.css'

const BookingForm = props => {

    const bookingContext = useContext(BookingContext);

    const { booked, makeAppointment } = bookingContext;

    useEffect(() => {
        if( booked ) {
           const msg = document.getElementsByClassName('booked') ;
           msg.innerHTML = 'The time and date you chose is booked'
           props.history.push('/');
        }
    }, [ booked, props.history])

    const [ booking, setBooking ] = useState({
        type:'',
        date:'',
        time:''
    });

    const { type, date, time } = booking;

    const handleChange = e => setBooking(
        {...booking, [e.target.name]: e.target.value}
        );

    const addBooking = e => {
        e.preventDefault();
        makeAppointment(booking);
    }
        
    return (
        <div className="container center">
        <form onSubmit = { addBooking } className='booking-form'>
            <h4>Make an Appointment</h4>
        <div className="form-group center">
            <label htmlFor="types">Choose Type</label>
            <select name="types" id="types" 
             required style={{display:"inline"}} >

                <option id="type" value={type === "general"} onChange={handleChange}>General</option>
                <option id="type" value={type ===" Dentist"} onChange={handleChange}>Dentist</option>
                <option id="type" value={type === "Optometry"} onChange={handleChange}>Eye Appointment</option>
                <option id="type" value={type === "child"} onChange={handleChange}>Child Appointment</option>
            
            </select>
            </div> 
            <div className='form-group center'>
                <label htmlFor="date">Appointment Date</label>
                <input type="date" name="date" id="date" 
                value={date} onChange={handleChange} required/>
            </div>
            <div className="form-group center">
                <label htmlFor="time">Appointment Time</label>
                <select name="time" id="time" 
                 required style={{display:"inline"}}>

                    <option value={time === "08:00"} onChange={handleChange}>8:30-9:30</option>
                    <option value={time === "9:30-10:30"} onChange={handleChange}>9:30-10:30</option>
                    <option value={time === "10:30-11:30"} onChange={handleChange}>10:30-11:30</option>
                    <option value={time === "12:30-13:30"} onChange={handleChange}>12:30-13:30</option>
                    <option value={time === "13:30-14:30"} onChange={handleChange}>13:30-14:30</option>
                    <option value={time === "14:30-15:30"} onChange={handleChange}>14:30-15:30</option>
                    <option value={time === "15:30-16:30"} onChange={handleChange}>15:30-16:30</option>
                
                </select>
            </div>
            <div className='form-btn'>
                <button type="submit" className='btn btn-block btn-center'>Book Appointment</button>
            </div>    
        </form>
    </div>  
    )
}

export default BookingForm;
