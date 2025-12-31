import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const sectionRef = useRef(null);
    const imagesRef = useRef([]);

    const images = [
        // Using existing placeholders if local images aren't fully mapped yet, 
        // normally these would be replaced with local assets.
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529390003361-59323da083d9?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=800&auto=format&fit=crop"
    ];

    useEffect(() => {
        gsap.fromTo(imagesRef.current,
            { scale: 0.9, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );
    }, []);

    return (
        <section id="gallery" className="section-padding bg-white" ref={sectionRef}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h2 className="section-title">Life at Samprapti</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto' }}>Glimpses of our daily activities, celebrations, and community initiatives.</p>
                </div>

                <div className="grid-4" style={{ gap: '15px' }}>
                    {images.map((img, index) => (
                        <div
                            key={index}
                            style={{ height: '250px', overflow: 'hidden', border: '1px solid #eee' }}
                            ref={el => imagesRef.current[index] = el}
                        >
                            <img
                                src={img}
                                alt="Gallery"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
