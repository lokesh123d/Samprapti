import React from 'react';

const Impact = () => {
    const stats = [
        { number: "12+", label: "Years of Service" },
        { number: "200+", label: "Children Supported Daily" },
        { number: "100+", label: "Elders in Care" },
        { number: "50+", label: "Schools Reached" }
    ];

    return (
        <section className="section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
            <div className="container">
                <div className="grid-4 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
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
