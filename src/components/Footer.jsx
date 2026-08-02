import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ message: '', type: '' });

        const formData = new FormData();
        formData.append('access_key', '6d2e2dab-4507-41f6-b628-9ea84265f940');
        formData.append('email', email);
        formData.append('subject', 'New Newsletter Subscriber');
        formData.append('from_name', 'Chromolin Chemical Newsletter');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus({ message: "✅ Thanks for subscribing!", type: "success" });
                setEmail('');
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            setStatus({ message: "❌ Subscription failed. Please try again.", type: "danger" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="footer text-dark pt-5 pb-4">
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-md-4 mb-4">
                        <img src="/assets/images/ChromolinLogo.png" alt="Chromolin Capital Chemicals Logo" className="mb-3" style={{ height: '55px', width: 'auto', objectFit: 'contain' }} />
                        <p>Empowering industries with specialty chemicals, innovation, and reliable logistics across India since 2005.</p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-2 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><a href="/#about" className="text-dark text-decoration-none">About Us</a></li>
                            <li><Link to="/all-products" className="text-dark text-decoration-none">All Products</Link></li>
                            <li><Link to="/news" className="text-dark text-decoration-none">News & Updates</Link></li>
                            <li><Link to="/contact" className="text-dark text-decoration-none">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-md-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Contact Us</h6>
                        <p><i className="fas fa-map-marker-alt me-2"></i>Chennai, Tamil Nadu, India</p>
                        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '16px', color: '#c03838' }}>
                            <i className="fas fa-envelope me-2"></i>
                            <a href="mailto:info@chromolin.com" style={{ fontWeight: 500 }}>
                                info@chromolin.com
                            </a>
                        </p>
                        <p><i className="fas fa-phone me-2"></i>022- 25452592</p>
                        <p><i className="fas fa-mobile-alt me-2"></i>+91-9867208251</p>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-3 mb-4">
                        <h6 className="text-uppercase fw-bold mb-3">Stay Informed</h6>
                        <form onSubmit={handleSubscribe} className="d-flex flex-column gap-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="btn btn-outline-success rounded-pill"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                            </button>
                            {status.message && (
                                <div className={`mt-2 text-${status.type} small`}>
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="text-center mt-4 border-top pt-3 small copyright">
                    © 2025 Chromolin Chemical Capital Pvt Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
