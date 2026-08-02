import React from 'react';

/**
 * ScrollIndicator Component
 * Renders an animated mouse scroll-down indicator to visually prompt users to scroll down for more details.
 * 
 * Props:
 * - targetId: HTML element ID to scroll to when clicked (optional)
 * - label: Custom label text (default: "Scroll Down for Details")
 * - theme: "dark" | "light" | "teal" (default: "light")
 */
const ScrollIndicator = ({ targetId, label = "Scroll Down for Details", theme = "light", className = "" }) => {
    const handleClick = () => {
        if (targetId) {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                return;
            }
        }
        // Fallback smooth scroll down by viewport height
        window.scrollBy({ top: window.innerHeight * 0.6, behavior: 'smooth' });
    };

    const isDark = theme === "dark" || theme === "teal-dark";
    const mouseBorderColor = isDark ? "#008080" : "rgba(255, 255, 255, 0.85)";
    const wheelColor = isDark ? "#008080" : "#ffffff";
    const textColor = isDark ? "#008080" : "rgba(255, 255, 255, 0.9)";
    const chevronColor = isDark ? "#008080" : "#ffffff";

    return (
        <div 
            className={`scroll-indicator-wrapper text-center my-3 ${className}`}
            onClick={handleClick}
            role="button"
            tabIndex={0}
            title="Click to scroll down"
            style={{ cursor: 'pointer', userSelect: 'none' }}
        >
            <div className="d-inline-flex flex-column align-items-center gap-2">
                {/* Animated Mouse Icon */}
                <div 
                    className="mouse-icon"
                    style={{
                        width: '24px',
                        height: '38px',
                        border: `2px solid ${mouseBorderColor}`,
                        borderRadius: '16px',
                        position: 'relative',
                        display: 'inline-block',
                        boxShadow: isDark ? '0 2px 8px rgba(0, 128, 128, 0.15)' : 'none'
                    }}
                >
                    <div 
                        className="mouse-wheel"
                        style={{
                            width: '4px',
                            height: '8px',
                            backgroundColor: wheelColor,
                            borderRadius: '2px',
                            position: 'absolute',
                            top: '6px',
                            left: '50%',
                            marginLeft: '-2px',
                            animation: 'scrollWheel 1.8s ease-in-out infinite'
                        }}
                    />
                </div>

                {/* Label Text */}
                <span 
                    className="small fw-semibold tracking-wider text-uppercase"
                    style={{ 
                        color: textColor, 
                        fontSize: '0.78rem',
                        letterSpacing: '1px',
                        opacity: 0.9 
                    }}
                >
                    {label}
                </span>

                {/* Bouncing Chevron Arrow */}
                <div className="chevron-bounce mt-1" style={{ color: chevronColor, fontSize: '0.85rem' }}>
                    <i className="fas fa-chevron-down"></i>
                </div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
