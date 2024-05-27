import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar-menu">
            <Link to="/" className="navbar-logo">
                <img src="https://cdn.pixabay.com/photo/2012/04/13/12/30/new-32199_1280.png" alt="Logo" style={{ width: '70px' }} />
            </Link>
            <Link to="/dashboard/management-posts" className="navbar-dashboard-button">
                <button className="dashboard-button">Dashboard</button>
            </Link>
        </nav>
    );
};

export default Navbar;
