import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <Menu mode="horizontal" className="navbar-menu">
            <Menu.Item key="home">
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="dashboard">
                <Link to="/dashboard/management-posts">Dashboard</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navbar;
