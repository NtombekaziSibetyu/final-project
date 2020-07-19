import React, {Link} from 'react';
import './Navbar.css';

const Navbar = () => {
        
    const responsive = () => {
        const navigation = document.getElementById("myTopnav");
        if (navigation.className === "topnav") {
          navigation.className += " responsive";
        } else {
          navigation.className = "topnav";
        }
      }   

    return (
        <div className="topnav" id="myTopnav">
           <a href="#default" class="logo">CompanyLogo</a>
            <ul>
                <li><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li>
                    <a href="javascript:void(0);" className="icon" onclick={responsive()}>
                    <i className="fa fa-bars"></i>
                    </a>
                </li>
            </ul>
            
            
        </div>
    )
}



export default Navbar;
