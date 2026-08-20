// Animated SVG icon set. Strokes animate on reveal, motion runs on hover.
// Rendered via dangerouslySetInnerHTML, so these are raw HTML strings:
// they use `class`, NOT `className`. Changing that breaks all icon rendering.
const ICONS={
"air-conditioning-ventilation":`<svg viewBox="0 0 64 64" fill="none" class="ic">
 <rect x="10" y="12" width="44" height="20" rx="4" class="s"/>
 <path d="M16 22h10M30 22h6" class="s d1"/>
 <circle cx="46" cy="22" r="3" class="s pulse"/>
 <path d="M16 42c4-5 8 5 12 0s8 5 12 0 8 5 12 0" class="s flow"/>
 <path d="M16 52c4-5 8 5 12 0s8 5 12 0 8 5 12 0" class="s flow f2"/>
</svg>`,
"electromechanical-services":`<svg viewBox="0 0 64 64" fill="none" class="ic">
 <g class="spin" style="transform-origin:24px 26px">
  <circle cx="24" cy="26" r="9" class="s"/>
  <path d="M24 13v-4M24 43v4M37 26h4M7 26h4M33 17l3-3M12 38l3-3M33 35l3 3M12 14l3 3" class="s"/>
 </g>
 <g class="spin rev" style="transform-origin:45px 44px">
  <circle cx="45" cy="44" r="6" class="s"/>
  <path d="M45 35v-3M45 53v3M54 44h3M33 44h3" class="s"/>
 </g>
 <circle cx="24" cy="26" r="3" class="s"/>
</svg>`,
"plumbing-sanitary-works":`<svg viewBox="0 0 64 64" fill="none" class="ic">
 <path d="M12 18h20a6 6 0 0 1 6 6v16" class="s"/>
 <rect x="8" y="13" width="8" height="10" rx="2" class="s"/>
 <path d="M34 40h8" class="s"/>
 <path d="M38 46c0 3-2 5-4 5s-4-2-4-5 4-7 4-7 4 4 4 7z" class="s drop"/>
 <path d="M46 22c0 3-2 5-4 5s-4-2-4-5 4-7 4-7 4 4 4 7z" class="s drop d2"/>
</svg>`,
"electrical-services":`<svg viewBox="0 0 64 64" fill="none" class="ic">
 <path d="M34 8L16 34h12l-4 22 20-28H32l2-20z" class="s bolt"/>
 <path d="M8 20h6M8 44h6M50 20h6M50 44h6" class="s d1"/>
</svg>`,
"ceiling-partition-works":`<svg viewBox="0 0 64 64" fill="none" class="ic">
 <rect x="8" y="10" width="48" height="16" rx="2" class="s"/>
 <path d="M24 10v16M40 10v16" class="s"/>
 <path d="M8 18h48" class="s"/>
 <path d="M32 30v24" class="s grow"/>
 <rect x="10" y="34" width="18" height="20" rx="2" class="s d1"/>
 <rect x="36" y="34" width="18" height="20" rx="2" class="s d2"/>
</svg>`,
"carpentry-flooring":`<svg viewBox="0 0 64 64" fill="none" class="ic">
 <rect x="8" y="14" width="48" height="11" rx="2" class="s"/>
 <rect x="8" y="27" width="48" height="11" rx="2" class="s d1"/>
 <rect x="8" y="40" width="48" height="11" rx="2" class="s d2"/>
 <path d="M18 17c4 2 4 5 0 6M40 30c4 2 4 5 0 6M26 43c4 2 4 5 0 6" class="s grain"/>
</svg>`,
"floor-wall-tiling":`<svg viewBox="0 0 64 64" fill="none" class="ic">
 <rect x="9" y="9" width="14" height="14" rx="2" class="s tile t1"/>
 <rect x="25" y="9" width="14" height="14" rx="2" class="s tile t2"/>
 <rect x="41" y="9" width="14" height="14" rx="2" class="s tile t3"/>
 <rect x="9" y="25" width="14" height="14" rx="2" class="s tile t4"/>
 <rect x="25" y="25" width="14" height="14" rx="2" class="s tile t5"/>
 <rect x="41" y="25" width="14" height="14" rx="2" class="s tile t6"/>
 <rect x="9" y="41" width="14" height="14" rx="2" class="s tile t7"/>
 <rect x="25" y="41" width="14" height="14" rx="2" class="s tile t8"/>
 <rect x="41" y="41" width="14" height="14" rx="2" class="s tile t9"/>
</svg>`,
"aluminum-glass-works":`<svg viewBox="0 0 64 64" fill="none" class="ic">
 <rect x="9" y="10" width="46" height="44" rx="3" class="s"/>
 <path d="M32 10v44" class="s"/>
 <path d="M9 32h46" class="s d1"/>
 <path d="M14 16l12 12M14 28l6 6" class="s shine"/>
 <path d="M46 40v6" class="s"/>
</svg>`};

const STEP_ICONS=[
`<svg viewBox="0 0 64 64" fill="none" class="ic"><circle cx="28" cy="28" r="16" class="s"/><path d="M40 40l12 12" class="s"/><path d="M22 28h12M28 22v12" class="s d1"/></svg>`,
`<svg viewBox="0 0 64 64" fill="none" class="ic"><rect x="14" y="8" width="36" height="48" rx="3" class="s"/><path d="M22 22h20M22 30h20M22 38h12" class="s d1"/><path d="M38 46l4 4 8-9" class="s check"/></svg>`,
`<svg viewBox="0 0 64 64" fill="none" class="ic"><path d="M40 10a10 10 0 0 0-9 14L14 41a5 5 0 0 0 7 7l17-17a10 10 0 0 0 12-13l-7 7-6-6 7-7a10 10 0 0 0-4-2z" class="s"/><path d="M18 44h.01" class="s"/><path d="M8 56h48" class="s d2"/></svg>`,
`<svg viewBox="0 0 64 64" fill="none" class="ic"><path d="M32 8l20 8v14c0 13-8 22-20 26-12-4-20-13-20-26V16l20-8z" class="s"/><path d="M23 32l6 6 13-14" class="s check"/></svg>`];

const SECTOR_ICONS=[
`<svg viewBox="0 0 64 64" fill="none" class="ic"><path d="M10 30L32 12l22 18" class="s"/><path d="M16 30v22h32V30" class="s"/><rect x="27" y="38" width="10" height="14" class="s d1"/></svg>`,
`<svg viewBox="0 0 64 64" fill="none" class="ic"><rect x="10" y="14" width="20" height="38" class="s"/><rect x="34" y="26" width="20" height="26" class="s d1"/><path d="M16 22h8M16 30h8M16 38h8M40 34h8M40 42h8" class="s d2"/></svg>`,
`<svg viewBox="0 0 64 64" fill="none" class="ic"><rect x="14" y="8" width="36" height="48" rx="2" class="s"/><path d="M22 18h8M34 18h8M22 28h8M34 28h8M22 38h8M34 38h8" class="s d1"/><path d="M28 56v-8h8v8" class="s"/></svg>`,
`<svg viewBox="0 0 64 64" fill="none" class="ic"><path d="M18 10v16a6 6 0 0 0 12 0V10" class="s"/><path d="M24 10v42" class="s"/><path d="M44 10c-4 6-4 14 0 18v24" class="s d1"/></svg>`];

export { ICONS, STEP_ICONS, SECTOR_ICONS }

export const BLUEPRINT = `<svg viewBox="0 0 400 240" class="blueprint" fill="none">
 <rect class="f" x="40" y="60" width="150" height="140"/>
 <rect class="f" x="210" y="100" width="150" height="100"/>
 <path class="s" d="M40 200h320"/>
 <path class="s" d="M40 60h150v140H40z"/>
 <path class="s" d="M210 100h150v100H210z"/>
 <path class="s" d="M40 60l75-40 75 40"/>
 <path class="s" d="M65 90h30v30H65zM135 90h30v30h-30zM65 145h30v55H65z"/>
 <path class="s" d="M235 125h30v25h-30zM305 125h30v25h-30zM235 170h30v30h-30z"/>
 <path class="s" d="M115 20v-12M107 14l8-8 8 8"/>
 <path class="s" d="M20 200V60M16 64l4-6 4 6M16 196l4 6 4-6"/>
 <text class="lbl" x="8" y="130" transform="rotate(-90 8 130)">ELEVATION</text>
 <text class="lbl" x="40" y="218">RESIDENTIAL</text>
 <text class="lbl" x="210" y="218">COMMERCIAL</text>
 <circle class="s" cx="285" cy="80" r="12"/>
 <path class="s" d="M285 68v-8M285 100v-8M297 80h8M265 80h8"/>
</svg>`
