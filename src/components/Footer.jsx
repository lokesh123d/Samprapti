import React, { useEffect, useRef } from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, ChevronRight, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const colsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(colsRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%"
                }
            }
        );
    }, []);

    return (
        <footer id="contact" className="footer" ref={footerRef}>
            <div className="footer-container">
                <div className="footer-grid">

                    <div className="footer-col" ref={el => colsRef.current[0] = el}>
                        <h3 className="footer-logo">Samprapti</h3>
                        <p className="footer-text">
                            "Help Us To Help The Living"
                            <br />
                            <br />
                            Dedicated to serving the elderly, destitute, and physically challenged since 2011. We believe in restoring dignity through love and care.
                        </p>
                        <div className="footer-socials">
                            <a href="#" className="social-icon-btn" aria-label="Facebook"><Facebook size={18} /></a>
                            <a href="#" className="social-icon-btn" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" className="social-icon-btn" aria-label="Instagram"><Instagram size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-col" ref={el => colsRef.current[1] = el}>
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li><a href="#home"><ChevronRight size={14} /> Home</a></li>
                            <li><a href="#about-us"><ChevronRight size={14} /> About Us</a></li>
                            <li><a href="#services"><ChevronRight size={14} /> Our Services</a></li>
                            <li><a href="#gallery"><ChevronRight size={14} /> Gallery</a></li>
                            <li><a href="#donate" style={{ color: '#000', fontWeight: 'bold' }}><Heart size={14} fill="#f9e58e" color="#000" /> Donate</a></li>
                        </ul>
                    </div>

                    <div className="footer-col" ref={el => colsRef.current[2] = el}>
                        <h4 className="footer-heading">Get In Touch</h4>
                        <div className="contact-item">
                            <MapPin size={20} className="contact-icon" />
                            <span>#84b, 1st Main Road, Upadyaya Layout, Nagadevanahalli, Bangalore - 560056</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={20} className="contact-icon" />
                            <span>+91 97381 29241</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={20} className="contact-icon" />
                            <span>info@sampraptifoundation.com</span>
                        </div>
                    </div>

                    <div className="footer-col" ref={el => colsRef.current[3] = el}>
                        <h4 className="footer-heading">Our Impact</h4>
                        <ul className="footer-links">
                            <li className="impact-stat">
                                <span style={{ display: 'block', color: '#BDD855', fontWeight: '900', fontSize: '1.5rem', marginBottom: '5px' }}>200+</span>
                                <span style={{ color: '#333', fontWeight: '600' }}>Children Supported</span>
                            </li>
                            <li className="impact-stat">
                                <span style={{ display: 'block', color: '#4dc9e6', fontWeight: '900', fontSize: '1.5rem', marginBottom: '5px', marginTop: '15px' }}>100+</span>
                                <span style={{ color: '#333', fontWeight: '600' }}>Elderly Care Provided</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Samprapti Foundation. All Rights Reserved. | Designed with care.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
