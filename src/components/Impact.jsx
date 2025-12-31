import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Impact = () => {
    const sectionRef = useRef(null);
    const statsRef = useRef([]);

    const stats = [
        { number: "12+", label: "Years of Service" },
        { number: "200+", label: "Children Supported Daily" },
        { number: "100+", label: "Elders in Care" },
        { number: "50+", label: "Schools Reached" }
    ];

    useEffect(() => {
        gsap.fromTo(statsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    return (
        <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }} ref={sectionRef}>
            <div className="container">
                <div className="grid-4 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item"
                            ref={el => statsRef.current[index] = el}
                        >
                            <h2 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '10px' }}>{stat.number}</h2>
                            <p style={{ color: 'white', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1px' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Impact;
