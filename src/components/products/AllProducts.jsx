import React, { useState } from 'react';
import { productData } from '../../data/products';
import { Link } from 'react-router-dom';
import ProductLogoCard from '../ProductLogoCard';

const AllProducts = () => {
    const [globalSearch, setGlobalSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('specs');
    const [inquirySubmitted, setInquirySubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', company: '', quantity: '', message: '' });

    const categoryKeys = Object.keys(productData);

    // Compute total products count
    let totalCount = 0;
    categoryKeys.forEach(k => { totalCount += productData[k].products.length; });

    // Helper for chemical specs
    const getSpecs = (product) => {
        const desc = product.description.toLowerCase();
        return {
            ionic: desc.includes('non ionic') || desc.includes('non-ionic') ? 'Non-Ionic' : desc.includes('anionic') ? 'Anionic' : desc.includes('cationic') ? 'Cationic' : 'Non-Ionic / Special',
            form: desc.includes('powder') ? 'Powder / Granules' : desc.includes('flakes') ? 'Flakes Form' : 'Liquid / Aqueous Emulsion',
            process: desc.includes('cold pad batch') ? 'Cold Pad Batch' : desc.includes('padding') && desc.includes('exhaust') ? 'Padding & Exhaust' : desc.includes('padding') ? 'Padding Process' : 'Exhaust & Softflow',
            temp: desc.includes('80°c') || desc.includes('90°c') ? '80°C - 90°C (High Temp)' : desc.includes('ambient') ? 'Ambient Temperature' : 'Wide Range (30°C - 100°C)',
            targetFabrics: desc.includes('denim') ? 'Denim Care' : desc.includes('pes') || desc.includes('polyester') ? 'Polyester & Blends' : desc.includes('knitted') || desc.includes('knits') ? 'Cotton Knits & Wovens' : 'Cotton & Cellulosic'
        };
    };

    // Helper for badges
    const getBadges = (desc) => {
        const badges = [];
        const lower = desc.toLowerCase();
        
        if (lower.includes('non yellowing') || lower.includes('non-yellowing')) 
            badges.push({ text: 'Non-Yellowing', style: { backgroundColor: '#047857', color: '#ffffff' } });
        if (lower.includes('cold pad batch')) 
            badges.push({ text: 'Cold Pad Batch', style: { backgroundColor: '#e6f4f4', color: '#005959', border: '1px solid #b2e0e0' } });
        if (lower.includes('padding')) 
            badges.push({ text: 'Padding', style: { backgroundColor: '#028090', color: '#ffffff' } });
        if (lower.includes('exhaust')) 
            badges.push({ text: 'Exhaust', style: { backgroundColor: '#0f4c5c', color: '#ffffff' } });
        if (lower.includes('apeo free') || lower.includes('apeo-free')) 
            badges.push({ text: 'APEO Free', style: { backgroundColor: '#008080', color: '#ffffff' } });
        if (lower.includes('enzyme')) 
            badges.push({ text: 'Enzyme', style: { backgroundColor: '#0d9488', color: '#ffffff' } });
        if (lower.includes('denim')) 
            badges.push({ text: 'Denim Care', style: { backgroundColor: '#004d4d', color: '#ffffff' } });

        if (badges.length === 0) {
            badges.push({ text: 'Specialty Chemical', style: { backgroundColor: '#008080', color: '#ffffff' } });
        }
        return badges;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setInquirySubmitted(true);
        setTimeout(() => {
            setInquirySubmitted(false);
            setFormData({ name: '', email: '', company: '', quantity: '', message: '' });
        }, 4000);
    };

    return (
        <div className="container py-4 my-2">
            {/* Top Navigation & Breadcrumb */}
            <div className="mb-4 d-flex align-items-center justify-content-between flex-wrap gap-3">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0 bg-transparent p-0 align-items-center">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-decoration-none text-muted fw-semibold">Home</Link>
                        </li>
                        <li className="breadcrumb-item active text-teal fw-bold" aria-current="page" style={{ color: '#008080' }}>
                            All Products
                        </li>
                    </ol>
                </nav>

                <span className="badge bg-teal-subtle text-teal border px-3 py-2 rounded-pill fs-6" style={{ borderColor: '#008080', color: '#008080', backgroundColor: '#e6f2f2' }}>
                    <i className="fas fa-vial me-2"></i> Total Range: {totalCount} Products
                </span>
            </div>

            {/* Master Hero Banner */}
            <div className="product-hero-banner p-4 p-md-5 mb-4">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-8">
                        <span className="badge bg-white text-teal px-3 py-2 rounded-pill fw-bold mb-3 shadow-sm" style={{ color: '#008080' }}>
                            <i className="fas fa-layer-group me-2"></i> Master Product Directory
                        </span>
                        <h1 className="fw-bold display-5 mb-3">All Specialty Products</h1>
                        <p className="lead text-white-50 mb-4 fs-6" style={{ maxWidth: '680px', lineHeight: '1.7' }}>
                            Explore our comprehensive portfolio of textile processing chemicals, softeners, enzymes, wetting agents, and garment finishing solutions.
                        </p>

                        {/* Search Input embedded in Banner */}
                        <div className="position-relative" style={{ maxWidth: '540px' }}>
                            <div className="input-group input-group-lg rounded-pill overflow-hidden shadow-lg border-0 bg-white">
                                <span className="input-group-text bg-white border-0 ps-4">
                                    <i className="fas fa-search" style={{ color: '#008080' }}></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-0 fs-6 shadow-none py-3 text-dark"
                                    placeholder="Search across all 40+ products by name, code or feature..."
                                    value={globalSearch}
                                    onChange={(e) => setGlobalSearch(e.target.value)}
                                />
                                {globalSearch && (
                                    <button className="btn btn-white border-0 text-muted pe-4" onClick={() => setGlobalSearch('')}>
                                        <i className="fas fa-times"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mt-4 mt-lg-0 text-center text-lg-end">
                        <div className="bg-white bg-opacity-10 backdrop-blur p-4 rounded-4 border border-white border-opacity-25 d-inline-block text-center w-100" style={{ maxWidth: '280px' }}>
                            <div className="display-4 fw-bold text-white mb-1">{categoryKeys.length}</div>
                            <div className="text-white-50 text-uppercase small fw-semibold tracking-wider">
                                Specialty Categories
                            </div>
                            <div className="mt-3 pt-3 border-top border-white border-opacity-20 text-white-50 small">
                                <i className="fas fa-certificate me-1 text-teal-light"></i> ISO, GOTS & Oeko-Tex Standard
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Interactive Category Filter Bar */}
            <div className="bg-white p-3 p-md-4 rounded-4 shadow-sm border mb-5">
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <span className="text-muted fw-bold small text-uppercase" style={{ letterSpacing: '0.5px' }}>
                        <i className="fas fa-filter me-2 text-teal" style={{ color: '#008080' }}></i> Select Category:
                    </span>
                    <span className="small text-muted">Showing {selectedCategory === 'all' ? 'All Categories' : productData[selectedCategory]?.title.replace('Explore Our ', '').replace(' Materials', '')}</span>
                </div>
                <div className="d-flex flex-wrap gap-2 pt-1">
                    <button
                        className={`category-nav-pill ${selectedCategory === 'all' ? 'active' : ''}`}
                        onClick={() => setSelectedCategory('all')}
                    >
                        All Categories ({totalCount})
                    </button>
                    {categoryKeys.map((catKey) => {
                        const cat = productData[catKey];
                        const count = cat.products.length;
                        const label = cat.title.replace('Explore Our ', '').replace(' Materials', '');
                        return (
                            <button
                                key={catKey}
                                className={`category-nav-pill ${selectedCategory === catKey ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(catKey)}
                            >
                                {label} ({count})
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Render Category Sections */}
            {categoryKeys.map((catKey) => {
                if (selectedCategory !== 'all' && selectedCategory !== catKey) return null;

                const category = productData[catKey];
                const cleanTitle = category.title.replace('Explore Our ', '').replace(' Materials', '');
                const matchingProducts = category.products.filter(p =>
                    p.name.toLowerCase().includes(globalSearch.toLowerCase()) ||
                    p.description.toLowerCase().includes(globalSearch.toLowerCase())
                );

                if (globalSearch && matchingProducts.length === 0) return null;

                return (
                    <section key={catKey} id={`cat-${catKey}`} className="mb-5 pt-4">
                        <div className="d-flex align-items-center justify-content-between mb-4 pb-3 border-bottom">
                            <div>
                                <h2 className="fw-bold m-0 fs-3" style={{ color: '#008080' }}>
                                    {cleanTitle}
                                </h2>
                                <p className="text-muted small m-0 mt-1">{category.description}</p>
                            </div>
                            <span className="badge rounded-pill text-white px-3 py-2 fs-6 shadow-sm" style={{ backgroundColor: '#008080' }}>
                                {matchingProducts.length} Products
                            </span>
                        </div>

                        <div className="row g-4">
                            {matchingProducts.map((product, pIdx) => {
                                const badges = getBadges(product.description);
                                const specs = getSpecs(product);

                                return (
                                    <div key={pIdx} className="col-12 col-md-6 col-lg-4">
                                        <div className="card product-card h-100 d-flex flex-column">
                                            {/* Image Wrapper */}
                                            <div className="product-card-img-wrapper border-bottom" style={{ height: '190px' }}>
                                                <ProductLogoCard name={product.name} categoryTitle={category.title} />
                                                <div className="position-absolute top-0 start-0 m-3">
                                                    <span className="badge bg-dark bg-opacity-75 text-white px-3 py-1 rounded-pill small">
                                                        {specs.ionic}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Card Body */}
                                            <div className="card-body p-4 d-flex flex-column flex-grow-1">
                                                <div className="d-flex align-items-center mb-2">
                                                    <div style={{ width: '4px', height: '22px', backgroundColor: '#008080', borderRadius: '4px', marginRight: '10px' }}></div>
                                                    <h5 className="card-title fw-bold m-0" style={{ color: '#008080' }}>
                                                        {product.name}
                                                    </h5>
                                                </div>

                                                {/* Badges */}
                                                <div className="d-flex flex-wrap gap-1 mb-3">
                                                    {badges.map((b, i) => (
                                                        <span 
                                                            key={i} 
                                                            className="badge px-3 py-1 rounded-pill"
                                                            style={{ fontSize: '0.75rem', fontWeight: '500', ...b.style }}
                                                        >
                                                            {b.text}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Description */}
                                                <p className="card-text text-secondary mb-4 flex-grow-1 small" style={{ lineHeight: '1.65' }}>
                                                    {product.description}
                                                </p>

                                                {/* Actions */}
                                                <div className="pt-3 border-top mt-auto d-flex gap-2">
                                                    <button
                                                        className="btn btn-outline-teal w-100 rounded-pill btn-sm fw-semibold py-2"
                                                        style={{ borderColor: '#008080', color: '#008080' }}
                                                        onClick={() => {
                                                            setSelectedProduct({ ...product, categoryTitle: category.title });
                                                            setActiveTab('specs');
                                                        }}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#masterProductSpecModal"
                                                    >
                                                        <i className="fas fa-file-alt me-1"></i> Technical Specs
                                                    </button>
                                                    <button
                                                        className="btn rounded-pill btn-sm fw-semibold py-2 px-3 text-white"
                                                        style={{ backgroundColor: '#008080' }}
                                                        onClick={() => {
                                                            setSelectedProduct({ ...product, categoryTitle: category.title });
                                                            setActiveTab('inquire');
                                                        }}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#masterProductSpecModal"
                                                    >
                                                        Inquire
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                );
            })}

            {/* Master Interactive Modal */}
            <div className="modal fade" id="masterProductSpecModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content border-0 rounded-4 shadow-lg overflow-hidden">
                        {selectedProduct && (
                            <>
                                <div className="modal-header text-white p-4" style={{ background: 'linear-gradient(135deg, #003333 0%, #008080 100%)' }}>
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="bg-white bg-opacity-20 p-3 rounded-3 text-white">
                                            <i className="fas fa-vial fs-3"></i>
                                        </div>
                                        <div>
                                            <span className="badge bg-white text-teal px-3 py-1 rounded-pill fw-bold mb-1" style={{ color: '#008080' }}>
                                                {selectedProduct.categoryTitle}
                                            </span>
                                            <h3 className="modal-title fw-bold m-0 text-white">{selectedProduct.name}</h3>
                                        </div>
                                    </div>
                                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <div className="bg-light border-bottom px-4 pt-3">
                                    <ul className="nav nav-tabs border-0">
                                        <li className="nav-item">
                                            <button
                                                className={`nav-link fw-semibold px-4 py-2 rounded-top ${activeTab === 'specs' ? 'active text-teal border-bottom-0 bg-white' : 'text-muted'}`}
                                                style={activeTab === 'specs' ? { color: '#008080', borderTop: '3px solid #008080' } : {}}
                                                onClick={() => setActiveTab('specs')}
                                            >
                                                <i className="fas fa-list-check me-2"></i> Technical Specifications
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button
                                                className={`nav-link fw-semibold px-4 py-2 rounded-top ${activeTab === 'inquire' ? 'active text-teal border-bottom-0 bg-white' : 'text-muted'}`}
                                                style={activeTab === 'inquire' ? { color: '#008080', borderTop: '3px solid #008080' } : {}}
                                                onClick={() => setActiveTab('inquire')}
                                            >
                                                <i className="fas fa-envelope-open-text me-2"></i> Request Sample / TDS
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="modal-body p-4">
                                    {activeTab === 'specs' ? (
                                        <div className="row g-4">
                                            <div className="col-12 col-md-5">
                                                <div className="rounded-4 shadow-sm border overflow-hidden mb-3" style={{ height: '220px' }}>
                                                    <ProductLogoCard name={selectedProduct.name} categoryTitle={selectedProduct.categoryTitle} />
                                                </div>
                                                <div className="p-3 bg-light rounded-3 border">
                                                    <h6 className="fw-bold mb-2" style={{ color: '#008080' }}>
                                                        <i className="fas fa-shield-alt me-1"></i> Quality & Standards
                                                    </h6>
                                                    <p className="small text-muted mb-0">
                                                        ISO 9001:2008 & Oeko-Tex compliant. Formulated for high consistency and eco-friendly standards.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="col-12 col-md-7">
                                                <h5 className="fw-bold mb-3" style={{ color: '#008080' }}>Product Overview</h5>
                                                <p className="text-secondary leading-relaxed mb-4" style={{ fontSize: '0.95rem' }}>
                                                    {selectedProduct.description}
                                                </p>

                                                <div className="table-responsive border rounded-3 overflow-hidden mb-3">
                                                    <table className="table table-bordered table-striped m-0 spec-table small">
                                                        <tbody>
                                                            <tr>
                                                                <th>Ionic Character</th>
                                                                <td>{getSpecs(selectedProduct).ionic}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Physical Form</th>
                                                                <td>{getSpecs(selectedProduct).form}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Application Method</th>
                                                                <td>{getSpecs(selectedProduct).process}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Temperature Range</th>
                                                                <td>{getSpecs(selectedProduct).temp}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Target Fabric</th>
                                                                <td>{getSpecs(selectedProduct).targetFabrics}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <button
                                                    className="btn text-white w-100 rounded-pill py-2 fw-semibold"
                                                    style={{ backgroundColor: '#008080' }}
                                                    onClick={() => setActiveTab('inquire')}
                                                >
                                                    <i className="fas fa-paper-plane me-2"></i> Request TDS & Sample
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="p-2">
                                            {inquirySubmitted ? (
                                                <div className="text-center py-4 text-success">
                                                    <i className="fas fa-circle-check display-3 mb-3" style={{ color: '#008080' }}></i>
                                                    <h4 className="fw-bold text-dark">Inquiry Sent Successfully!</h4>
                                                    <p className="text-muted">
                                                        Thank you for your interest in <strong>{selectedProduct.name}</strong>. Our technical representative will contact you with sample & TDS details shortly.
                                                    </p>
                                                </div>
                                            ) : (
                                                <form onSubmit={handleFormSubmit}>
                                                    <div className="alert bg-teal-soft border-teal text-teal-dark p-3 rounded-3 mb-4" style={{ backgroundColor: '#e6f4f4', color: '#005959' }}>
                                                        <i className="fas fa-info-circle me-2"></i> Submitting inquiry for: <strong>{selectedProduct.name}</strong>
                                                    </div>

                                                    <div className="row g-3">
                                                        <div className="col-12 col-md-6">
                                                            <label className="form-label fw-semibold text-secondary small">Your Full Name *</label>
                                                            <input
                                                                type="text"
                                                                className="form-control rounded-3"
                                                                required
                                                                placeholder="e.g. Rahul Sharma"
                                                                value={formData.name}
                                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            />
                                                        </div>

                                                        <div className="col-12 col-md-6">
                                                            <label className="form-label fw-semibold text-secondary small">Corporate Email *</label>
                                                            <input
                                                                type="email"
                                                                className="form-control rounded-3"
                                                                required
                                                                placeholder="e.g. rahul@textiles.com"
                                                                value={formData.email}
                                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            />
                                                        </div>

                                                        <div className="col-12 col-md-6">
                                                            <label className="form-label fw-semibold text-secondary small">Company / Mill Name</label>
                                                            <input
                                                                type="text"
                                                                className="form-control rounded-3"
                                                                placeholder="e.g. Chromolin Fabrics Ltd."
                                                                value={formData.company}
                                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                            />
                                                        </div>

                                                        <div className="col-12 col-md-6">
                                                            <label className="form-label fw-semibold text-secondary small">Estimated Requirement</label>
                                                            <input
                                                                type="text"
                                                                className="form-control rounded-3"
                                                                placeholder="e.g. 500 Kg / 2 Drums"
                                                                value={formData.quantity}
                                                                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                                            />
                                                        </div>

                                                        <div className="col-12">
                                                            <label className="form-label fw-semibold text-secondary small">Requirements or Notes</label>
                                                            <textarea
                                                                className="form-control rounded-3"
                                                                rows="3"
                                                                placeholder="Please provide details about your substrate, process temperature, or target handfeel..."
                                                                value={formData.message}
                                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                            ></textarea>
                                                        </div>

                                                        <div className="col-12 pt-2">
                                                            <button
                                                                type="submit"
                                                                className="btn text-white w-100 rounded-pill py-3 fw-bold shadow-sm"
                                                                style={{ backgroundColor: '#008080' }}
                                                            >
                                                                <i className="fas fa-paper-plane me-2"></i> Submit Technical Inquiry
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
