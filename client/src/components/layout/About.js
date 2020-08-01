import React from 'react';

const About = () => {
    return (
        <div className='content'>
            <h3>About Clinic-Booking</h3>
            <p>The App provides a platform
                The clinic was established in 20000 by a Non-Profit / Non-Government Orgainsation to 
                bring health care to communnities. We offer a few health care services
            </p>
            <div className='row'>
                <div className='col'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTworU1lBTPxH3j9-DPXH7AL0OcwNAvmxoJSw&usqp=CAU'
                   className='pic' />
                    <div>Eye Health</div>
                </div>
                <div className='col'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRmhnokPLG2fjwB4vfbDpXV0fIiPMCDUy7eQ&usqp=CAU'
                    className='pic'/>
                    <div>Dental Health</div>
                </div>
                <div className='col'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0jRzaXYhRTcCkQJkxCSGoeKTUeYBoNKqjuA&usqp=CAU'
                    className='pic'/>
                    <div>General Health</div>
                </div>
                <div className='col'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGZWGSennwxD9Hsp9shUpt-IVSXoNjfz-1jw&usqp=CAU'
                    className='pic'/>
                    <div>Children's Health</div>
                </div>
            </div>

            <div className='container'>
                <h3>Contact Us</h3>
                <div>
                    <p><i className='fas fa-phone fa-2x'/>  Call - 021 012 3456</p>
                    <p><i className='fas fa-envelope fa-2x'/>  Email - clinic@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default About;
