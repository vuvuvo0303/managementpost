import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/HomePage/Home';
import Navbar from '../components/HomePage/Navbar/Navbar';
import Footer from '../components/HomePage/Footer/Footer';
import Dashboard from '../components/HomePage/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
