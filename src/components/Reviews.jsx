import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const reviews = [
        {
            name: "Rajesh Kumar",
            role: "Donor",
            text: "The dedication of the staff at Samprapti is heartwarming. Seeing the smiles on the elders' faces assures me that my contribution is making a real difference."
        },
        {
            name: "Anita Desai",
            role: "Volunteer",
            text: "A truly transparent and compassionate organization. The facilities for the children and destitute women are maintained with great hygiene and care."
        },
        {
            name: "Dr. S. Murthy",
            role: "Visiting Doctor",
            text: "I visit regularly for health checkups. The medical facilities available, including oxygen and monitoring equipment, are commendable for an NGO home."
        }
    ];

    useEffect(() => {
        // Staggered Fade Up for Cards
        gsap.fromTo(cardsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2, // 0.2 seconds between each card start
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%"
                }
            }
        );
    }, []);

    return (
        <section className="section-padding bg-white" ref={sectionRef}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h2 className="section-title">What People Say</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="grid-3">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="review-card"
                            ref={el => cardsRef.current[index] = el}
                            style={{ opacity: 0 }} // Initial opacity usually handled by GSAP but good to ensure no flash
                        >
                            <div className="stars" style={{ color: '#ffb400', marginBottom: '15px', display: 'flex', gap: '2px' }}>
                                <Star size={18} fill="#ffb400" strokeWidth={0} />
                                <Star size={18} fill="#ffb400" strokeWidth={0} />
                                <Star size={18} fill="#ffb400" strokeWidth={0} />
                                <Star size={18} fill="#ffb400" strokeWidth={0} />
                                <Star size={18} fill="#ffb400" strokeWidth={0} />
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <strong>{review.name}</strong>
                                <span style={{ display: 'block', fontSize: '0.85rem', color: '#666' }}>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
