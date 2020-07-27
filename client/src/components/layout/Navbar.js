import React  from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
    const navigator = () => {
      const x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
        } else {
        x.className = "topnav";
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
