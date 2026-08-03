import React, { useState, useRef } from 'react';
import { productData } from '../../data/products';
import { Link } from 'react-router-dom';

const categoryIcons = {
    all: 'fas fa-th-large',
    desizing: 'fas fa-tint',
    mercerisation: 'fas fa-spa',
    wettingScouring: 'fas fa-filter',
    stabilizersSequestering: 'fas fa-shield-alt',
    defoamersLubricants: 'fas fa-oil-can',
    afterTreatment: 'fas fa-vial',
    finishing: 'fas fa-magic',
    cationicSofteners: 'fas fa-feather-alt',
    nonIonicSofteners: 'fas fa-layer-group',
    siliconeSofteners: 'fas fa-water',
    polyesterProcessing: 'fas fa-cogs',
    garmentProcessing: 'fas fa-tshirt'
};

const ProductImageDisplay = ({ image, name }) => {
    return (
        <img 
            src={image} 
            alt={name} 
            className="w-100 h-100 object-fit-contain p-1"
        />
    );
};

const AllProducts = () => {
    const [globalSearch, setGlobalSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isMobileCategoryOpen, setIsMobileCategoryOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeTab, setActiveTab] = useState('specs');
    const [inquirySubmitted, setInquirySubmitted] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', company: '', quantity: '', message: '' });

    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
        }
    };

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
            <div className="product-hero-banner p-3 p-md-4 mb-3">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-8">
                        <span className="badge bg-white text-teal px-2.5 py-1 rounded-pill fw-bold mb-1.5 shadow-sm extra-small" style={{ color: '#008080', fontSize: '0.75rem' }}>
                            <i className="fas fa-layer-group me-1.5"></i> Master Directory
                        </span>
                        <h3 className="fw-bold mb-1 text-white fs-4 fs-md-2">All Specialty Products</h3>
                        <p className="text-white-50 mb-2 small d-none d-sm-block" style={{ maxWidth: '640px', lineHeight: '1.4' }}>
                            Explore our comprehensive portfolio of textile processing chemicals, softeners, enzymes, wetting agents, and garment finishing solutions.
                        </p>

                        {/* Integrated Unified Search & Category Filter Bar */}
                        <div className="position-relative mt-2" style={{ maxWidth: '640px' }}>
                            <div className="input-group rounded-pill overflow-visible shadow border-0 bg-white p-1">
                                {/* Integrated Category Dropdown Trigger */}
                                <div className="position-relative">
                                    <button
                                        type="button"
                                        className="btn rounded-pill border-0 fw-semibold d-flex align-items-center gap-1.5 px-3 py-1.5 small shadow-none h-100"
                                        style={{ backgroundColor: '#e6f4f4', color: '#008080' }}
                                        onClick={() => setIsMobileCategoryOpen(!isMobileCategoryOpen)}
                                    >
                                        <i className={categoryIcons[selectedCategory] || 'fas fa-th-large'} style={{ color: '#008080' }}></i>
                                        <span className="fw-bold d-inline-block text-truncate" style={{ maxWidth: '140px' }}>
                                            {selectedCategory === 'all' ? 'All Categories' : productData[selectedCategory]?.title.replace('Explore Our ', '').replace(' Materials', '')}
                                        </span>
                                        <span className="badge rounded-pill text-white ms-1 px-2 py-0.5" style={{ backgroundColor: '#008080', fontSize: '0.72rem' }}>
                                            {selectedCategory === 'all' ? totalCount : productData[selectedCategory]?.products.length}
                                        </span>
                                        <i className={`fas fa-chevron-${isMobileCategoryOpen ? 'up' : 'down'} extra-small text-muted ms-1`}></i>
                                    </button>

                                    {/* Custom Popover Category Menu */}
                                    {isMobileCategoryOpen && (
                                        <>
                                            <div className="position-fixed top-0 start-0 w-100 h-100 z-2" onClick={() => setIsMobileCategoryOpen(false)}></div>
                                            <div className="custom-mobile-dropdown-menu" style={{ minWidth: '270px', left: '0' }}>
                                                <div className="p-2 border-bottom mb-1 d-flex align-items-center justify-content-between text-muted small fw-bold" style={{ fontSize: '0.75rem' }}>
                                                    <span><i className="fas fa-layer-group me-1 text-teal" style={{ color: '#008080' }}></i> FILTER BY CATEGORY</span>
                                                    <span>{categoryKeys.length} CATEGORIES</span>
                                                </div>
                                                <div 
                                                    className={`custom-mobile-dropdown-item ${selectedCategory === 'all' ? 'active' : ''}`}
                                                    onClick={() => {
                                                        setSelectedCategory('all');
                                                        setIsMobileCategoryOpen(false);
                                                    }}
                                                >
                                                    <span className="d-flex align-items-center gap-2">
                                                        <i className={categoryIcons.all}></i>
                                                        <span>All Categories</span>
                                                    </span>
                                                    <span className="d-flex align-items-center gap-2">
                                                        <span className="badge rounded-pill bg-light text-dark px-2 py-0.5" style={{ fontSize: '0.75rem' }}>{totalCount}</span>
                                                        {selectedCategory === 'all' && <i className="fas fa-check small ms-1"></i>}
                                                    </span>
                                                </div>

                                                {categoryKeys.map((catKey) => {
                                                    const cat = productData[catKey];
                                                    const count = cat.products.length;
                                                    const label = cat.title.replace('Explore Our ', '').replace(' Materials', '');
                                                    const icon = categoryIcons[catKey] || 'fas fa-flask';
                                                    const isActive = selectedCategory === catKey;

                                                    return (
                                                        <div 
                                                            key={catKey}
                                                            className={`custom-mobile-dropdown-item ${isActive ? 'active' : ''}`}
                                                            onClick={() => {
                                                                setSelectedCategory(catKey);
                                                                setIsMobileCategoryOpen(false);
                                                            }}
                                                        >
                                                            <span className="d-flex align-items-center gap-2 text-truncate pe-2">
                                                                <i className={icon}></i>
                                                                <span className="text-truncate">{label}</span>
                                                            </span>
                                                            <span className="d-flex align-items-center gap-1 shrink-0">
                                                                <span className="badge rounded-pill bg-light text-dark px-2 py-0.5" style={{ fontSize: '0.75rem' }}>{count}</span>
                                                                {isActive && <i className="fas fa-check small ms-1"></i>}
                                                            </span>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    )}
                                </div>

                                {/* Vertical Divider */}
                                <div className="vr my-auto mx-1" style={{ height: '22px', opacity: 0.2 }}></div>

                                {/* Search Input Field */}
                                <span className="input-group-text bg-transparent border-0 ps-2 pe-1">
                                    <i className="fas fa-search small text-muted"></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-0 small shadow-none py-1.5 text-dark"
                                    placeholder="Search products..."
                                    value={globalSearch}
                                    onChange={(e) => setGlobalSearch(e.target.value)}
                                />
                                {globalSearch && (
                                    <button className="btn btn-white border-0 text-muted pe-3 py-1" onClick={() => setGlobalSearch('')}>
                                        <i className="fas fa-times small"></i>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-4 mt-3 mt-lg-0 text-center text-lg-end d-none d-lg-block">
                        <div className="bg-white bg-opacity-10 backdrop-blur p-3 rounded-4 border border-white border-opacity-25 d-inline-block text-center w-100" style={{ maxWidth: '220px' }}>
                            <div className="fs-2 fw-bold text-white mb-0">{categoryKeys.length}</div>
                            <div className="text-white-50 text-uppercase small fw-semibold tracking-wider" style={{ fontSize: '0.75rem' }}>
                                Specialty Categories
                            </div>
                            <div className="mt-2 pt-2 border-top border-white border-opacity-20 text-white-50" style={{ fontSize: '0.75rem' }}>
                                <i className="fas fa-certificate me-1 text-teal-light"></i> ISO & GOTS Standard
                            </div>
                        </div>
                    </div>
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
                                    <div key={pIdx} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                        <div className="card product-card h-100 d-flex flex-column">
                                            {/* Image Wrapper */}
                                            <div className="product-card-img-wrapper border-bottom bg-light" style={{ height: '145px' }}>
                                                <ProductImageDisplay image={product.image} name={product.name} categoryTitle={category.title} />
                                                <div className="position-absolute top-0 start-0 m-2">
                                                    <span className="badge bg-dark bg-opacity-75 text-white px-2 py-1 rounded-pill extra-small" style={{ fontSize: '0.7rem' }}>
                                                        {specs.ionic}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Card Body */}
                                            <div className="card-body p-3 d-flex flex-column flex-grow-1">
                                                <div className="d-flex align-items-center mb-2.5">
                                                    <div style={{ width: '3px', height: '18px', backgroundColor: '#008080', borderRadius: '3px', marginRight: '8px' }}></div>
                                                    <h6 className="card-title fw-bold m-0 text-truncate" style={{ color: '#008080', fontSize: '0.95rem' }}>
                                                        {product.name}
                                                    </h6>
                                                </div>

                                                {/* Badges */}
                                                <div className="d-flex flex-wrap gap-1 mb-3">
                                                    {badges.map((b, i) => (
                                                        <span 
                                                            key={i} 
                                                            className="badge px-2 py-0.5 rounded-pill"
                                                            style={{ fontSize: '0.7rem', fontWeight: '500', ...b.style }}
                                                        >
                                                            {b.text}
                                                        </span>
                                                    ))}
                                                </div>

                                                {/* Description */}
                                                <p className="card-text text-secondary mb-3 flex-grow-1" style={{ fontSize: '0.82rem', lineHeight: '1.45', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                                    {product.description}
                                                </p>

                                                {/* Actions */}
                                                <div className="pt-2 border-top mt-auto d-flex gap-1.5">
                                                    <button
                                                        className="btn btn-outline-teal w-100 rounded-pill btn-sm fw-semibold py-1.5 px-2"
                                                        style={{ borderColor: '#008080', color: '#008080', fontSize: '0.78rem' }}
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
                                                        className="btn rounded-pill btn-sm fw-semibold py-1.5 px-2.5 text-white shrink-0"
                                                        style={{ backgroundColor: '#008080', fontSize: '0.78rem' }}
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
                                                <div className="rounded-4 shadow-sm border overflow-hidden mb-3 bg-light" style={{ height: '220px' }}>
                                                    <ProductImageDisplay image={selectedProduct.image} name={selectedProduct.name} categoryTitle={selectedProduct.categoryTitle} />
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
