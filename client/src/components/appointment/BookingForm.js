import React, { useContext, useEffect, useState} from 'react';
import BookingContext from '../../context/booking/BookingContext';
import './booking.css'

const BookingForm = props => {

    const bookingContext = useContext(BookingContext);

    const { booked, makeAppointment } = bookingContext;

    // useEffect(() => {
    //     if( booked ) {
    //        const msg = document.getElementsByClassName('booked') ;
    //        msg.innerHTML = 'The time and date you chose is booked'
    //     //    props.history.push('/');
    //     }
    // }, [ booked, props.history])

    // const [ booking, setBooking ] = useState({
    //     type:'',
    //     date:'',
    //     time:''
    // });

    const [type, setType] = useState('');

    const [time, setTime] = useState('');

    const [date, setDate] = useState('');
    
    // const handleChange = e => setBooking(
    //     {...booking, [e.target.name]: e.target.value}
    //     );

    const addBooking = e => {
        e.preventDefault();
        const booking = {type, date, time}
        makeAppointment(booking);
        props.history.push('/patient');
    }
        
    return (
        <div className="container center">
        <form onSubmit = { addBooking } className='booking-form'>
            <h4>Make an Appointment</h4>
        <div className="form-group center">
            <label htmlFor="types">Choose Type</label>
            <select name="types" id="types" value={type}
            onChange={(e) => setType(e.target.value)}
             required style={{display:"inline"}} >

                <option id="type" value="general" >General</option>
                <option id="type" value= " Dentist">Dentist</option>
                <option id="type" value="Optometry">Eye Appointment</option>
                <option id="type" value="child">Child Appointment</option>
            
            </select>
            </div> 
            <div className='form-group center'>
                <label htmlFor="date">Appointment Date</label>
                <input type="date" name="date" id="date" 
                value={date} onChange={(e) => setDate(e.target.value)} required/>
            </div>
            <div className="form-group center">
                <label htmlFor="time">Appointment Time</label>
                <select name="time" id="time" value={time}
                onChange={(e) => setTime(e.target.value)}
                 required style={{display:"inline"}}>

                    <option value= "08:00">8:30-9:30</option>
                    <option value="9:30-10:30">9:30-10:30</option>
                    <option value="10:30-11:30">10:30-11:30</option>
                    <option value="12:30-13:30">12:30-13:30</option>
                    <option value="13:30-14:30">13:30-14:30</option>
                    <option value="14:30-15:30">14:30-15:30</option>
                    <option value="15:30-16:30">15:30-16:30</option>
                
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
