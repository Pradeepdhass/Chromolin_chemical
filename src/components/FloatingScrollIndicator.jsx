import React, { useState, useEffect } from 'react';

/**
 * FloatingScrollIndicator Component
 * Floats fixed at the screen bottom-center across all pages, independent of any container/banner.
 * Automatically fades out when the user scrolls down the page.
 */
const FloatingScrollIndicator = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight;

            // Hide when scrolled down past 280px or near page bottom
            if (scrollY > 280 || (scrollY + windowHeight >= bodyHeight - 100)) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToContent = () => {
        window.scrollBy({ top: window.innerHeight * 0.75, behavior: 'smooth' });
    };

    return (
        <div
            className={`floating-scroll-wrapper text-center ${isVisible ? 'visible' : 'hidden'}`}
            onClick={scrollToContent}
            role="button"
            tabIndex={0}
            title="Click to scroll down"
            style={{
                position: 'fixed',
                bottom: '24px',
                left: '50%',
                transform: isVisible ? 'translate(-50%, 0)' : 'translate(-50%, 20px)',
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? 'auto' : 'none',
                zIndex: 1040,
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                userSelect: 'none'
            }}
        >
            <div 
                className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill shadow-lg"
                style={{
                    backgroundColor: 'rgba(0, 64, 64, 0.92)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)'
                }}
            >
                {/* Mouse Icon */}
                <div
                    style={{
                        width: '18px',
                        height: '28px',
                        border: '2px solid rgba(255, 255, 255, 0.9)',
                        borderRadius: '12px',
                        position: 'relative',
                        display: 'inline-block'
                    }}
                >
                    <div
                        style={{
                            width: '3px',
                            height: '6px',
                            backgroundColor: '#ffffff',
                            borderRadius: '2px',
                            position: 'absolute',
                            top: '4px',
                            left: '50%',
                            marginLeft: '-1.5px',
                            animation: 'scrollWheel 1.6s ease-in-out infinite'
                        }}
                    />
                </div>

                <span className="small fw-semibold text-white px-1" style={{ fontSize: '0.8rem', letterSpacing: '0.5px' }}>
                    Scroll Down
                </span>

                <i className="fas fa-chevron-down text-white chevron-bounce" style={{ fontSize: '0.75rem' }}></i>
            </div>
        </div>
    );
};

export default FloatingScrollIndicator;
