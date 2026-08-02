import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <header className="hero-split py-4 bg-light text-black position-relative" id="home">
            <div className="container">
                <div className="row align-items-center gy-5">
                    {/* Text Side */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="display-5 fw-bold mb-4">Innovating Tomorrow with Specialty Chemicals</h1>
                        <p className="lead mb-4">Empowering industries with reliable chemical solutions, advanced formulations, and expert support.</p>
                        <Link to="/contact" className="btn text-white btn-lg px-4 py-2 rounded-pill shadow-sm fw-semibold" style={{ backgroundColor: '#008080' }}>
                            <i className="fas fa-envelope me-2"></i> Contact Us
                        </Link>
                    </div>

                    {/* Image Carousel Side */}
                    <div className="col-lg-6">
                        <div id="heroSlider" className="carousel slide carousel-fade rounded-4 overflow-hidden shadow" data-bs-ride="carousel" data-bs-interval="5000">
                            <div className="carousel-inner">
                                {/* Slide 1 */}
                                <div className="carousel-item active">
                                    <img src="/assets/images/hero1.webp" className="d-block w-100 img-fluid" alt="Slide 1" />
                                    <div className="carousel-caption d-none d-md-block text-start bg-dark bg-opacity-50 p-3 rounded">
                                        <h5 className="fw-bold">Evolving Technology</h5>
                                        <p className="mb-0">Equipped with state-of-the-art labs for R&D</p>
                                    </div>
                                </div>

                                {/* Slide 2 */}
                                <div className="carousel-item">
                                    <img src="/assets/images/image1.png" className="d-block w-100 img-fluid" alt="Slide 2" />
                                    <div className="carousel-caption d-none d-md-block text-start bg-dark bg-opacity-50 p-3 rounded">
                                        <h5 className="fw-bold">Chemical Innovation</h5>
                                        <p className="mb-0">Delivering high-purity compounds for diverse industries</p>
                                    </div>
                                </div>
                            </div>

                            {/* Controls */}
                            <button className="carousel-control-prev custom-carousel-btn" type="button" data-bs-target="#heroSlider" data-bs-slide="prev">
                                <span className="custom-carousel-icon me-1"><i className="fas fa-chevron-left"></i></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next custom-carousel-btn" type="button" data-bs-target="#heroSlider" data-bs-slide="next">
                                <span className="custom-carousel-icon ms-1"><i className="fas fa-chevron-right"></i></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
