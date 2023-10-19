import React from 'react';

import './buttons.scss';

export const Button = ({ onClick, label, className }) => {
    return (
        <button onClick={onClick} className={`btn ${className}`}>{label}</button>
    )
};