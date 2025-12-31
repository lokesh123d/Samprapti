import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import childrenEating from '../assets/images/children-eating.png';
import classroomDist from '../assets/images/classroom-dist.png';
import communityEvent from '../assets/images/community-event.png';
import elderlyGroup from '../assets/images/elderly-group.jpg';

gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const facilities = [
        {
            title: "Accommodation",
            image: classroomDist,
            text: "There are single, double and triple occupancy Rooms with attached Toilets, Dormitory, Office room, Pooja Room, Dining rooms on each floor, Kitchen, Laundry, Visitors room, Recreation room, Library and an open courtyard."
        },
        {
            title: "Food",
            image: childrenEating,
            text: "Food is strictly vegetarian and varies from day to day. Inmates get fresh vegetables and fruits besides rice, chapati, ragi, dhalia, dhal and salads, vegetable curries, milk, coffee, tea, sprouts, etc. apart from regular proteins and vitamins."
        },
        {
            title: "Health Facilities",
            image: elderlyGroup,
            text: "Basic medical equipment is available at here such as Oxygen, suction machine facility, GRBS measurement glucometers, Nebulizer, Pulse oximeter, etc., maintained by the Staff nurses and paramedical staff of under the guidance of the Doctor."
        },
        {
            title: "Recreational Activities/Library",
            image: communityEvent,
            text: "We provide simple entertainment and information facilities like newspapers and TV. The library is stocked with an interesting selection of magazines and novels in English, Kannada, Telugu and Tamil."
        }
    ];

    useEffect(() => {
        gsap.fromTo(sectionRef.current.querySelector('h2'),
            { x: -50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            }
        );

        cardsRef.current.forEach((card, index) => {
            // Alternate entrance: Left for even, Right for odd
            const fromX = index % 2 === 0 ? -100 : 100;

            gsap.fromTo(card,
                { x: fromX, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%", // Animate when card comes into view
                    }
                }
            );
        });

    }, []);

    return (
        <section className="section-padding bg-off-white" ref={sectionRef}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h2 className="section-title">Our Facilities</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="grid-2">
                    {facilities.map((fac, index) => (
                        <div
                            key={index}
                            className="facility-card-container"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={fac.image} alt={fac.title} />
                                    <div className="front-title-container">
                                        <h3>{fac.title}</h3>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <h3 className="back-title">{fac.title}</h3>
                                    <p className="facility-text-back">
                                        {fac.text}
                                    </p>
                                    <a href="#" className="read-more-btn">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
