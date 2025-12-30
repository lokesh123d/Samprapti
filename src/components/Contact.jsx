import React, { useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Instagram } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        // Stagger Animation for Info Items
        gsap.fromTo(infoRef.current.children,
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%"
                }
            }
        );

        // Fade Up Animation for Form
        gsap.fromTo(formRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%"
                }
            }
        );
    }, []);

    return (
        <section id="contact" className="contact-section" ref={sectionRef}>
            <div className="contact-bg-pattern"></div>
            <div className="contact-container">

                <div className="text-center" style={{ marginBottom: '60px', position: 'relative', zIndex: 1 }}>
                    <span style={{ color: 'var(--accent)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Get In Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="contact-wrapper">

                    {/* Left Side: Info */}
                    <div className="contact-info" ref={infoRef}>
                        <div>
                            <h3 className="info-title">Let's Talk</h3>
                            <p className="info-text">
                                Have questions about our programs, or want to volunteer? We'd love to hear from you. Reach out to us anytime.
                            </p>

                            <div className="info-details">
                                <div className="info-item">
                                    <div className="info-icon">
                                        <Phone size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h4>Phone</h4>
                                        <p>+91 97381 29241</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <Mail size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h4>Email</h4>
                                        <p>info@sampraptifoundation.com</p>
                                    </div>
                                </div>
                                <div className="info-item">
                                    <div className="info-icon">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <p>#84b, 1st Main Road, Upadyaya Layout,<br />Nagadevanahalli, Bangalore - 560056</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="socials-title">Follow Us</h4>
                            <div className="social-links">
                                <a href="#" className="social-link"><Facebook size={20} /></a>
                                <a href="#" className="social-link"><Twitter size={20} /></a>
                                <a href="#" className="social-link"><Instagram size={20} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="contact-form-section" ref={formRef}>
                        <div className="form-header">
                            <h3 className="form-title">Send a Message</h3>
                            <p className="form-subtitle">Fill out the form below and we'll get back to you shortly.</p>
                        </div>

                        <form>
                            <div className="grid-2" style={{ gap: '20px', marginBottom: '0' }}>
                                <div className="form-group">
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-input" placeholder="John" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-input" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input type="email" className="form-input" placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input type="text" className="form-input" placeholder="How can I help?" />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" placeholder="Write your message here..."></textarea>
                            </div>

                            <button type="submit" className="submit-btn">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
