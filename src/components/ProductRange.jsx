import React from 'react';
import { Link } from 'react-router-dom';

const ProductRange = () => {
    return (
        <section className="product-range py-3 my-2" id="product-range">
            <div className="text-center mb-3">
                <h2 className="section-title fw-bold mb-1">Product Range</h2>
                <p className="text-muted mb-2">Explore our full line of eco-friendly textile wet processing specialty chemicals.</p>
                <Link to="/all-products" className="btn btn-teal text-white rounded-pill px-4 py-2 shadow-sm" style={{ backgroundColor: '#008080' }}>
                    <i className="fas fa-th-large me-2"></i> View Complete Product Catalog
                </Link>
            </div>

            <div className="row category-row text-center justify-content-center">
                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/desizing" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-droplet-half fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Desizing</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/mercerisation" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-flower1 fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Mercerising Souring & Bleaching</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/cationic-softeners" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box text-center">
                            <i className="bi bi-droplet fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Cationic Softeners</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/after-treatment" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box text-center">
                            <i className="bi bi-stars fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">After Treatment</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/silicone-softeners" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-droplet-half fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Silicone Softeners</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/garment-processing" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-universal-access-circle fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Garment Processing</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/non-ionic-softeners" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-droplet-fill fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Non-Ionic Softeners</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/wetting-scouring" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-water fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Wetting & Scouring</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/stabilizers-sequestering" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-shield-check fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Stabilizers & Sequestering</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/polyester-processing" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-gear-wide-connected fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Polyester Processing</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/defoamers-lubricants" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box">
                            <i className="bi bi-droplet fs-2 mb-2 d-block"></i>
                            <span className="d-block fw-semibold">Defoamers & Lubricants</span>
                        </div>
                    </Link>
                </div>

                <div className="col-6 col-md-4 col-lg-2 mb-4">
                    <Link to="/all-products" className="text-decoration-none text-dark d-block h-100">
                        <div className="category-box bg-teal-subtle border-teal" style={{ borderColor: '#008080' }}>
                            <i className="bi bi-grid-3x3-gap-fill fs-2 mb-2 d-block" style={{ color: '#008080' }}></i>
                            <span className="d-block fw-bold" style={{ color: '#008080' }}>View All Products</span>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductRange;
