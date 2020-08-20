import React, { useContext, useEffect, useState} from 'react';
import BookingContext from '../../context/booking/BookingContext';
import PatientContext from '../../context/patient/PatientContext';

const BookingForm = props => {

    const bookingContext = useContext(BookingContext);
    const patientContext = useContext( PatientContext)

    const { booked, makeAppointment, getAppointments } = bookingContext;
    const { authorised } = patientContext;

    useEffect(() => {
        setBooking({
            type:'',
            date: '',
            time:''
        })  
        if( booked ) {
           const msg = document.getElementsByClassName('booked') ;
           msg.innerHTML = 'The time and date you chose is booked'
           props.history.push('/');
        }
    }, [ booked, props.history])

    const [ bookings, setBooking ] = useState({
        type:'',
        date:'',
        time:''
    });

    const { type, date, time} = bookings;

    const handleChange = e => setBooking({...bookings, [e.target.name]: e.target.value});

    const addBooking = e => {
        e.preventDefault();
        makeAppointment(bookings);
        if(authorised){
            getAppointments(); 
            props.history.push('/patient')
        }
    }
        
    return (
        <div className="container center">
        <form onSubmit = { addBooking } className='booking-form'>
            <div className="from-group">
            <div className="input-field col">
                <label htmlFor="type">Select Appointment Type</label>
                <select name="type" id="type" className="dropdowm-content">
                <option value="" disabled >Choose your option</option>
                <option value={type} defaultValue="">Dentist</option>
                <option value={type}>Optometrist</option>
                <option value={type}>General</option>
                <option value={type}>Child Check-up</option>
                </select>
            </div>
            </div>
            <div className='form-group'>
                <label htmlFor="date">Appointment Date</label>
                <input type="date" name="date" id="date" 
                value={date} onChange={handleChange} required/>
            </div>
            <div className="from-group">
                <label htmlFor="time">Appointment Time</label>
                <select>
                    <option></option>
                </select>
            </div>
            <div className='form-btn'>
                <button type="submit" className='btn btn-block'>Book Appointment</button>
            </div>
            
        </form>
    </div>  
    )
}

export default BookingForm;
