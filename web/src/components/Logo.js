import React from 'react';

// Img
import logo from '../logo.png';

function Logo() {

    return (
        <div className="logo">
            <img src={logo} alt="logo" width="150" height="100"/>
        </div>
    );
}

export default Logo;