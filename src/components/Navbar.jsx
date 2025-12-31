import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle Scroll effect for sticky navbar sizing
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/#about' },
        { name: 'Services', href: '/#services' },
        { name: 'Gallery', href: '/#gallery' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <a href="/" className="nav-logo">
                    <img src="/logo.png" alt="Samprapti Foundation" className="logo-img" />
                </a>

                {/* Mobile Menu Toggle - Only visible when closed on mobile */}
                <button
                    className={`mobile-menu-btn ${isOpen ? 'hidden' : ''}`}
                    onClick={() => setIsOpen(true)}
                    aria-label="Open Menu"
                >
                    <Menu size={28} />
                </button>

                {/* Navigation Links */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {/* Mobile Menu Header */}
                    <li className="mobile-nav-header">
                        <span className="mobile-brand">Samprapti</span>
                        <button
                            className="mobile-close-btn"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close Menu"
                        >
                            <X size={24} />
                        </button>
                    </li>

                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="nav-link"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}

                    {/* Mobile Only Donate shows in list? Or keep separate? */}
                    {/* Let's keep donate separate button in desktop, maybe inside list for mobile? */}
                    <li>
                        <a href="/donate" className="btn-donate">
                            Donate
                        </a>
                    </li>
                </ul>
            </div>
        </nav >
    );
};

export default Navbar;
