import React from 'react';

const Newsroom = () => {
    return (
        <section className="newsroom-section py-5 mt-1" id="newsroom">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title fw-bold" style={{ color: '#008080' }}>Newsroom & Updates</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="news-card p-4 p-md-5 shadow-sm rounded-4 bg-white border-0">
                            <h5 className="fw-bold mb-4" style={{ color: '#008080' }}>Chromolin Pursues ISO 14001 for Environmental Excellence</h5>
                            <p className="lead-text">
                                <strong>Chromolin</strong>, as an organization, is deeply committed to environmental protection.
                                The <strong>ISO 14001:2004 standard</strong> outlines the requirements for an Environmental Management System (EMS)
                                that enables organizations to create and implement environmental policies and objectives.
                                Chromolin applies this system across its entire process—from raw material procurement to effluent discharge.
                            </p>

                            <p className="mt-4">
                                To reduce its environmental impact, Chromolin focuses on maximizing renewable energy use and minimizing carbon emissions.
                                In today’s conscious consumer landscape, buyers increasingly prioritize the environmental impact of their purchases.
                                In response, Chromolin supports the development of environmental labeling standards that reflect the full life-cycle of a product.
                            </p>

                            <p className="mt-4">
                                Recognizing the growing environmental challenges, Chromolin embraces ISO 14001 to better manage its environmental impact
                                while understanding the environment’s influence on business. The company aims not only to comply with regulations
                                but also to adopt sustainable practices as a core value.
                            </p>

                            <p className="mt-4 border-start border-4 ps-4 py-2 italic font-monospace text-secondary" style={{ borderColor: '#008080 !important' }}>
                                "Without a certified management system, we would not be able to win business from many of our customers."
                            </p>

                            <p className="mt-4">
                                Equipped with <strong>state-of-the-art technology</strong> and stringent quality controls—from raw materials to finished goods—Chromolin
                                is already enlisted with <strong>Control Union Certifications</strong> and is prepared to manufacture <strong>GOTS-certified products</strong>.
                            </p>

                            <p className="mt-4 fw-semibold text-center mt-5" style={{ color: '#008080' }}>
                                Let’s share knowledge, meet evolving processing needs, and Fly with Colours.
                                Let ISO 14001 be your guide toward responsible industrial practices and sustainability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsroom;
