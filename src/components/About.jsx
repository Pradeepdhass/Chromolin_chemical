import React from 'react';

const About = () => {
    return (
        <section id="about" className="row align-items-center mb-5">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 responsive-col">
                <img src="/assets/images/aboutus.jpeg" alt="Laboratory" className="img-fluid rounded shadow" />
            </div>
            <div className="col-md-6">
                <h2 className="section-title mt-4">About Chromolin</h2>
                <p className="mb-3">
                    Chromolin Capital Chemicals Pvt. Ltd. is a leading manufacturer of specialty chemicals for textiles, leather, and paper.
                    Backed by a team of experienced professionals, we offer end-to-end, eco-friendly chemical solutions that meet global standards.
                    Our focus is on innovation, consistent quality, and timely delivery to both domestic and international markets.
                    With advanced labs, expert field support, and a strong logistics network, we ensure complete customer satisfaction.
                </p>
                <ul className="list-unstyled">
                    <li><i className="fas fa-check-circle text-success me-2"></i>Expertise in formulation & custom solutions</li>
                    <li><i className="fas fa-check-circle text-success me-2"></i>High-quality sourcing and supply chain efficiency</li>
                    <li><i className="fas fa-check-circle text-success me-2"></i>Technical support and regulatory compliance</li>
                </ul>
                <br></br> <br></br>
            </div>
        </section>
    );
};

export default About;
