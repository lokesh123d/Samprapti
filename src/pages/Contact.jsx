import React, { useEffect } from 'react';
import './Contact.css';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import gsap from 'gsap';

const Contact = () => {

    useEffect(() => {
        gsap.fromTo('.contact-hero-content',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo('.info-card',
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power2.out',
                delay: 0.3
            }
        );

        gsap.fromTo('.contact-form-wrapper',
            { x: 50, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 0.3 }
        );
    }, []);

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container contact-hero-content">
                    <h1 className="contact-title">Get in Touch</h1>
                    <p className="contact-subtitle">
                        We'd love to hear from you. Whether you have a question about our work, want to volunteer, or just want to say hello, we're here.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="contact-content-grid">

                        {/* Interactive Info Cards */}
                        <div className="contact-info-wrapper">

                            <div className="info-card">
                                <div className="icon-box">
                                    <MapPin size={24} color="#BDD855" strokeWidth={2.5} />
                                </div>
                                <div className="info-details">
                                    <h3>Visit Us</h3>
                                    <p>#84b, 1st Main Road, Upadyaya Layout,<br />Nagadevanahalli, Bangalore - 560056</p>
                                </div>
                            </div>

                            <div className="info-card blue">
                                <div className="icon-box">
                                    <Mail size={24} color="#4dc9e6" strokeWidth={2.5} />
                                </div>
                                <div className="info-details">
                                    <h3>Email Us</h3>
                                    <p>info@sampraptifoundation.com<br />support@sampraptifoundation.com</p>
                                </div>
                            </div>

                            <div className="info-card yellow">
                                <div className="icon-box">
                                    <Phone size={24} color="#f9e58e" strokeWidth={2.5} />
                                </div>
                                <div className="info-details">
                                    <h3>Call Us</h3>
                                    <p>+91 97381 29241<br />+91 98450 12345</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-box">
                                    <Clock size={24} color="#333" strokeWidth={2.5} />
                                </div>
                                <div className="info-details">
                                    <h3>Office Hours</h3>
                                    <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                                </div>
                            </div>

                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2>Send a Message</h2>
                            <p className="form-desc">Fill out the form below and we'll get back to you shortly.</p>

                            <form className="contact-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="How can we help?" />
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea placeholder="Write your message here..."></textarea>
                                </div>
                                <button type="submit" className="send-btn">
                                    Send Message <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Google Maps Embed */}
            <section className="map-section">
                <iframe
                    title="Samprapti Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.667798782348!2d77.4984!3d12.9286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU1JzQzLjAiTiA3N8KwMjknNTQuMiJF!5e0!3m2!1sen!2sin!4v1625123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
