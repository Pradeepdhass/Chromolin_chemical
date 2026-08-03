import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';
import { productData } from './src/data/products.js';

function escapeXml(unsafe) {
    if (!unsafe) return '';
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
            default: return c;
        }
    });
}

function parseName(fullName) {
    const parts = fullName.trim().split(' ');
    if (parts.length === 1) return { prefix: 'Chromolin', code: parts[0] };
    return { prefix: parts[0], code: parts.slice(1).join(' ') };
}

function generateSvg(product, catTitle) {
    const { name, description } = product;
    const { prefix, code } = parseName(name);
    const descLower = description ? description.toLowerCase() : '';
    
    // Category label
    let catTag = 'SPECIALTY CHEMICAL';
    if (catTitle.includes('Desizing')) catTag = 'DESIZING ENZYME';
    else if (catTitle.includes('Non-Ionic Softeners')) catTag = 'NON-IONIC SOFTENER';
    else if (catTitle.includes('Silicone Softeners')) catTag = 'SILICONE SOFTENER';
    else if (catTitle.includes('Cationic Softeners')) catTag = 'CATIONIC SOFTENER';
    else if (catTitle.includes('Wetting')) catTag = 'WETTING & SCOURING';
    else if (catTitle.includes('Polyester')) catTag = 'POLYESTER PROCESSING';
    else if (catTitle.includes('Garment')) catTag = 'GARMENT PROCESSING';
    else if (catTitle.includes('Mercerising')) catTag = 'MERCERISING AGENT';
    else if (catTitle.includes('After')) catTag = 'AFTER TREATMENT';
    else if (catTitle.includes('Stabilizers')) catTag = 'STABILIZER & SEQUESTERING';
    else if (catTitle.includes('Defoamers')) catTag = 'DEFOAMER & LUBRICANT';

    let formTag = 'Specialty Liquid';
    if (descLower.includes('powder')) formTag = 'Powder Form';
    else if (descLower.includes('flakes')) formTag = 'Flakes Form';
    else if (descLower.includes('liquid') || descLower.includes('emulsion')) formTag = 'Liquid Form';

    const safeName = escapeXml(name);
    const safePrefix = escapeXml(prefix.toUpperCase());
    const safeCatTag = escapeXml(catTag);

    return `<svg width="800" height="520" viewBox="0 0 800 520" xmlns="http://www.w3.org/2000/svg" font-family="'Segoe UI', Roboto, Helvetica, sans-serif">
        <defs>
            <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f0fdfa"/>
                <stop offset="50%" stop-color="#e6f4f4"/>
                <stop offset="100%" stop-color="#ccedd8"/>
            </linearGradient>
            <linearGradient id="cardGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="100%" stop-color="#f8fafc"/>
            </linearGradient>
            <linearGradient id="headerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#006666"/>
                <stop offset="100%" stop-color="#008080"/>
            </linearGradient>
            <linearGradient id="bottleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e0f2fe"/>
                <stop offset="100%" stop-color="#bae6fd"/>
            </linearGradient>
            <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
                <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f172a" flood-opacity="0.08"/>
            </filter>
        </defs>

        <!-- Outer Background -->
        <rect width="800" height="520" fill="url(#bgGrad)"/>
        
        <!-- Main Card Container -->
        <rect x="40" y="30" width="720" height="460" rx="20" fill="url(#cardGrad)" filter="url(#shadow)" stroke="#cbd5e1" stroke-width="1.5"/>

        <!-- Header Category Bar -->
        <rect x="60" y="50" width="680" height="48" rx="10" fill="url(#headerGrad)"/>
        <text x="80" y="81" fill="#ffffff" font-size="16" font-weight="700" letter-spacing="1.5">${safeCatTag}</text>
        <rect x="580" y="60" width="140" height="28" rx="14" fill="#ffffff" fill-opacity="0.2"/>
        <text x="650" y="79" fill="#ffffff" font-size="13" font-weight="600" text-anchor="middle">CHROMOLIN</text>

        <!-- Left Bottle Graphic -->
        <g transform="translate(100, 130)">
            <!-- Cap -->
            <rect x="65" y="10" width="70" height="24" rx="4" fill="#004d4d"/>
            <rect x="75" y="34" width="50" height="12" fill="#006666"/>
            <!-- Neck -->
            <path d="M 75 46 L 50 80 L 150 80 L 125 46 Z" fill="url(#bottleGrad)"/>
            <!-- Body -->
            <rect x="40" y="80" width="120" height="210" rx="16" fill="url(#bottleGrad)" stroke="#028090" stroke-width="2"/>
            <!-- Liquid Fill Level -->
            <path d="M 42 150 Q 100 160 158 150 L 158 274 Q 100 285 42 274 Z" fill="#008080" fill-opacity="0.15"/>
            <!-- Flask Icon on Bottle -->
            <circle cx="100" cy="120" r="18" fill="#008080"/>
            <text x="100" y="125" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">C</text>
        </g>

        <!-- Right Label Details -->
        <!-- Brand Prefix -->
        <text x="310" y="170" fill="#004d4d" font-size="28" font-weight="800" letter-spacing="0.5">${safePrefix}</text>
        
        <!-- Product Full Name -->
        <text x="310" y="225" fill="#008080" font-size="${safeName.length > 16 ? '34' : '44'}" font-weight="900">${safeName}</text>
        
        <line x1="310" y1="245" x2="700" y2="245" stroke="#008080" stroke-width="3" stroke-linecap="round"/>

        <!-- Tags / Badges -->
        <rect x="310" y="270" width="140" height="32" rx="16" fill="#008080"/>
        <text x="380" y="291" fill="#ffffff" font-size="13" font-weight="600" text-anchor="middle">Specialty Chemical</text>

        <rect x="460" y="270" width="130" height="32" rx="16" fill="#e6f4f4" stroke="#008080" stroke-width="1"/>
        <text x="525" y="291" fill="#005959" font-size="13" font-weight="600" text-anchor="middle">${escapeXml(formTag)}</text>

        <!-- Short Description snippet -->
        <text x="310" y="340" fill="#475569" font-size="15">
            ${escapeXml(description && description.length > 65 ? description.substring(0, 62) + '...' : description)}
        </text>

        <!-- Quality Certifications Footer Badges -->
        <g transform="translate(310, 395)">
            <!-- Badge 1 -->
            <rect x="0" y="0" width="110" height="26" rx="13" fill="#f1f5f9" stroke="#cbd5e1"/>
            <circle cx="14" cy="13" r="6" fill="#10b981"/>
            <text x="60" y="17" fill="#334155" font-size="11" font-weight="600" text-anchor="middle">GOTS Certified</text>

            <!-- Badge 2 -->
            <rect x="120" y="0" width="110" height="26" rx="13" fill="#f1f5f9" stroke="#cbd5e1"/>
            <circle cx="134" cy="13" r="6" fill="#3b82f6"/>
            <text x="180" y="17" fill="#334155" font-size="11" font-weight="600" text-anchor="middle">ISO 9001:2008</text>

            <!-- Badge 3 -->
            <rect x="240" y="0" width="110" height="26" rx="13" fill="#f1f5f9" stroke="#cbd5e1"/>
            <circle cx="254" cy="13" r="6" fill="#14b8a6"/>
            <text x="300" y="17" fill="#334155" font-size="11" font-weight="600" text-anchor="middle">Zero Banned</text>
        </g>
    </svg>`;
}

const targetDir = 'public/assets/images/products';
if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

let generatedCount = 0;
for (const catKey in productData) {
    const category = productData[catKey];
    for (const product of category.products) {
        const svg = generateSvg(product, category.title);
        const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 800 } });
        const pngBuffer = resvg.render().asPng();
        
        const fileName = path.basename(product.image);
        const targetPath = path.join(targetDir, fileName);
        
        fs.writeFileSync(targetPath, pngBuffer);
        generatedCount++;
        console.log(`[${generatedCount}] Generated: ${fileName} for "${product.name}"`);
    }
}

console.log(`Successfully generated ${generatedCount} custom product images!`);
