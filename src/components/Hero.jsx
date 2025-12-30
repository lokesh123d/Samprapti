import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const textRef = useRef(null);

    const slides = [
        {
            id: 1,
            image: "/hero1.png",
            text: (
                <>
                    One day <span className="highlight-blue">all children</span> will find a <span className="underline-accent">loving home.</span>
                </>
            )
        },
        {
            id: 2,
            image: "/hero2.png",
            text: (
                <>
                    Providing <span className="highlight-blue">care & dignity</span> to those who <span className="underline-accent">need it most.</span>
                </>
            )
        },
        {
            id: 3,
            image: "/hero3.png",
            text: (
                <>
                    Empowering <span className="highlight-blue">every life</span> to live with <span className="underline-accent">respect.</span>
                </>
            )
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    // Animation Effect when slide changes
    useEffect(() => {
        if (textRef.current) {
            gsap.fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            );
        }
    }, [currentSlide]);

    return (
        <section className="hero-slider-container">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="hero-overlay"></div>
                </div>
            ))}

            <div className="hero-content centered" ref={textRef}>
                <h1 className="tfi-style-text">
                    {slides[currentSlide].text}
                </h1>
            </div>

            {/* Navigation for manual control */}
            <div className="slider-nav">
                <button className="slider-btn" onClick={prevSlide}><ChevronLeft color="white" /></button>
                <button className="slider-btn" onClick={nextSlide}><ChevronRight color="white" /></button>
            </div>
        </section>
    );
};

export default Hero;
