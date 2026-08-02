import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'Technical Support & Sample Request',
        message: ''
    });
    const [status, setStatus] = useState({ message: '', type: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ message: '', type: '' });

        const data = new FormData();
        data.append('access_key', '6d2e2dab-4507-41f6-b628-9ea84265f940');
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('company', formData.company);
        data.append('inquiry_type', formData.inquiryType);
        data.append('message', formData.message);
        data.append('subject', `New Website Inquiry: ${formData.inquiryType} from ${formData.name}`);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data
            });

            if (response.ok) {
                setStatus({
                    message: '✅ Thank you! Your inquiry has been sent successfully. Our technical team will reach out to you within 24 hours.',
                    type: 'success'
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    inquiryType: 'Technical Support & Sample Request',
                    message: ''
                });
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            setStatus({
                message: '❌ Failed to send message. Please contact us directly at info@chromolin.com or +91-9867208251.',
                type: 'danger'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page py-4 my-2">
            <div className="container">
                {/* Breadcrumb Navigation */}
                <nav aria-label="breadcrumb" className="mb-4">
                    <ol className="breadcrumb m-0 bg-transparent p-0 align-items-center">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-muted fw-semibold">Home</Link>
                        </li>
                        <li className="breadcrumb-item active text-teal fw-bold" aria-current="page" style={{ color: '#008080' }}>
                            Contact Us
                        </li>
                    </ol>
                </nav>

                {/* Hero Header Banner */}
                <div className="product-hero-banner p-4 p-md-5 mb-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-8">
                            <span className="badge bg-white text-teal px-3 py-2 rounded-pill fw-bold mb-3 shadow-sm" style={{ color: '#008080' }}>
                                <i className="fas fa-headset me-2"></i> Technical Field Support & Sales
                            </span>
                            <h1 className="fw-bold display-5 mb-3">Contact Chromolin Chemical</h1>
                            <p className="lead text-white-50 mb-0 fs-6" style={{ maxWidth: '680px', lineHeight: '1.7' }}>
                                Have questions regarding our specialty textile chemicals, sample testing, or bulk order pricing? Reach out to our technical experts today.
                            </p>
                        </div>
                        <div className="col-12 col-lg-4 mt-4 mt-lg-0 text-center text-lg-end">
                            <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-4 border border-white border-opacity-25 d-inline-block text-start w-100" style={{ maxWidth: '300px' }}>
                                <div className="d-flex align-items-center mb-3 text-white">
                                    <i className="fas fa-phone-alt fs-4 me-3"></i>
                                    <div>
                                        <div className="small text-white-50">Call Us Direct</div>
                                        <div className="fw-bold">022-25452592</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center text-white">
                                    <i className="fas fa-mobile-alt fs-4 me-3"></i>
                                    <div>
                                        <div className="small text-white-50">Mobile / WhatsApp</div>
                                        <div className="fw-bold">+91-9867208251</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Contact Grid */}
                <div className="row g-4 mb-5">
                    {/* Left Column: Contact Form */}
                    <div className="col-12 col-lg-7">
                        <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5 bg-white h-100">
                            <h3 className="fw-bold mb-2" style={{ color: '#008080' }}>
                                Send Us a Message
                            </h3>
                            <p className="text-muted mb-4 small">
                                Fill out the form below to request technical data sheets (TDS), commercial quotes, or laboratory sample trials.
                            </p>

                            {status.message && (
                                <div className={`alert alert-${status.type} alert-dismissible fade show rounded-3 p-3 mb-4`} role="alert">
                                    {status.message}
                                    <button type="button" className="btn-close" onClick={() => setStatus({ message: '', type: '' })}></button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="row g-3">
                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold text-dark small">Your Full Name *</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 py-2"
                                        placeholder="e.g. Rajesh Kumar"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold text-dark small">Corporate Email *</label>
                                    <input
                                        type="email"
                                        className="form-control rounded-3 py-2"
                                        placeholder="e.g. rajesh@textilemill.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold text-dark small">Mobile / Phone Number *</label>
                                    <input
                                        type="tel"
                                        className="form-control rounded-3 py-2"
                                        placeholder="e.g. +91 9876543210"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="col-12 col-md-6">
                                    <label className="form-label fw-semibold text-dark small">Company / Mill Name</label>
                                    <input
                                        type="text"
                                        className="form-control rounded-3 py-2"
                                        placeholder="e.g. Chromolin Capital Chemicals"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    />
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold text-dark small">Type of Inquiry</label>
                                    <select
                                        className="form-select rounded-3 py-2"
                                        value={formData.inquiryType}
                                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                                    >
                                        <option value="Technical Support & Sample Request">Technical Support & Sample Request</option>
                                        <option value="Commercial Price Quotation">Commercial Price Quotation</option>
                                        <option value="Dealership & Distributorship">Dealership & Distributorship Inquiry</option>
                                        <option value="General Corporate Inquiry">General Corporate Inquiry</option>
                                    </select>
                                </div>

                                <div className="col-12">
                                    <label className="form-label fw-semibold text-dark small">Message / Technical Requirements *</label>
                                    <textarea
                                        className="form-control rounded-3"
                                        rows="5"
                                        placeholder="Please detail your substrate (100% Cotton, PES, Denim), processing equipment (Jigger, Softflow, Padding), or specific quality requirements..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        required
                                    ></textarea>
                                </div>

                                <div className="col-12 pt-2">
                                    <button
                                        type="submit"
                                        className="btn text-white rounded-pill px-5 py-3 fw-bold w-100 shadow-sm"
                                        style={{ backgroundColor: '#008080' }}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                Submitting Inquiry...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-paper-plane me-2"></i> Submit Inquiry
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Corporate Info & Key Contacts */}
                    <div className="col-12 col-lg-5">
                        <div className="d-flex flex-column gap-4 h-100">
                            {/* Head Office Card */}
                            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                                <div className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-3">
                                    <h4 className="fw-bold m-0" style={{ color: '#008080' }}>
                                        <i className="fas fa-building me-2"></i> Corporate Head Office
                                    </h4>
                                    <img src="/assets/images/ChromolinLogo.png" alt="Chromolin Logo" style={{ height: '40px', width: 'auto', objectFit: 'contain' }} />
                                </div>
                                <div className="d-flex mb-3">
                                    <div className="text-teal me-3 fs-5" style={{ color: '#008080' }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold m-0 text-dark">Location Address</h6>
                                        <p className="text-muted small m-0 mt-1">
                                            Chromolin Capital Chemicals Pvt. Ltd.<br />
                                            Chennai, Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <div className="text-teal me-3 fs-5" style={{ color: '#008080' }}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold m-0 text-dark">Email Support</h6>
                                        <a href="mailto:info@chromolin.com" className="text-teal text-decoration-none small fw-semibold" style={{ color: '#008080' }}>
                                            info@chromolin.com
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex mb-3">
                                    <div className="text-teal me-3 fs-5" style={{ color: '#008080' }}>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold m-0 text-dark">Telephone & Mobile</h6>
                                        <p className="text-muted small m-0 mt-1">
                                            Landline: 022- 25452592<br />
                                            Mobile / WhatsApp: +91-9867208251
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex">
                                    <div className="text-teal me-3 fs-5" style={{ color: '#008080' }}>
                                        <i className="fas fa-clock"></i>
                                    </div>
                                    <div>
                                        <h6 className="fw-bold m-0 text-dark">Business Working Hours</h6>
                                        <p className="text-muted small m-0 mt-1">
                                            Monday – Saturday: 9:00 AM – 6:30 PM (IST)<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Certifications & Quality Card */}
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-white" style={{ background: 'linear-gradient(135deg, #003333 0%, #008080 100%)' }}>
                                <h5 className="fw-bold mb-2">
                                    <i className="fas fa-award me-2"></i> Standards & Quality Assurance
                                </h5>
                                <p className="small text-white-50 mb-3" style={{ lineHeight: '1.6' }}>
                                    Certified with ISO 9001:2008 by American Board of Accreditation Services. Certified for Zero Banned Chemicals, GOTS compliance & Oeko-Tex RSL norms.
                                </p>
                                <div className="d-flex flex-wrap gap-2 pt-2 border-top border-white border-opacity-20">
                                    <span className="badge bg-white text-dark px-3 py-1 rounded-pill small">ISO 9001:2008</span>
                                    <span className="badge bg-white text-dark px-3 py-1 rounded-pill small">GOTS Certified</span>
                                    <span className="badge bg-white text-dark px-3 py-1 rounded-pill small">Oeko-Tex Standard</span>
                                    <span className="badge bg-white text-dark px-3 py-1 rounded-pill small">RSL Norms</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Regional Presence Section */}
                <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border mb-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-7">
                            <span className="badge bg-teal-soft text-teal border px-3 py-1 rounded-pill small mb-2" style={{ backgroundColor: '#e6f4f4', color: '#005959', borderColor: '#b2e0e0' }}>
                                Nationwide Distribution
                            </span>
                            <h3 className="fw-bold mb-2" style={{ color: '#008080' }}>Regional Marketing & Dealer Network</h3>
                            <p className="text-secondary small mb-0" style={{ lineHeight: '1.7' }}>
                                Well-trained marketing professionals operate as Regional Marketing Heads and operate via appointed dealers across all major textile wet processing clusters including Tirupur, Surat, Ahmedabad, Ludhiana, Bhilwara, Panipat, Mumbai, and Chennai.
                            </p>
                        </div>
                        <div className="col-12 col-md-5 mt-3 mt-md-0 text-md-end">
                            <Link to="/all-products" className="btn btn-outline-teal rounded-pill px-4 py-2 fw-semibold" style={{ borderColor: '#008080', color: '#008080' }}>
                                Explore Product Range <i className="fas fa-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-5">
                    <div className="text-center mb-4">
                        <h3 className="fw-bold mb-2" style={{ color: '#008080' }}>Frequently Asked Questions</h3>
                        <p className="text-muted small">Common queries regarding sample trials, technical support, and order processing.</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                                <h6 className="fw-bold mb-2" style={{ color: '#008080' }}>
                                    <i className="fas fa-question-circle me-2"></i> How can we request laboratory sample trials?
                                </h6>
                                <p className="text-secondary small m-0" style={{ lineHeight: '1.6' }}>
                                    You can request sample trials by filling out the message form above or calling our technical desk at +91-9867208251. We dispatch sample quantities along with TDS & process instructions.
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                                <h6 className="fw-bold mb-2" style={{ color: '#008080' }}>
                                    <i className="fas fa-question-circle me-2"></i> Are Chromolin products eco-friendly and certified?
                                </h6>
                                <p className="text-secondary small m-0" style={{ lineHeight: '1.6' }}>
                                    Yes, all our specialty formulations comply with Oeko-Tex standards, RSL norms, and zero banned chemical lists. Products are GOTS certified and ISO 9001 audited.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
