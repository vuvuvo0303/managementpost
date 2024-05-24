import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>Về chúng tôi</h4>
                <ul>
                    <li><a href="/our-story">Câu chuyện của Blogs</a></li>
                    <li><a href="/contact1">Liên Hệ</a></li>
                    <li><a href="/privacy-policy">Chính sách &amp; Bảo mật</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Chúng tôi cung cấp</h4>
                <ul>
                    <li><a href="#sponsorship">Thông tin thị trường</a></li>
                    <li><a href="#last-minute-flights">Thông tin xây dựng</a></li>
                    <li><a href="#best-deals">Thông tin mới nhất</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Blog du lịch</h4>
                <ul>
                    <li><a href="#bali">Thông tin giá cả</a></li>
                    <li><a href="#sri">Nhà ở</a></li>
                    <li><a href="#peru">Sự kiện</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Dịch vụ</h4>
                <ul>
                    <li><a href="#report-error">Báo lỗi</a></li>
                    <li><a href="#ask-online">Hỏi trực tuyến</a></li>
                    <li><a href="#insurance">Mail</a></li>
                </ul>
            </div>
            <div className="footer-bottom">
                <p>© Bản quyền Daily News</p>
                <p>DailyNews@gmail.com</p>
                <p>DailyNews: Thông tin mỗi ngày!</p>
                <p>NVHSV, Thủ Đức, TP.HCM</p>
                <p>+84 12 3456 789</p>
            </div>
        </footer>
    );
};

export default Footer;
