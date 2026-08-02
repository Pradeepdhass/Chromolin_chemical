import React from 'react';

const Services = () => {
    return (
        <section id="services" className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <div className="row gy-4 mt-4">
                <div className="col-md-4">
                    <div className="card h-100 p-4">
                        <div className="service-icon mb-3"><i className="fas fa-vials"></i></div>
                        <h4>Custom Formulation</h4>
                        <p>Tailored chemical formulations based on client needs and industry standards.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 p-4">
                        <div className="service-icon mb-3"><i className="fas fa-industry"></i></div>
                        <h4>Bulk Supply</h4>
                        <p>Reliable sourcing and delivery of industrial-grade chemicals, packaged or unpackaged.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 p-4">
                        <div className="service-icon mb-3"><i className="fas fa-truck"></i></div>
                        <h4>Logistics & Packaging</h4>
                        <p>End-to-end logistics support, including packaging, safety handling, and documentation.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
