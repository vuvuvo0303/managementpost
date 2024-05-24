import React from 'react';
import './Marquee.css';

const Marquee: React.FC = () => {
    return (
        <div className="marquee">
            <div>
                <span>
                    BREAKING NEWS {' '}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>
                        DAILY!
                    </a>{' '}
                    HỌC TẠI ĐẠI HỌC FPT SẼ CÓ CƠ HỘI ĐƯỢC TRẢI NGHIỆM MỘT KÌ THỰC TẬP TẠI FSOFT (Một trong những cty công nghệ hàng đầu Việt Nam)
                </span>

                <span>
                    BREAKING NEWS {' '}
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', color: 'black', fontWeight: 'bolder' }}>
                        DAILY!
                    </a>{' '}
                    HỌC TẠI ĐẠI HỌC FPT SẼ CÓ CƠ HỘI ĐƯỢC TRẢI NGHIỆM MỘT KÌ THỰC TẬP TẠI FSOFT (Một trong những cty công nghệ hàng đầu Việt Nam)
                </span>
            </div>
        </div>
    );
};

export default Marquee;
