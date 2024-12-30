import React from 'react';
import '../Style/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#" className="navbar-logo">My Borrow App</a>
                <div className="navbar-links">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
