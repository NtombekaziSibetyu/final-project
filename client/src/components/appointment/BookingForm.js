import React, { useContext, useEffect} from 'react';
import BookingContext from '../../context/booking/BookingContext';

const BookingForm = () => {
    const bookingContext = useContext(BookingContext);
    const { booking, error, makeAppointment } = bookingContext;

    useEffect(() => {
        setBooking({
            type:'check-up',
            date: ''
        })
    }, [])

    const [booking, setBooking] = useState({
        type: 'check-up',
        date: ''
    });

    const { type, date} = booking;

    const handleChange = e => setBooking({...booking, [e.target.name]: e.target.value});

    const addBooking = e => {
        e.preventDefault();
        makeAppointment();
    }
    return (
        <form onSubmit = {addBooking}>
            <h3>Book an appointment</h3>
            <div className='form-group'>
                <label htmlFor="type">Type</label>
                <input type="range" name="" id="" value={type} onChange={handleChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor="date">Date and Time</label>
                <input type="datetime" name="" id="" value={date} onChange={handleChange}/>
            </div>
            <div className='form-btn'>
                <button type="submit" className='btn btn-block'>Book Appointment</button>
            </div>
        </form>
    )
}

export default BookingForm;
