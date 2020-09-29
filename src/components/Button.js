import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import $ from "jquery"


const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

function Button({ children, type, onClick, buttonStyle, buttonSize, value }) {

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (

        // <Link to='/sign-up' className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
            >
                {value}
            </button>
        // </Link>
    )
}

export default Button
