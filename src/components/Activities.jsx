import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgElderly from '../assets/images/elderly-group.jpg';
import imgChildrenDay from '../assets/images/childrens-day.png';
import imgCommunity from '../assets/images/community-event.png';
import imgClassroom from '../assets/images/classroom-dist.png';
import imgEating from '../assets/images/children-eating.png';

gsap.registerPlugin(ScrollTrigger);

const Activities = () => {
    const sectionRef = useRef(null);
    const imagesRef = useRef([]);

    useEffect(() => {
        const title = sectionRef.current.querySelector('.section-title');
        const underline = sectionRef.current.querySelector('.title-underline');

        // Animate Title
        gsap.fromTo(title,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );

        gsap.fromTo(underline,
            { width: 0 },
            {
                width: 60,
                duration: 1,
                delay: 0.5,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );

        // Animate Grid Images (Staggered Scale Up)
        imagesRef.current.forEach((imgWrapper, index) => {
            if (!imgWrapper) return;

            // Initial Reveal
            gsap.fromTo(imgWrapper,
                { scale: 0.8, opacity: 0, y: 50 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%"
                    }
                }
            );

            // Parallax Scroll Effect on the actual image element
            const img = imgWrapper.querySelector('img');
            if (img) {
                gsap.fromTo(img,
                    { scale: 1.1 },
                    {
                        scale: 1.0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: imgWrapper,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1
                        }
                    }
                );
            }

            // Add hover effect
            imgWrapper.addEventListener('mouseenter', () => {
                gsap.to(imgWrapper.querySelector('img'), { scale: 1.15, duration: 0.3, ease: 'power1.out', overwrite: 'auto' });
            });
            imgWrapper.addEventListener('mouseleave', () => {
                gsap.to(imgWrapper.querySelector('img'), { scale: 1.0, duration: 0.3, ease: 'power1.out', overwrite: 'auto' });
            });
        });

    }, []);

    return (
        <section id="gallery" className="section-padding bg-white" ref={sectionRef}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h2 className="section-title">Participation & Activities</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="activity-grid">
                    <div className="div1" ref={el => imagesRef.current[0] = el} style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <img src={imgCommunity} className="act-img" alt="Community Event" style={{ height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="div2" ref={el => imagesRef.current[1] = el} style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <img src={imgChildrenDay} className="act-img" alt="Children's Day" style={{ height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="div3" ref={el => imagesRef.current[2] = el} style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <img src={imgClassroom} className="act-img" alt="Classroom Distribution" style={{ height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="div4" ref={el => imagesRef.current[3] = el} style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <img src={imgEating} className="act-img" alt="Children Eating" style={{ height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div className="div5" ref={el => imagesRef.current[4] = el} style={{ overflow: 'hidden', borderRadius: '4px' }}>
                        <img src={imgElderly} className="act-img" alt="Elderly Care" style={{ height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Activities;
