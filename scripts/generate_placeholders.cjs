const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.resolve('public/assets/generated');
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Brand colors
const NAVY = "#1a1a2e";
const TEAL = "#0f3460";
const CORAL = "#e94560";
const TEXT = "#e0e0e0";

function createSvg(filename, title) {
    const subtitle = "Bespoke Ethos";
    const svgContent = `<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${NAVY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${TEAL};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad1)" />
  <rect width="800" height="450" rx="0" ry="0" fill="none" stroke="${CORAL}" stroke-width="2" opacity="0.1" />
  
  <!-- Subtle Grid -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${TEAL}" stroke-width="0.5" opacity="0.3"/>
  </pattern>
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- Text -->
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" fill="${TEXT}" font-weight="bold">${title}</text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="${CORAL}">${subtitle}</text>
</svg>`;

    fs.writeFileSync(path.join(OUTPUT_DIR, filename), svgContent);
    console.log(`Generated ${filename}`);
}

const assets = [
    "hero_splash_cleveland_ai.svg",
    "service_cadence.svg",
    "service_consensus.svg",
    "service_skyway.svg",
    "service_consult.svg",
    "blog-rust-belt-thumb.svg", "blog-rust-belt-header.svg", 
    "blog-admin-costs-thumb.svg", "blog-admin-costs-header.svg",
    "blog-ai-sales-thumb.svg", "blog-ai-sales-header.svg",
    "blog-nglcc-thumb.svg", "blog-nglcc-header.svg",
    "blog-no-code-thumb.svg", "blog-no-code-header.svg",
    "blog-logistics-thumb.svg", "blog-logistics-header.svg",
    "blog-gen-vs-pred-thumb.svg", "blog-gen-vs-pred-header.svg",
    "blog-future-2030-thumb.svg", "blog-future-2030-header.svg"
];

assets.forEach(asset => {
    createSvg(asset, asset.replace(/-/g, " ").replace(".svg", "").toUpperCase());
});
