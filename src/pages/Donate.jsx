import React, { useEffect } from 'react';
import './Donate.css';
import { Heart, BookOpen, Coffee, Home, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const Donate = () => {

    useEffect(() => {
        gsap.fromTo('.donate-hero-content',
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );

        gsap.fromTo('.donate-option-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '.donate-options-grid',
                    start: 'top 80%'
                }
            }
        );
    }, []);

    return (
        <div className="donate-page">
            <section className="donate-hero">
                <div className="container donate-hero-content">
                    <h1 className="donate-title">Make a Difference Today</h1>
                    <p className="donate-subtitle">
                        Your generosity fuels our mission. Every contribution, big or small, helps us provide shelter, education, and dignity to those in need.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="donate-options-grid">

                        {/* Option 1: Green Accent */}
                        <div className="donate-option-card green">
                            <div className="donate-icon">
                                <Coffee size={48} color="#BDD855" strokeWidth={1.5} />
                            </div>
                            <h3 className="option-title">Sponsor a Meal</h3>
                            <p className="option-desc">Provide nutritious food for our elderly residents and children for a day.</p>
                            <a href="#bank-details" className="donate-amount-btn">Donate ₹500</a>
                        </div>

                        {/* Option 2: Blue Accent */}
                        <div className="donate-option-card blue">
                            <div className="donate-icon">
                                <BookOpen size={48} color="#4dc9e6" strokeWidth={1.5} />
                            </div>
                            <h3 className="option-title">Support Education</h3>
                            <p className="option-desc">Fund books, stationery, and tuition fees for an underprivileged child.</p>
                            <a href="#bank-details" className="donate-amount-btn">Donate ₹1,200</a>
                        </div>

                        {/* Option 3: Yellow Accent */}
                        <div className="donate-option-card yellow">
                            <div className="donate-icon">
                                <Home size={48} color="#f9e58e" strokeWidth={1.5} />
                            </div>
                            <h3 className="option-title">Shelter Maintenance</h3>
                            <p className="option-desc">Contribute towards the upkeep of our facilities and utilities.</p>
                            <a href="#bank-details" className="donate-amount-btn">Donate ₹2,500</a>
                        </div>

                        {/* Option 4: Custom */}
                        <div className="donate-option-card">
                            <div className="donate-icon">
                                <Heart size={48} color="#e56a54" strokeWidth={1.5} />
                            </div>
                            <h3 className="option-title">Custom Amount</h3>
                            <p className="option-desc">Donate any amount of your choice to support our general fund.</p>
                            <a href="#bank-details" className="donate-amount-btn">Donate Any</a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="bank-details-section" id="bank-details">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '50px' }}>
                        <h2 className="section-title">Direct Bank Transfer</h2>
                        <div className="title-underline"></div>
                    </div>

                    <div className="details-wrapper">
                        <div className="bank-info-box">
                            <h3>Bank Details</h3>
                            <div className="info-row">
                                <span className="info-label">Account Name:</span>
                                <span className="info-value">Samprapti Foundation</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Account Number:</span>
                                <span className="info-value">1234 5678 9012</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Bank Name:</span>
                                <span className="info-value">State Bank of India</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">IFSC Code:</span>
                                <span className="info-value">SBIN0001234</span>
                            </div>
                            <div className="info-row">
                                <span className="info-label">Branch:</span>
                                <span className="info-value">Bangalore Main Branch</span>
                            </div>
                        </div>

                        <div className="qr-box">
                            <div className="qr-placeholder">
                                QR Code Scan
                            </div>
                            <p style={{ textAlign: 'center', color: '#555', marginTop: '15px' }}>
                                Scan to Donate via UPI<br />(GPay, PhonePe, Paytm)
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="message-section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Join Our Community</h2>
                    <p style={{ color: '#666', marginBottom: '40px' }}>Leave your details so we can thank you and keep you updated.</p>

                    <form className="message-form">
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" className="form-input" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" className="form-input" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Phone Number" className="form-input" />
                        </div>
                        <button type="submit" className="submit-btn">Send Details</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Donate;
