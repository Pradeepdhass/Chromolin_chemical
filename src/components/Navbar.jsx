import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();

    // Scroll listener for sticky glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setIsDropdownOpen(false);
    }, [location.pathname]);

    // Handle ESC key to close mobile menu
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
                setIsDropdownOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Close menu when window resizes to desktop width
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNav = () => {
        setIsOpen(false);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Helper to check active state for nav links
    const isActive = (path) => location.pathname === path;

    const productCategories = [
        { name: 'All Products', path: '/all-products', icon: 'bi-grid-fill' },
        { name: 'Desizing', path: '/desizing', icon: 'bi-droplet-half' },
        { name: 'Mercerisation', path: '/mercerisation', icon: 'bi-flower1' },
        { name: 'Wetting & Scouring', path: '/wetting-scouring', icon: 'bi-funnel-fill' },
        { name: 'Stabilizers & Sequestering', path: '/stabilizers-sequestering', icon: 'bi-shield-shaded' },
        { name: 'Defoamers & Lubricants', path: '/defoamers-lubricants', icon: 'bi-wind' },
        { name: 'After Treatment', path: '/after-treatment', icon: 'bi-shield-check' },
        { name: 'Finishing', path: '/finishing', icon: 'bi-magic' },
        { name: 'Cationic Softeners', path: '/cationic-softeners', icon: 'bi-layers-fill' },
        { name: 'Non-Ionic Softeners', path: '/non-ionic-softeners', icon: 'bi-square-fill' },
        { name: 'Silicone Softeners', path: '/silicone-softeners', icon: 'bi-water' },
        { name: 'Polyester Processing', path: '/polyester-processing', icon: 'bi-gear-wide-connected' },
        { name: 'Garment Processing', path: '/garment-processing', icon: 'bi-app-indicator' },
    ];

    return (
        <header className="sticky-top">
            {/* Top Utility / Info Bar */}
            <div className="top-utility-bar d-none d-md-block">
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-4">
                        <span><i className="bi bi-geo-alt-fill text-warning me-1"></i> Surat, Gujarat, India</span>
                        <a href="mailto:info@chromolin.com"><i className="bi bi-envelope-fill text-warning me-1"></i> info@chromolin.com</a>
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        <span className="text-light-50">High Performance Textile Auxiliaries</span>
                        <a href="tel:+919876543210" className="fw-bold"><i className="bi bi-telephone-fill me-1"></i> +91 98765 43210</a>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`navbar navbar-expand-lg modern-navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
                <div className="container">
                    <Link className="navbar-brand d-flex align-items-center fw-bold text-primary" to="/" onClick={closeNav}>
                        <img 
                            src="/assets/images/ChromolinLogo.png" 
                            alt="Chromolin Specialty Chemicals" 
                            style={{ height: '48px', width: 'auto', objectFit: 'contain' }} 
                        />
                    </Link>

                    {/* Animated Hamburger Toggler */}
                    <button
                        className={`navbar-toggler custom-toggler ${isOpen ? 'open' : ''}`}
                        type="button"
                        onClick={toggleNavbar}
                        aria-controls="navbarNav"
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className="toggler-bar top-bar"></span>
                        <span className="toggler-bar middle-bar"></span>
                        <span className="toggler-bar bottom-bar"></span>
                    </button>

                    {/* Mobile Backdrop Overlay */}
                    {isOpen && <div className="navbar-backdrop" onClick={closeNav}></div>}

                    {/* Collapsible Nav Links */}
                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1 text-center text-lg-start mt-3 mt-lg-0">
                            <li className="nav-item">
                                <Link 
                                    className={`nav-link nav-underline ${isActive('/') ? 'active' : ''}`} 
                                    to="/" 
                                    onClick={closeNav}
                                >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a 
                                    className="nav-link nav-underline" 
                                    href="/#about" 
                                    onClick={closeNav}
                                >
                                    About Us
                                </a>
                            </li>

                            {/* Products Interactive Dropdown */}
                            <li 
                                className="nav-item dropdown"
                                onMouseEnter={() => window.innerWidth >= 992 && setIsDropdownOpen(true)}
                                onMouseLeave={() => window.innerWidth >= 992 && setIsDropdownOpen(false)}
                            >
                                <a
                                    className={`nav-link nav-underline dropdown-toggle d-flex align-items-center justify-content-between justify-content-lg-center ${
                                        location.pathname.includes('/all-products') || productCategories.some(cat => location.pathname === cat.path) ? 'active' : ''
                                    }`}
                                    href="#"
                                    role="button"
                                    onClick={toggleDropdown}
                                    aria-expanded={isDropdownOpen}
                                >
                                    Products <i className={`bi bi-chevron-${isDropdownOpen ? 'up' : 'down'} ms-1 small`}></i>
                                </a>
                                
                                <ul className={`dropdown-menu custom-dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                                    {productCategories.map((category, idx) => (
                                        <li key={idx}>
                                            <Link 
                                                className={`dropdown-item custom-dropdown-item ${isActive(category.path) ? 'active' : ''}`}
                                                to={category.path}
                                                onClick={closeNav}
                                            >
                                                <i className={`bi ${category.icon}`}></i> {category.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link 
                                    className={`nav-link nav-underline ${isActive('/news') ? 'active' : ''}`} 
                                    to="/news" 
                                    onClick={closeNav}
                                >
                                    News & Updates
                                </Link>
                            </li>

                            {/* CTA Button */}
                            <li className="nav-item mt-3 mt-lg-0 ms-lg-2">
                                <Link 
                                    className="btn btn-nav-cta" 
                                    to="/contact"
                                    onClick={closeNav}
                                >
                                    <span>Contact Us</span>
                                    <i className="bi bi-arrow-right-short fs-5"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;

