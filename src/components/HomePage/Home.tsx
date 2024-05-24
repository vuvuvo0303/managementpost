// pages/Home.tsx
import React from 'react';
import BlogList from '../Blog/BlogList';
// import BannerCarousel from '../HomePage/BannerCarousel/BannerCarousel';
import Marquee from '../HomePage/Marquee/Marquee'

const Home: React.FC = () => {
    return (
        <div>
            {/* <h1>DailyNews: Thông tin mỗi ngày!</h1> */}
            <Marquee />
            {/* <BannerCarousel /> */}
            <BlogList />
        </div>
    );
};

export default Home;