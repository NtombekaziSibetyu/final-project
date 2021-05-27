import React, { useContext} from 'react';
import PatientContext from "../../context/patient/PatientContext";
import './Home.css'

const Home = props => {

    const patientContext = useContext(PatientContext)
    const { authorised } = patientContext

    const onClick = () => {
        if(authorised) {
            props.history.push('/book')
        }
        else {
            props.history.push('/login')
        }
    }

    return (
        <div className="container">
            <div className="text-center">
                <h2>Wellness Clinic</h2>
                <h4>Login to book an appointment</h4>
            </div>
            
            <button className="btn" onClick={onClick}>Book appointment</button>
            <div className='content'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWX3klOKD02EhOQYkbZ09ZrQs6P9_1XtUGvA&usqp=CAU'         
                alt="home" 
                style={{ height:'30%' }}/>
            </div>
            <div className="content">
                <h4><i className='fas fa-clock' />  Working Hours </h4>
                <p>Monday - Thursday : 08h00 - 17h00  </p>
                <p>Friday : 08h00 - 16h00</p>
                <p>Saturday  and Sunday : 08h00 -15h00</p>
            </div>
            <div className="content">
                <h4><i className='fas fa-map-marker' style={{color:'#f44336' }}/>  Address </h4>
                <p>238 Dassty Road</p>
                <p>Cape Town</p>
                <p>Western Cape</p>
            </div>
        </div>  
    )
}

export default Home;
