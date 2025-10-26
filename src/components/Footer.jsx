import React from 'react';
import '../styles/Footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-left">
                <img className='logo' src="/logo.png" alt="logo" />
                <h4>© 2025 Zobiit HomeConnect  - License. Powered.</h4>
            </div>
            <div className="footer-mid">
                <div className="footer-mid-inner">
                    <h4>Contact</h4>
                    <ul>
                        <li>info@zobiit.com</li>
                        <li>+91 70046 95459</li>
                    </ul>
                </div>
                <div className="footer-mid-inner">
                    <h4>Address</h4>
                    <ul>
                        <li>Kameshwar Nath Complex</li>
                        <li>Upper Bajar, Ranchi, Jharkhand</li>
                    </ul>
                </div>
                <div className="footer-mid-inner">
                    <h4>Working Hours</h4>
                    <ul>
                        <li>Mon - Sun 9.00 - 6.00pm</li>
                    </ul>
                </div>
            </div>
            <div className="footer-right">
                <div className="footer-right-inner">
                    <h4>Navigation</h4>
                    <ul>
                        <li onClick={() => window.location.href = '/'}>Home</li>
                        <li onClick={() => window.location.href = '/properties'}>Properties</li>
                        <li onClick={() => window.location.href = '/interior-design'}>Interior Design</li>
                        <li onClick={() => window.location.href = '/bank'}>Bank Loan</li>
                    </ul>
                </div>
                <div className="footer-right-inner">
                    <h4>Follow Us</h4>
                    <ul>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Faceook</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
