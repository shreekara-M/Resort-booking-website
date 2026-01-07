import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__info">
                    <h3>Terms & Conditions</h3>
                    <ul>
                        <li>Check-in: 2:00 PM | Check-out: 11:00 AM</li>
                        <li>No smoking in rooms</li>
                        <li>Pets are not allowed</li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <p>Contact us: +91-9876543210</p>
                    <p>Email: info@serenityretreat.com</p>
                </div>
                <div className="footer__copyright">
                    <p>&copy; {new Date().getFullYear()} Serenity Retreat. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
