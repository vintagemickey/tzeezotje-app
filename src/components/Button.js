import React from 'react'
import { Link } from 'react-router-dom';
import './Button.css'

const STYLES = ['btn--primary', 'btn--social'];
const SIZES = ['btn--small', 'btn--large'];

export const Button = ({children, link, type, onClick, buttonStyle, buttonSize }) => {
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

return (
    <Link to={link}>
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    </Link>
    );
};