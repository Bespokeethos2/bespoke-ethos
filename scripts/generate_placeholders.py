
import os

OUTPUT_DIR = "public/assets/generated"
if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

# Brand colors
NAVY = "#1a1a2e"
TEAL = "#0f3460"
CORAL = "#e94560"
TEXT = "#e0e0e0"

def create_svg(filename, title, subtitle="Bespoke Ethos"):
    svg_content = f'''<svg width="800" height="450" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:{NAVY};stop-opacity:1" />
      <stop offset="100%" style="stop-color:{TEAL};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="450" fill="url(#grad1)" />
  <rect width="800" height="450" rx="0" ry="0" fill="none" stroke="{CORAL}" stroke-width="2" opacity="0.1" />
  
  <!-- Subtle Grid -->
  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="{TEAL}" stroke-width="0.5" opacity="0.3"/>
  </pattern>
  <rect width="100%" height="100%" fill="url(#grid)" />

  <!-- Text -->
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="32" fill="{TEXT}" font-weight="bold">{title}</text>
  <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="16" fill="{CORAL}">{subtitle}</text>
</svg>'''
    
    with open(os.path.join(OUTPUT_DIR, filename), "w") as f:
        f.write(svg_content)
    print(f"Generated {filename}")

# List of assets to mock based on swarm plan
assets = [
    "hero_splash_cleveland_ai.svg",
    "service_cadence.svg",
    "service_consensus.svg",
    "service_skyway.svg",
    "service_consult.svg",
    # Blog 1
    "blog-rust-belt-thumb.svg", "blog-rust-belt-header.svg", 
    # Blog 2
    "blog-admin-costs-thumb.svg", "blog-admin-costs-header.svg",
    # Blog 3
    "blog-ai-sales-thumb.svg", "blog-ai-sales-header.svg",
    # Blog 4
    "blog-nglcc-thumb.svg", "blog-nglcc-header.svg",
    # Blog 5
    "blog-no-code-thumb.svg", "blog-no-code-header.svg",
    # Blog 6
    "blog-logistics-thumb.svg", "blog-logistics-header.svg",
    # Blog 7
    "blog-gen-vs-pred-thumb.svg", "blog-gen-vs-pred-header.svg",
    # Blog 8
    "blog-future-2030-thumb.svg", "blog-future-2030-header.svg"
]

for asset in assets:
    create_svg(asset, asset.replace("-", " ").replace(".svg", "").title())
