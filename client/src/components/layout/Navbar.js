import React  from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const navigator = () => {
      const nav = document.getElementById("myTopnav");
      if (nav.className === "topnav") {
        nav.className += " responsive";
        } else {
        nav.className = "topnav";
      }
    }
    
    return (
      <div className="topnav" id="myTopnav" >
        <Link to='/' >Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/login'>Login</Link>
        <a href="#" className="icon" >
        <i class="fa fa-bars" onClick={navigator}></i>
      </a>
      </div>
    
    )
}


export default Navbar;
