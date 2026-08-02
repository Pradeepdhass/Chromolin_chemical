import React from 'react';

/**
 * Parses a full product name into brand prefix and product code.
 * e.g. "Chromozyme DS2" -> { prefix: "Chromozyme", code: "DS2" }
 * e.g. "Catamine NI Flakes" -> { prefix: "Catamine", code: "NI FLAKES" }
 * e.g. "Miquest AB 45" -> { prefix: "Miquest", code: "AB 45" }
 */
const parseProductName = (fullName) => {
    if (!fullName) return { prefix: 'Chromolin', code: 'PRODUCT' };
    
    const parts = fullName.trim().split(' ');
    if (parts.length === 1) {
        return { prefix: 'Chromolin', code: parts[0] };
    }
    
    const prefix = parts[0];
    const code = parts.slice(1).join(' ');
    return { prefix, code };
};

/**
 * Determines appropriate category subtitle based on product name or description
 */
const getSubtitle = (name, categoryTitle = '') => {
    const n = name.toLowerCase();
    const c = categoryTitle.toLowerCase();

    if (n.includes('zyme') || c.includes('desiz')) return 'DESIZING ENZYME';
    if (n.includes('silvon') || c.includes('silicone')) return 'SILICONE SOFTENER';
    if (n.includes('catamine') || c.includes('softener')) return 'TEXTILE SOFTENER';
    if (n.includes('capitol') || c.includes('wetting')) return 'WETTING & SCOURING';
    if (n.includes('mercerin') || c.includes('merceris')) return 'MERCERISING AGENT';
    if (n.includes('chromogen') || c.includes('polyester')) return 'POLYESTER AUXILIARY';
    if (n.includes('chromotex')) return 'CLEARING AGENT';
    if (n.includes('fixoline') || c.includes('after')) return 'COLOR FIXING AGENT';
    if (n.includes('defoaminol') || c.includes('defoamer')) return 'DEFOAMING LUBRICANT';
    if (n.includes('sequesta') || c.includes('stabilizer')) return 'SEQUESTERING AGENT';
    if (c.includes('garment')) return 'GARMENT PROCESSING';
    return 'SPECIALTY CHEMICAL';
};

const ProductLogoCard = ({ name, categoryTitle = '', className = '', style = {} }) => {
    const { prefix, code } = parseProductName(name);
    const subtitle = getSubtitle(name, categoryTitle);

    // Unique gradient ID per component instance
    const gradientId = `blueGrad-${name.replace(/[^a-zA-Z0-9]/g, '-')}`;

    return (
        <div 
            className={`product-logo-card-container d-flex align-items-center justify-content-center bg-white p-3 border-bottom ${className}`}
            style={{ width: '100%', height: '100%', minHeight: '190px', userSelect: 'none', ...style }}
        >
            <svg 
                viewBox="0 0 400 240" 
                className="w-100 h-100" 
                style={{ maxHeight: '200px' }}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#0066cc" />
                        <stop offset="50%" stopColor="#0040a0" />
                        <stop offset="100%" stopColor="#001f66" />
                    </linearGradient>
                    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
                    </filter>
                </defs>

                {/* Top Blue Curved Arc Swoosh */}
                <path 
                    d="M 120 38 Q 240 8, 360 48 Q 240 18, 120 38 Z" 
                    fill="#0040a0" 
                />

                {/* Brand Prefix Name (e.g. "Chromozyme", "Catamine", "Silvon") */}
                <text 
                    x="200" 
                    y="72" 
                    textAnchor="middle" 
                    fill="#002b66" 
                    fontFamily="'Segoe UI', Arial, sans-serif" 
                    fontWeight="800" 
                    fontSize="42"
                    letterSpacing="-0.5"
                >
                    {prefix}
                </text>

                {/* Main Product Code (e.g. "DS2", "HNS", "2500", "100X") */}
                <text 
                    x="200" 
                    y="158" 
                    textAnchor="middle" 
                    fill={`url(#${gradientId})`}
                    fontFamily="'Impact', 'Arial Black', sans-serif" 
                    fontWeight="900" 
                    fontSize={code.length > 8 ? "60" : code.length > 5 ? "72" : "88"}
                    letterSpacing="0.5"
                >
                    {code}
                </text>

                {/* Separator / Accents */}
                <line x1="80" y1="172" x2="320" y2="172" stroke="#0040a0" strokeWidth="1.5" opacity="0.4" />

                {/* Subtitle Category Text (e.g. "DETERGENT", "DESIZING ENZYME") */}
                <text 
                    x="200" 
                    y="198" 
                    textAnchor="middle" 
                    fill="#2d3748" 
                    fontFamily="'Segoe UI', Arial, sans-serif" 
                    fontWeight="800" 
                    fontSize="21"
                    letterSpacing="4"
                >
                    {subtitle}
                </text>

                {/* Bottom Green Curved Arc Swoosh */}
                <path 
                    d="M 60 196 Q 200 236, 340 196 Q 200 224, 60 196 Z" 
                    fill="#15803d" 
                />
            </svg>
        </div>
    );
};

export default ProductLogoCard;
