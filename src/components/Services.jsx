import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

// Import local images
import imgElderly from '../assets/images/elderly-group.jpg';
import imgChildrenDay from '../assets/images/childrens-day.png';
import imgCommunity from '../assets/images/community-event.png';
import imgClassroom from '../assets/images/classroom-dist.png';
import imgEating from '../assets/images/children-eating.png';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const services = [
        {
            title: "Old Age Home",
            description: "Providing dignity & care in golden years.",
            image: imgElderly,
            colorClass: "bg-green"
        },
        {
            title: "Orphanage Support",
            description: "Shelter & education for the future.",
            image: imgChildrenDay,
            colorClass: "bg-blue"
        },
        {
            title: "Special Needs Care",
            description: "Dedicated care for the differently abled.",
            image: imgCommunity,
            colorClass: "bg-green"
        },
        {
            title: "Health & Nutrition",
            description: "Ensuring equitable access to healthcare.",
            image: imgEating,
            colorClass: "bg-blue"
        },
        {
            title: "Holistic Living",
            description: "Yoga & meditation for mental peace.",
            image: imgElderly, // Reusing as it fits the vibe
            colorClass: "bg-green"
        },
        {
            title: "Education & Training",
            description: "The road to sustained growth.",
            image: imgClassroom,
            colorClass: "bg-blue"
        }
    ];

    useEffect(() => {
        const section = sectionRef.current;

        // Header Animation
        gsap.fromTo(section.querySelector('.services-header'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                }
            }
        );

        // Cards Stagger Animation
        gsap.fromTo(cardsRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 70%",
                }
            }
        );

        // Parallax Effect for Images within cards
        // Select all focus-img elements and animate their object-position or transform
        const images = cardsRef.current.map(card => card?.querySelector('.focus-img')).filter(Boolean);

        images.forEach((img) => {
            gsap.fromTo(img,
                { scale: 1.1, y: -10 },
                {
                    y: 10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement, // Trigger relative to the wrapper
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });

    }, []);

    return (
        <section id="services" className="services-section" ref={sectionRef}>
            <div className="container">
                <div className="services-header text-center" style={{ marginBottom: '50px' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>What We Do</span>
                    <h2 className="section-title">Our Focus Areas</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="focus-area-grid">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="focus-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="focus-img-wrapper">
                                <img src={service.image} alt={service.title} className="focus-img" />
                            </div>
                            <div className={`focus-content ${service.colorClass}`}>
                                <div className="focus-indicator"></div>
                                <div className="focus-text">
                                    <h3 className="focus-title">{service.title}</h3>
                                    <p className="focus-subtitle">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
