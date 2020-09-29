import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
import $ from "jquery";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons'
import { faAmazon, faAccusoft, faAutoprefixer } from '@fortawesome/free-brands-svg-icons'


function NavBar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => {
        setClick(prevMode => !prevMode)
    }

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    useEffect(() => {
        showButton();

    }, []);



    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Around Asia &nbsp; {<FontAwesomeIcon icon={faFeatherAlt} />}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                             </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                            Services and Destinations
                             </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                            About
                             </Link>
                    </li>
                    <li>
                        <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up!
                        </Link>
                    </li>
                </ul>
                {button && <Link to='/sign-up'> <Button buttonStyle='btn--outline' value='Sign up' /> </Link>}
                </div>
        </nav>
        </>
    )
}

export default NavBar
