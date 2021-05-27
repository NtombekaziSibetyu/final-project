import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='fixed-bottom'>
            <p>Copyright@ clinic-booking</p> 
            <ul>
                <li> <i className="fab fa-facebook"/> 
                <a href="http://" target="_blank" 
                rel="noopener noreferrer">clinic@facebook.com</a>
                 </li>

                <li><i className="fab fa-twitter"/>
                 <a href="http://" target="_blank" 
                 rel="noopener noreferrer">@clinic_cpt</a>
                 </li>
            </ul> 
        </div>
    )
}

export default Footer;
