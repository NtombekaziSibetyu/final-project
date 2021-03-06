import React  from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const navigator = () => {
      const mynav = document.getElementById("myTopnav");
      if (mynav.className === "topnav") {
        mynav.className += " responsive";
        } else {
        mynav.className = "topnav";
      }
    }
    
    return (
      <div className="topnav" id="myTopnav" >
        <a className="navbar-brand" href="#">
          ClinicCare
        </a>
          <Link to='/' >Home</Link>
          <Link to='/about' >About</Link>
          <Link to='/login'>Login</Link>
        <a href="#" className="icon" >
          <i className="fa fa-bars" onClick={navigator}></i>
        </a>
      </div>
    
    )
}


export default Navbar;
