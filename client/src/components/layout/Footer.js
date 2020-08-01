import React from 'react'
import '../../App.css'

const Footer = () => {
    return (
        <div className='footer fixed'>
            <p>Copyright@ clinic-booking</p> 
            <ul>
                <li> <i className="fab fa-facebook"/>  clinic@facebook.com</li>
                <li><i className="fab fa-twitter"/>  @clinic_cpt</li>
            </ul> 
        </div>
    )
}

export default Footer
