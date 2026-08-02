import React, { useState, useEffect } from 'react';

/**
 * Preloader Component
 * Displays a premium branded loading screen on initial website load.
 */
const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Wait for page resources to load, then fade out smoothly
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
                setLoading(false);
            }, 500); // 500ms fade duration
        }, 1200); // 1.2s initial display time

        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <div 
            className={`preloader-overlay d-flex flex-column align-items-center justify-content-center ${fadeOut ? 'preloader-fade-out' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#ffffff',
                zIndex: 9999,
                transition: 'opacity 0.5s ease-out, visibility 0.5s ease-out',
                opacity: fadeOut ? 0 : 1,
                visibility: fadeOut ? 'hidden' : 'visible',
         userSelect: 'none'
            }}
        >
            <div className="text-center p-4">
                {/* Logo with pulse container */}
                <div className="position-relative d-inline-block mb-4">
                    {/* Rotating Dual Chemical Spinner Ring */}
                    <div 
                        className="preloader-spinner-ring"
                        style={{
                            width: '130px',
                            height: '130px',
                            borderRadius: '50%',
                            border: '3px solid rgba(0, 128, 128, 0.12)',
                            borderTop: '3px solid #008080',
                            borderRight: '3px solid #00b3b3',
                            animation: 'spinRing 1.2s linear infinite',
                            margin: '0 auto'
                        }}
                    />
                           
                    {/* Centered Brand Logo */}
                    <div 
                        className="position-absolute top-50 start-50 translate-middle p-2 bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"
                        style={{ width: '95px', height: '95px' }}
                    >
                        <img 
                            src="/assets/images/ChromolinLogo.png" 
                            alt="Chromolin Logo" 
                            style={{ maxWidth: '80px', maxHeight: '40px', objectFit: 'contain' }}
                        />
                    </div>
                </div>

                {/* Brand Title */}
                <h5 className="fw-bold m-0 mb-1 tracking-wide" style={{ color: '#008080', letterSpacing: '0.5px' }}>
                    CHROMOLIN CHEMICAL
                </h5>

                {/* Subtitle / Loading Text */}
                <p className="text-muted small m-0 fw-medium">
                    Loading Specialty Formulations<span className="dots-animated">...</span>
                </p>

                {/* Progress Bar */}
                <div 
                    className="progress mt-3 mx-auto rounded-pill overflow-hidden" 
                    style={{ width: '160px', height: '4px', backgroundColor: 'rgba(0, 128, 128, 0.15)' }}
                >
                    <div 
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ 
                            width: '100%', 
                            backgroundColor: '#008080',
                            animation: 'preloaderBar 1.2s ease-in-out infinite' 
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Preloader;
