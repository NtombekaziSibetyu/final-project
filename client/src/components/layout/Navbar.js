import React, {useEffec} from 'react';
import {Link} from 'react-router-dom'
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
    const activate = () => {
      const z = document.getElementById('myTopnav');
      if(z.className === 'p'){
        z.className += '-active';
      }
    }

    return (
      <div className="topnav" id="myTopnav" >
        <Link to='/home' className='p'>Home</Link>
        <Link to='/about' className="nav-link">About</Link>
        <Link to='/contact'  />
        <Link to='/login'>Login</Link>
        <a href="!#" className="icon" >
        <i class="fa fa-bars" onClick={navigator}></i>
      </a>
      </div>
    
    )
}



export default Navbar;
