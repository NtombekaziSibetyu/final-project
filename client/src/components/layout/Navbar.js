import React, {useEffect, Link} from 'react';
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
        <a href="#home" className="active">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="!#" className="icon" >
        <i class="fa fa-bars" onClick={navigator}></i>
      </a>
      </div>
    
    )
}



export default Navbar;
