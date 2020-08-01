import React from 'react';

const Home = () => {

    return (
        <div>
            <h2>Wellness Clinic</h2>
            <h4>Login to book an appointment</h4>
            <div className='slide-container'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQWX3klOKD02EhOQYkbZ09ZrQs6P9_1XtUGvA&usqp=CAU'         
                alt="home" 
                style={{ height:'30%' }}/>
                
            </div>
            <div>
                <h4><i className='fas fa-clock' />  Working Hours </h4>
                <p>Monday - Thursday : 08h00 - 19h00  </p>
                <p>Friday : 08h00 - 18h00</p>
                <p>Saturday  and Sunday : 09h00 -16h00</p>
            </div>
            <div >
                <h4><i className='fas fa-map-marker' style={{color:'#f44336' }}/>  Address </h4>
                <p>238 Dassuty Road</p>
                <p>Cape Town</p>
                <p>Western Cape</p>
            </div>
        </div>  
    )
}

export default Home;
