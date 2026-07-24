/**
 * Photorealistic Macro Dental Clinical Image Generator
 * Produces crisp SVG Data URIs representing macro dental photography views
 * where Before & After depict the EXACT SAME patient's mouth with specific dental issues & completed treatments.
 */

interface DentalImageOptions {
  type: 'makeover' | 'implant' | 'veneer' | 'whitening' | 'ortho' | 'fullmouth';
  state: 'before' | 'after';
  patientId?: string;
}

export function generateDentalMacroImage({ type, state }: DentalImageOptions): string {
  // Common geometry parameters for identical mouth framing
  const width = 800;
  const height = 600;

  // Lip & Skin Colors (identical across before & after)
  const skinTone = "#f5d0c0";
  const lipColor = "#d67d8a";
  const innerLipColor = "#ba5b6a";
  const gumColor = "#e8808d";
  const gumShadow = "#c8606d";

  // Enamel Colors
  const afterToothColor = "url(#ceramicEnamel)"; // Radiant B1 White
  let beforeToothColor = "#ded0a6"; // Default stained/yellowish
  
  if (type === 'whitening') {
    beforeToothColor = "url(#heavyStainEnamel)";
  } else if (type === 'makeover') {
    beforeToothColor = "url(#chippedFluorosisEnamel)";
  } else if (type === 'veneer') {
    beforeToothColor = "#e6d5b0";
  } else if (type === 'ortho') {
    beforeToothColor = "#ebe0c5";
  } else if (type === 'fullmouth') {
    beforeToothColor = "#d4c090";
  }

  // Build SVG content string
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
    <defs>
      <!-- Ceramic Enamel Gradient (AFTER) -->
      <linearGradient id="ceramicEnamel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff"/>
        <stop offset="70%" stop-color="#f0f9ff"/>
        <stop offset="95%" stop-color="#e0f2fe"/>
        <stop offset="100%" stop-color="#bae6fd" stop-opacity="0.8"/>
      </linearGradient>

      <!-- Stained Enamel Gradient (BEFORE) -->
      <linearGradient id="heavyStainEnamel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#e2cb92"/>
        <stop offset="50%" stop-color="#cbb274"/>
        <stop offset="90%" stop-color="#b89c56"/>
        <stop offset="100%" stop-color="#9d813c"/>
      </linearGradient>

      <!-- Chipped / Fluorosis Enamel (BEFORE MAKEOVER) -->
      <linearGradient id="chippedFluorosisEnamel" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#f1e3c3"/>
        <stop offset="40%" stop-color="#dfcb9d"/>
        <stop offset="85%" stop-color="#cbaf78"/>
        <stop offset="100%" stop-color="#ba9c60"/>
      </linearGradient>

      <!-- Tooth Specular Highlight -->
      <linearGradient id="specular" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.6"/>
        <stop offset="50%" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>

      <!-- Soft Shadow Drop -->
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.3"/>
      </filter>
    </defs>

    <!-- Background: Dark Oral Cavity & Clinical Lighting -->
    <rect width="${width}" height="${height}" fill="#1a1112"/>
    <radialGradient id="lightSpot" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#2a1e20"/>
      <stop offset="100%" stop-color="#0f090a"/>
    </radialGradient>
    <rect width="${width}" height="${height}" fill="url(#lightSpot)"/>

    <!-- Gums (Gingival Arch) -->
    <path d="M 120 220 Q 200 180 280 210 Q 340 175 400 205 Q 460 175 520 210 Q 600 180 680 220 L 680 120 L 120 120 Z" fill="${gumColor}"/>
    <path d="M 120 220 Q 200 185 280 212 Q 340 180 400 208 Q 460 180 520 212 Q 600 185 680 220" fill="none" stroke="${gumShadow}" stroke-width="6"/>

    <!-- TEETH ARCH RENDERING -->
    <g id="teethArch" filter="url(#shadow)">
  `;

  const isAfter = state === 'after';

  if (type === 'implant') {
    if (!isAfter) {
      // BEFORE IMPLANT: Missing Tooth #8 (Right Central Incisor)
      svg += `
        <!-- Tooth #7 (Lateral Incisor) -->
        <rect x="230" y="210" width="65" height="110" rx="14" fill="${beforeToothColor}"/>
        <!-- Tooth #8 MISSING GAP - Socket Site -->
        <path d="M 305 210 Q 345 235 385 210 L 385 190 Q 345 170 305 190 Z" fill="${gumColor}"/>
        <ellipse cx="345" cy="225" rx="35" ry="15" fill="#3d181c"/>
        <text x="345" y="270" text-anchor="middle" fill="#ffb3ba" font-family="sans-serif" font-size="12" font-weight="bold">MISSING TOOTH</text>
        <!-- Tooth #9 (Left Central Incisor) -->
        <rect x="395" y="200" width="85" height="130" rx="16" fill="${beforeToothColor}"/>
        <!-- Tooth #10 (Left Lateral Incisor) -->
        <rect x="490" y="210" width="65" height="110" rx="14" fill="${beforeToothColor}"/>
      `;
    } else {
      // AFTER IMPLANT: Restored Implant Crown on #8 with zirconia precision
      svg += `
        <!-- Tooth #7 -->
        <rect x="230" y="210" width="65" height="110" rx="14" fill="${afterToothColor}"/>
        <!-- Tooth #8 RESTORED IMPLANT CROWN -->
        <rect x="305" y="200" width="85" height="130" rx="16" fill="${afterToothColor}" stroke="#bae6fd" stroke-width="1.5"/>
        <path d="M 310 205 L 320 325" stroke="url(#specular)" stroke-width="8"/>
        <!-- Tooth #9 -->
        <rect x="395" y="200" width="85" height="130" rx="16" fill="${afterToothColor}"/>
        <!-- Tooth #10 -->
        <rect x="490" y="210" width="65" height="110" rx="14" fill="${afterToothColor}"/>
      `;
    }
  } else if (type === 'veneer' || type === 'makeover') {
    if (!isAfter) {
      // BEFORE VENEERS: Gap (Diastema), Chipped Incisal Edge, Yellowing
      svg += `
        <!-- Tooth #7 (Lateral Incisor) -->
        <rect x="220" y="215" width="60" height="105" rx="10" fill="${beforeToothColor}"/>
        <!-- Tooth #8 (Right Central - Chipped) -->
        <path d="M 290 205 L 365 205 Q 375 270 365 320 L 300 320 Q 290 270 290 205 Z" fill="${beforeToothColor}"/>
        <!-- Tooth #9 (Left Central - Gap & Uneven) -->
        <path d="M 385 205 L 460 205 Q 470 270 450 310 L 390 325 Q 380 270 385 205 Z" fill="${beforeToothColor}"/>
        <!-- Gap highlight -->
        <rect x="366" y="205" width="18" height="120" fill="#11090a"/>
        <text x="375" y="270" text-anchor="middle" fill="#f87171" font-family="sans-serif" font-size="11" font-weight="bold">GAP</text>
        <!-- Tooth #10 -->
        <rect x="470" y="215" width="60" height="105" rx="10" fill="${beforeToothColor}"/>
      `;
    } else {
      // AFTER VENEERS: 10 Feldspathic Porcelain Veneers, Closed Gap, Perfect Symmetry
      svg += `
        <!-- Tooth #7 -->
        <rect x="220" y="210" width="65" height="115" rx="14" fill="${afterToothColor}"/>
        <!-- Tooth #8 (Perfect Veneer) -->
        <rect x="290" y="200" width="88" height="135" rx="16" fill="${afterToothColor}" stroke="#e0f2fe" stroke-width="1.5"/>
        <path d="M 295 205 L 305 330" stroke="url(#specular)" stroke-width="10"/>
        <!-- Tooth #9 (Perfect Veneer) -->
        <rect x="382" y="200" width="88" height="135" rx="16" fill="${afterToothColor}" stroke="#e0f2fe" stroke-width="1.5"/>
        <path d="M 387 205 L 397 330" stroke="url(#specular)" stroke-width="10"/>
        <!-- Tooth #10 -->
        <rect x="474" y="210" width="65" height="115" rx="14" fill="${afterToothColor}"/>
      `;
    }
  } else if (type === 'ortho') {
    if (!isAfter) {
      // BEFORE ORTHO: Crowded, Overlapping & Rotated Teeth
      svg += `
        <!-- Tooth #7 -->
        <rect x="225" y="220" width="60" height="100" rx="10" fill="${beforeToothColor}" transform="rotate(-8 255 270)"/>
        <!-- Tooth #8 (Overlapping Central) -->
        <rect x="285" y="200" width="85" height="130" rx="14" fill="${beforeToothColor}" transform="rotate(6 327 265)"/>
        <!-- Tooth #9 (Rotated Central) -->
        <rect x="370" y="205" width="80" height="125" rx="14" fill="${beforeToothColor}" transform="rotate(-12 410 267)"/>
        <!-- Tooth #10 -->
        <rect x="460" y="218" width="60" height="105" rx="10" fill="${beforeToothColor}"/>
        <text x="400" y="360" text-anchor="middle" fill="#fbbf24" font-family="sans-serif" font-size="12" font-weight="bold">6mm CROWDING & CROSSBITE</text>
      `;
    } else {
      // AFTER ORTHO: Straight, Broad Aligned Arch
      svg += `
        <!-- Tooth #7 -->
        <rect x="220" y="210" width="65" height="115" rx="14" fill="${afterToothColor}"/>
        <!-- Tooth #8 -->
        <rect x="290" y="200" width="86" height="132" rx="16" fill="${afterToothColor}"/>
        <path d="M 295 205 L 305 328" stroke="url(#specular)" stroke-width="8"/>
        <!-- Tooth #9 -->
        <rect x="380" y="200" width="86" height="132" rx="16" fill="${afterToothColor}"/>
        <path d="M 385 205 L 395 328" stroke="url(#specular)" stroke-width="8"/>
        <!-- Tooth #10 -->
        <rect x="470" y="210" width="65" height="115" rx="14" fill="${afterToothColor}"/>
      `;
    }
  } else if (type === 'whitening') {
    if (!isAfter) {
      // BEFORE WHITENING: Stained Dark Yellow / Coffee Enamel
      svg += `
        <rect x="220" y="210" width="65" height="115" rx="14" fill="${beforeToothColor}"/>
        <rect x="290" y="200" width="86" height="132" rx="16" fill="${beforeToothColor}"/>
        <rect x="380" y="200" width="86" height="132" rx="16" fill="${beforeToothColor}"/>
        <rect x="470" y="210" width="65" height="115" rx="14" fill="${beforeToothColor}"/>
        <text x="400" y="360" text-anchor="middle" fill="#d97706" font-family="sans-serif" font-size="12" font-weight="bold">HEAVY ENAMEL STAINS (SHADE A3.5)</text>
      `;
    } else {
      // AFTER WHITENING: Shade B1 Hollywood White
      svg += `
        <rect x="220" y="210" width="65" height="115" rx="14" fill="${afterToothColor}"/>
        <rect x="290" y="200" width="86" height="132" rx="16" fill="${afterToothColor}"/>
        <path d="M 295 205 L 305 328" stroke="url(#specular)" stroke-width="10"/>
        <rect x="380" y="200" width="86" height="132" rx="16" fill="${afterToothColor}"/>
        <path d="M 385 205 L 395 328" stroke="url(#specular)" stroke-width="10"/>
        <rect x="470" y="210" width="65" height="115" rx="14" fill="${afterToothColor}"/>
        <!-- Sparkle Effect for Whitening -->
        <polygon points="330,220 334,230 344,234 334,238 330,248 326,238 316,234 326,230" fill="#38bdf8"/>
        <polygon points="420,240 423,247 430,250 423,253 420,260 417,253 410,250 417,247" fill="#38bdf8"/>
      `;
    }
  } else if (type === 'fullmouth') {
    if (!isAfter) {
      // BEFORE FULLMOUTH: Worn Down Flat Bruxism Dentition
      svg += `
        <rect x="220" y="235" width="65" height="75" rx="8" fill="${beforeToothColor}"/>
        <rect x="290" y="230" width="86" height="85" rx="8" fill="${beforeToothColor}"/>
        <rect x="380" y="230" width="86" height="85" rx="8" fill="${beforeToothColor}"/>
        <rect x="470" y="235" width="65" height="75" rx="8" fill="${beforeToothColor}"/>
        <!-- Exposed Dentin Line -->
        <line x1="220" y1="310" x2="535" y2="310" stroke="#92400e" stroke-width="4"/>
        <text x="400" y="360" text-anchor="middle" fill="#ef4444" font-family="sans-serif" font-size="12" font-weight="bold">SEVERE BRUXISM WEAR (-4.5mm VDO)</text>
      `;
    } else {
      // AFTER FULLMOUTH: Reconstructed Full Vertical Dimension Zirconia Crowns
      svg += `
        <rect x="220" y="205" width="65" height="120" rx="14" fill="${afterToothColor}"/>
        <rect x="290" y="195" width="86" height="140" rx="16" fill="${afterToothColor}"/>
        <path d="M 295 200 L 305 330" stroke="url(#specular)" stroke-width="10"/>
        <rect x="380" y="195" width="86" height="140" rx="16" fill="${afterToothColor}"/>
        <path d="M 385 200 L 395 330" stroke="url(#specular)" stroke-width="10"/>
        <rect x="470" y="205" width="65" height="120" rx="14" fill="${afterToothColor}"/>
      `;
    }
  }

  svg += `
    </g>

    <!-- Lower Lip framing the bottom smile -->
    <path d="M 100 370 Q 400 480 700 370 Q 400 520 100 370 Z" fill="${lipColor}"/>
    <path d="M 120 370 Q 400 460 680 370" fill="none" stroke="${innerLipColor}" stroke-width="4"/>

    <!-- Upper Lip framing the top smile -->
    <path d="M 100 190 Q 250 140 400 170 Q 550 140 700 190 Q 400 130 100 190 Z" fill="${lipColor}"/>

    <!-- Surrounding Skin Frame -->
    <path d="M 0 0 L ${width} 0 L ${width} ${height} L 0 ${height} Z M 100 190 Q 400 130 700 190 Q 400 520 100 190 Z" fill="${skinTone}" fill-rule="evenodd"/>

    <!-- Clinical Badge Overlay -->
    <rect x="20" y="20" width="180" height="32" rx="8" fill="#0f172a" fill-opacity="0.85" stroke="#334155"/>
    <text x="30" y="41" fill="#38bdf8" font-family="sans-serif" font-size="11" font-weight="bold">DENTAL STUDIO 3D</text>
    <text x="145" y="41" fill="${isAfter ? '#34d399' : '#f87171'}" font-family="sans-serif" font-size="10" font-weight="900">${isAfter ? 'POST-OP' : 'PRE-OP'}</text>
  </svg>`;

  // Return base64 encoded data URI
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
