import React, {Link} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'

function Navbar({ titles, icons }) {
    return (
        <nav className='navbar '>
            <a className='navbar-brand' href='#'>
                <span className='badge'>Wellness clinic</span>
            </a>
            
        </nav>
    )
}

Navbar.propTypes = {
    titles: PropTypes.object.isRequired,
    icons: PropTypes.object.isRequired,
}

export default Navbar;
