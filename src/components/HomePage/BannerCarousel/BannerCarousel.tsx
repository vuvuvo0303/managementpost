import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    height: '160px',
    width: '2000px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    marginBottom: '40px',
    marginTop: '20px',
};


const App: React.FC = () => (
    <Carousel autoplay>
        <div>
            <img style={{ ...contentStyle, objectFit: 'cover' }} src="https://insieutoc.vn/wp-content/uploads/2021/02/banner-quang-cao-tuyen-sinh.jpg" alt="Image 1" />
        </div>
        <div>
            <img style={{ ...contentStyle, objectFit: 'cover' }} src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-quang-cao-ve-may-bay.jpg" alt="Image 2" />
        </div>
        <div>
            <img style={{ ...contentStyle, objectFit: 'cover' }} src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-quang-cao-khuyen-mai.jpg" alt="Image 3" />
        </div>
        <div>
            <img style={{ ...contentStyle, objectFit: 'cover' }} src="https://insieutoc.vn/wp-content/uploads/2021/02/mau-banner-mung-ky-niem.jpg" alt="Image 4" />
        </div>
    </Carousel>
);

export default App;
