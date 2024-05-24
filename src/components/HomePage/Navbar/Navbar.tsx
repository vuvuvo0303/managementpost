import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <Menu mode="horizontal" className="navbar-menu">
            <Menu.Item key="home">
                <Link to="/"><img src="https://cdn.pixabay.com/photo/2012/04/13/12/30/new-32199_1280.png" alt="Logo" className="navbar-logo" style={{ width: '50px' }} /></Link>
            </Menu.Item>
            <Menu.Item key="dashboard" style={{ float: 'right' }}>
                <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
