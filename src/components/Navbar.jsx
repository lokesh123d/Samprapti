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
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' }, // Assuming section IDs exist or will handle routing later
        { name: 'Services', href: '#services' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar-custom ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo */}
                <a href="#" className="nav-logo">
                    <img src="/logo.png" alt="Samprapti Foundation" className="logo-img" />
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Navigation Links */}
                <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                className="nav-link"
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    {/* Mobile Only Donate shows in list? Or keep separate? */}
                    {/* Let's keep donate separate button in desktop, maybe inside list for mobile? */}
                    <li>
                        <a href="#donate" className="btn-donate">
                            Donate
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
