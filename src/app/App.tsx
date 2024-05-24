import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/HomePage/Home';
import Navbar from '../components/HomePage/Navbar/Navbar';
import Footer from '../components/HomePage/Footer/Footer';
import Dashboard from '../components/HomePage/Dashboard';
import AddPost from '../components/AddPostPage/AddPost';
import Details from '../components/DetailsPage/Details';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path='/blogs/:id' element={<Details />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
