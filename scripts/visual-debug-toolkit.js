/**
 * visual-debug-toolkit.js
 * 
 * Copy and paste this entire script into the browser console to activate the tools.
 * 
 * usage:
 *   audit.toggleGrid()   - Toggles a red layout grid overlay.
 *   audit.inspectMode()  - Toggles CSS X-Ray mode (hover/click elements).
 *   audit.checkHealth()  - Runs a quick scan for broken links/images/alt text.
 */

window.audit = (function() {
  let gridActive = false;
  let inspectActive = false;
  let hoverOverlay = null;

  // --- TOOL 1: LAYOUT GRID CLAY ---
  function toggleGrid() {
    gridActive = !gridActive;
    if (gridActive) {
      const style = document.createElement('style');
      style.id = 'audit-grid-style';
      style.innerHTML = `
        * { outline: 1px solid rgba(255, 0, 0, 0.1) !important; }
        div { outline: 1px solid rgba(0, 0, 255, 0.1) !important; }
      `;
      document.head.appendChild(style);
      console.log('📐 Layout Grid: ON');
    } else {
      const style = document.getElementById('audit-grid-style');
      if (style) style.remove();
      console.log('📐 Layout Grid: OFF');
    }
  }

  // --- TOOL 2: CSS X-RAY INSPECTOR ---
  function createHoverOverlay() {
    const div = document.createElement('div');
    div.style.position = 'fixed';
    div.style.padding = '8px';
    div.style.background = 'rgba(0,0,0,0.85)';
    div.style.color = '#00ff00';
    div.style.fontFamily = 'monospace';
    div.style.fontSize = '12px';
    div.style.zIndex = '999999';
    div.style.pointerEvents = 'none';
    div.style.borderRadius = '4px';
    div.style.display = 'none';
    document.body.appendChild(div);
    return div;
  }

  function handleMouseMove(e) {
    if (!inspectActive) return;
    const el = document.elementFromPoint(e.clientX, e.clientY);
    if (!el || el === document.body || el === document.documentElement) return;
    
    const computed = window.getComputedStyle(el);
    const info = `
      Tag: ${el.tagName.toLowerCase()}
      Class: ${el.className.split(' ').slice(0, 3).join('.')}...
      Font: ${computed.fontFamily.split(',')[0]} (${computed.fontSize} / ${computed.fontWeight})
      Color: ${computed.color}
      Size: ${Math.round(el.getBoundingClientRect().width)}px x ${Math.round(el.getBoundingClientRect().height)}px
    `;
    
    hoverOverlay.innerText = info;
    hoverOverlay.style.display = 'block';
    hoverOverlay.style.top = (e.clientY + 15) + 'px';
    hoverOverlay.style.left = (e.clientX + 15) + 'px';
    
    el.style.outline = '2px solid #00ff00';
    setTimeout(() => el.style.outline = '', 1000);
  }

  function toggleInspect() {
    inspectActive = !inspectActive;
    if (inspectActive) {
      hoverOverlay = createHoverOverlay();
      document.addEventListener('mousemove', handleMouseMove);
      console.log('🔍 CSS X-Ray: ON (Move mouse over elements)');
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      if (hoverOverlay) hoverOverlay.remove();
      console.log('🔍 CSS X-Ray: OFF');
    }
  }

  // --- TOOL 3: HEALTH CHECK ---
  function checkHealth() {
    const images = Array.from(document.querySelectorAll('img'));
    const poorImages = images.filter(img => !img.alt || img.alt.trim() === '');
    
    const links = Array.from(document.querySelectorAll('a'));
    const emptyLinks = links.filter(link => !link.href || link.href === '' || link.href === '#');

    console.group('🏥 Site Health Report');
    console.log(`Checking ${images.length} images and ${links.length} links...`);
    
    if (poorImages.length > 0) {
      console.warn(`⚠️ ${poorImages.length} images missing ALT text:`, poorImages);
    } else {
      console.log('✅ All images have ALT text.');
    }

    if (emptyLinks.length > 0) {
      console.warn(`⚠️ ${emptyLinks.length} empty or '#' links found:`, emptyLinks);
    } else {
      console.log('✅ Link structure looks solid.');
    }
    console.groupEnd();
    
    return {
      missingAlt: poorImages.length,
      brokenLinks: emptyLinks.length
    };
  }

  return {
    toggleGrid,
    toggleInspect,
    checkHealth
  };
})();

console.log('🛠️ Visual Debug Toolkit Loaded. Use `audit.toggleGrid()`, `audit.toggleInspect()`, or `audit.checkHealth()`.');
