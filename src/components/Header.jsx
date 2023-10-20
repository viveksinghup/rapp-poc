import React from 'react'
import logo from '../assets/reactIcon.svg';

function Header() {
    return (
        <header className="app-header">
            <img src={logo} className="logo" alt="logo" />
        </header>
        
    )
}

export default Header