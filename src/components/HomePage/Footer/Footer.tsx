import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h4>About us</h4>
                <ul>
                    <li><a href="/our-story">Blogs' Story</a></li>
                    <li><a href="/contact1">Contact</a></li>
                    <li><a href="/privacy-policy">Privacy & Security</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>What we offer</h4>
                <ul>
                    <li><a href="#sponsorship">Market Information</a></li>
                    <li><a href="#last-minute-flights">Construction Information</a></li>
                    <li><a href="#best-deals">Latest Information</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Travel Blog</h4>
                <ul>
                    <li><a href="#bali">Price Information</a></li>
                    <li><a href="#sri">Accommodation</a></li>
                    <li><a href="#peru">Events</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Services</h4>
                <ul>
                    <li><a href="#report-error">Report an Issue</a></li>
                    <li><a href="#ask-online">Ask Online</a></li>
                    <li><a href="#insurance">Mail</a></li>
                </ul>
            </div>

            <div className="footer-bottom">
                <p>© Copyright Daily News</p>
                <p>DailyNews@gmail.com</p>
                <p>DailyNews!</p>
                <p>NVHSV, Thu duc, TP.HCM</p>
                <p>+84 12 3456 789</p>
            </div>
        </footer>
    );
};

export default Footer;
