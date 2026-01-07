import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const [theme, setTheme] = useState('dark');

    // Check if we are inside a resort route
    // Path format: /resort/:id/...
    const pathParts = location.pathname.split('/');
    const isResortPage = pathParts[1] === 'resort' && pathParts[2];
    const resortId = isResortPage ? pathParts[2] : null;

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/" className="header__logo">Serenity Retreat</Link>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li><Link to="/" className="header__nav-link">Home</Link></li>
                        {resortId && (
                            <>
                                <li><Link to={`/resort/${resortId}/basic`} className="header__nav-link">Basic</Link></li>
                                <li><Link to={`/resort/${resortId}/deluxe`} className="header__nav-link">Deluxe</Link></li>
                                <li><Link to={`/resort/${resortId}/suite`} className="header__nav-link">Suite</Link></li>
                                <li><Link to={`/resort/${resortId}/presidential`} className="header__nav-link">Presidential</Link></li>
                            </>
                        )}
                    </ul>
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
