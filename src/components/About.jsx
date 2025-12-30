import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

import imgElderly from '../assets/images/elderly-group.jpg';
import imgChildrenEating from '../assets/images/children-eating.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const bigImageRef = useRef(null);
    const smallImageRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        // Parallax Effect for the Big Image content
        // We animate the image INSIDE the wrapper to create parallax
        if (bigImageRef.current) {
            gsap.fromTo(bigImageRef.current.querySelector('img'),
                { scale: 1.2, y: -20 },
                {
                    scale: 1,
                    y: 20,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        }

        // Initial Reveal Animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%", // Start when top of section is 70% down viewport
            }
        });

        tl.fromTo(bigImageRef.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
            .fromTo(smallImageRef.current,
                { y: 150, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
                "-=0.8" // Overlap start
            )
            .fromTo(contentRef.current,
                { x: 50, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
                "-=0.8"
            );

        // Floating Loop for Small Image to make it feel alive
        gsap.to(smallImageRef.current, {
            y: -15,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, []);

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-container">

                <div className="about-images">
                    {/* Big Image (Left/Back) */}
                    <div className="img-big-wrapper" ref={bigImageRef}>
                        <img
                            src={imgElderly}
                            alt="Community Support"
                            className="img-big"
                        />
                    </div>

                    {/* Small Image (Right/Bottom Overlay) */}
                    <div className="img-small-wrapper" ref={smallImageRef}>
                        <img
                            src={imgChildrenEating}
                            alt="Helping Hand"
                            className="img-small"
                        />
                    </div>
                </div>

                <div className="about-content" ref={contentRef}>
                    <span className="section-tag">About Us</span>
                    <h2 className="section-title">Driven by Compassion, <br /> Guided by <span className="highlight-blue">Hope.</span></h2>
                    <p className="section-desc">
                        For over a decade, we have been a sanctuary for those who have nowhere else to turn.
                        From caring for the elderly to providing education for underprivileged children, our mission is simple:
                        to restore dignity and provide a loving home for the forgotten members of our society.
                        <br /><br />
                        Every donation, every volunteer hour, and every act of kindness ripples outwards, creating a stronger foundation for our community.
                    </p>

                    <button className="btn-primary" style={{
                        padding: '15px 40px',
                        backgroundColor: '#004d99',
                        color: 'white',
                        border: 'none',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        marginTop: '20px',
                        borderRadius: '50px',
                        fontWeight: '600',
                        letterSpacing: '0.5px',
                        boxShadow: '0 4px 15px rgba(0,77,153,0.3)'
                    }}>
                        Learn Our Story
                    </button>
                </div>

            </div>
        </section>
    );
};

export default About;
