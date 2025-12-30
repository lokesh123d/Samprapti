import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const facilities = [
        {
            title: "Accommodation",
            text: "There are single, double and triple occupancy Rooms with attached Toilets, Dormitory, Office room, Pooja Room, Dining rooms on each floor, Kitchen, Laundry, Visitors room, Recreation room, Library and an open courtyard."
        },
        {
            title: "Food",
            text: "Food is strictly vegetarian and varies from day to day. Inmates get fresh vegetables and fruits besides rice, chapati, ragi, dhalia, dhal and salads, vegetable curries, milk, coffee, tea, sprouts, etc. apart from regular proteins and vitamins."
        },
        {
            title: "Health Facilities",
            text: "Basic medical equipment is available at here such as Oxygen, suction machine facility, GRBS measurement glucometers, Nebulizer, Pulse oximeter, etc., maintained by the Staff nurses and paramedical staff of under the guidance of the Doctor."
        },
        {
            title: "Recreational Activities/Library",
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
                            className="facility-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <h3 className="facility-title">{fac.title}</h3>
                            <p className="facility-text">
                                {fac.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
