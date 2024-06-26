// pages/Home.tsx
import React from 'react';
import BlogList from '../Blog/BlogList';

import Marquee from '../HomePage/Marquee/Marquee'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Home: React.FC = () => {
    return (
        <div>
            <Navbar/>
            {/* <h1>DailyNews: Thông tin mỗi ngày!</h1> */}
            <Marquee />
            {/* <BannerCarousel /> */}
            <BlogList />
            <Footer/>
        </div>
    );
};

export default Home;
