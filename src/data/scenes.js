/* ================= WORK SCENES =================
   Animated line-art scenes of technicians on site.
   TO USE REAL PHOTOS: add the URL to PHOTOS below, keyed by service slug.
   Any slug with a photo renders an <img> instead of the illustration.
   e.g. PHOTOS["electrical-services"]="/img/team-electrical.jpg"
================================================= */
/* Real client project photos, served from /public/img.
   Each slug maps to a real photo; the animated illustration stays as fallback. */
export const PHOTOS={
  "air-conditioning-ventilation": "/img/team-inspection.jpg",
  "electromechanical-services":   "/img/team-electromech.jpg",
  "plumbing-sanitary-works":      "/img/bath-after.jpg",
  "electrical-services":          "/img/team-electromech.jpg",
  "ceiling-partition-works":      "/img/interior-after.jpg",
  "carpentry-flooring":           "/img/interior-after.jpg",
  "floor-wall-tiling":            "/img/bath-after.jpg",
  "aluminum-glass-works":         "/img/villa-after.jpg"
}

export const SCENES={
"air-conditioning-ventilation":{cap:"Air Conditioning System Upgrade",svg:`<svg viewBox="0 0 420 280" class="scn">
 <path class="env" d="M0 250h420"/>
 <rect class="ln" x="250" y="60" width="130" height="46" rx="7"/>
 <path class="ln d1" d="M262 76h34M304 76h16"/>
 <circle class="pulse2" cx="366" cy="76" r="4"/>
 <path class="ln flow2" d="M258 126c9-11 18 11 27 0s18 11 27 0 18 11 27 0 18 11 27 0"/>
 <path class="ln flow2 f2" d="M258 150c9-11 18 11 27 0s18 11 27 0 18 11 27 0 18 11 27 0"/>
 <path class="env" d="M150 250l34-135M225 250l-27-135"/>
 <path class="env" d="M163 200h44M170 172h38M176 146h32"/>
 <g class="worker">
  <circle class="ln" cx="196" cy="122" r="11"/>
  <path class="ln" d="M183 118a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M196 133v34"/>
  <path class="ln" d="M196 167l-11 26M196 167l11 26"/>
  <path class="ln arm" style="transform-origin:196px 142px" d="M196 142l42-30"/>
  <path class="ln" d="M196 142l-16 18"/>
 </g>
 <rect class="ln d2" x="46" y="222" width="52" height="28" rx="4"/>
 <path class="ln d2" d="M62 222v-8h20v8M46 236h52"/>
</svg>`},

"plumbing-sanitary-works":{cap:"Sanitary Line Maintenance",svg:`<svg viewBox="0 0 420 280" class="scn">
 <path class="env" d="M0 250h420"/>
 <path class="ln" d="M40 78h180a26 26 0 0 1 26 26v56"/>
 <rect class="ln" x="24" y="66" width="20" height="24" rx="4"/>
 <path class="ln d1" d="M232 160h48"/>
 <circle class="ln d1" cx="246" cy="104" r="9"/>
 <path class="ln drop2" d="M256 186c0 7-5 12-9 12s-9-5-9-12 9-17 9-17 9 10 9 17z"/>
 <path class="ln drop2 d2" d="M292 138c0 6-4 10-7 10s-7-4-7-10 7-13 7-13 7 7 7 13z"/>
 <g class="worker">
  <circle class="ln" cx="126" cy="150" r="11"/>
  <path class="ln" d="M113 146a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M126 161v26l-14 14"/>
  <path class="ln" d="M112 201h34M126 187h26"/>
  <path class="ln arm" style="transform-origin:126px 170px" d="M126 170l38-8"/>
 </g>
 <path class="ln d2" d="M164 162l16-6 8 12-16 6z"/>
 <rect class="env" x="300" y="196" width="86" height="54" rx="4"/>
 <path class="env" d="M300 214h86M343 196v54"/>
</svg>`},

"electrical-services":{cap:"Electrical Fittings Maintenance",svg:`<svg viewBox="0 0 420 280" class="scn">
 <path class="env" d="M0 250h420"/>
 <rect class="ln" x="242" y="52" width="126" height="112" rx="6"/>
 <path class="ln" d="M242 78h126"/>
 <path class="ln d1" d="M256 96h30M296 96h30M256 118h30M296 118h30M256 140h30M296 140h30"/>
 <path class="ln spark2" d="M318 96l-8 12h10l-8 14"/>
 <circle class="pulse2" cx="356" cy="65" r="4"/>
 <g class="worker">
  <circle class="ln" cx="150" cy="116" r="11"/>
  <path class="ln" d="M137 112a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M150 127v40"/>
  <path class="ln" d="M150 167l-12 28M150 167l12 28"/>
  <path class="ln arm" style="transform-origin:150px 138px" d="M150 138l58-24"/>
  <path class="ln" d="M150 138l-18 22"/>
 </g>
 <path class="ln d2" d="M208 114l16-6 6 10-16 6z"/>
 <path class="env" d="M60 250v-46h40v46"/>
 <path class="env" d="M60 226h40"/>
</svg>`},

"floor-wall-tiling":{cap:"Floor & Wall Tiling Works",svg:`<svg viewBox="0 0 420 280" class="scn">
 <path class="env" d="M0 250h420"/>
 <path class="ln" d="M170 250l38-72h190l-38 72z"/>
 <path class="ln d1" d="M208 178l-38 72M246 178l-38 72M284 178l-38 72M322 178l-38 72M360 178l-38 72"/>
 <path class="ln d1" d="M198 202h180M184 226h180"/>
 <rect class="ln tileIn" x="286" y="140" width="42" height="26" rx="3"/>
 <g class="worker">
  <circle class="ln" cx="106" cy="150" r="11"/>
  <path class="ln" d="M93 146a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M106 161v24l-16 18"/>
  <path class="ln" d="M90 203h32M106 185h30"/>
  <path class="ln arm" style="transform-origin:106px 170px" d="M106 170l44 4"/>
 </g>
 <rect class="ln d2" x="44" y="214" width="56" height="36" rx="4"/>
 <path class="ln d2" d="M44 228h56"/>
</svg>`},

"ceiling-partition-works":{cap:"Ceiling & Partition Works",svg:`<svg viewBox="0 0 420 280" class="scn">
 <path class="env" d="M0 250h420"/>
 <path class="ln" d="M30 44h360"/>
 <path class="ln d1" d="M30 44v30h360V44M110 44v30M190 44v30M270 44v30M350 44v30"/>
 <rect class="ln panelUp" x="196" y="92" width="70" height="24" rx="3"/>
 <path class="env" d="M150 250l30-120M215 250l-24-120"/>
 <path class="env" d="M162 208h42M170 178h34"/>
 <g class="worker">
  <circle class="ln" cx="192" cy="136" r="11"/>
  <path class="ln" d="M179 132a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M192 147v34"/>
  <path class="ln" d="M192 181l-11 26M192 181l11 26"/>
  <path class="ln arm" style="transform-origin:192px 156px" d="M192 156l34-40"/>
 </g>
 <rect class="env" x="310" y="192" width="76" height="58" rx="4"/>
 <path class="env" d="M310 212h76"/>
</svg>`},

"aluminum-glass-works":{cap:"Aluminum & Glass Works",svg:`<svg viewBox="0 0 420 280" class="scn">
 <path class="env" d="M0 250h420"/>
 <rect class="ln" x="140" y="76" width="150" height="112" rx="4"/>
 <path class="ln shine2" d="M156 172l40-84M186 172l30-64"/>
 <g class="worker">
  <circle class="ln" cx="96" cy="120" r="11"/>
  <path class="ln" d="M83 116a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M96 131v38"/>
  <path class="ln" d="M96 169l-12 28M96 169l12 28"/>
  <path class="ln arm" style="transform-origin:96px 142px" d="M96 142l46-16"/>
 </g>
 <g class="worker w2">
  <circle class="ln" cx="332" cy="120" r="11"/>
  <path class="ln" d="M319 116a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M332 131v38"/>
  <path class="ln" d="M332 169l-12 28M332 169l12 28"/>
  <path class="ln arm" style="transform-origin:332px 142px" d="M332 142l-44-16"/>
 </g>
</svg>`},

"carpentry-flooring":{cap:"Wooden Flooring Installation",svg:`<svg viewBox="0 0 420 280" class="scn">
 <path class="env" d="M0 250h420"/>
 <path class="ln" d="M160 250l36-70h196l-36 70z"/>
 <path class="ln d1" d="M178 214h190M196 180h196"/>
 <path class="ln plank" d="M214 180l-36 70"/>
 <path class="ln plank d1" d="M262 180l-36 70"/>
 <path class="ln plank d2" d="M310 180l-36 70"/>
 <g class="worker">
  <circle class="ln" cx="98" cy="152" r="11"/>
  <path class="ln" d="M85 148a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M98 163v24l-16 18"/>
  <path class="ln" d="M82 205h32M98 187h30"/>
  <path class="ln arm" style="transform-origin:98px 172px" d="M98 172l46 6"/>
 </g>
 <rect class="ln d2" x="36" y="220" width="58" height="30" rx="3"/>
</svg>`},

"electromechanical-services":{cap:"Control Panel Installation",svg:`<svg viewBox="0 0 420 280" class="scn">
 <path class="env" d="M0 250h420"/>
 <rect class="ln" x="250" y="140" width="110" height="70" rx="6"/>
 <circle class="ln spin2" style="transform-origin:288px 175px" cx="288" cy="175" r="20"/>
 <path class="ln spin2" style="transform-origin:288px 175px" d="M288 155v40M268 175h40M274 161l28 28M274 189l28-28"/>
 <path class="ln d1" d="M250 168h-36v-52h-60M360 168h30"/>
 <circle class="pulse2" cx="340" cy="156" r="4"/>
 <g class="worker">
  <circle class="ln" cx="140" cy="128" r="11"/>
  <path class="ln" d="M127 124a13 13 0 0 1 26 0z"/>
  <path class="ln" d="M140 139v38"/>
  <path class="ln" d="M140 177l-12 28M140 177l12 28"/>
  <path class="ln arm" style="transform-origin:140px 150px" d="M140 150l46 14"/>
 </g>
 <path class="ln d2" d="M186 158l18 8-4 10-18-8z"/>
</svg>`}};


/* dedicated before / after pair: identical composition, different condition */
export const BA_BEFORE=`<svg viewBox="0 0 420 260" class="scn">
 <path class="env" d="M0 236h420"/>
 <path class="worn" d="M120 236l40-80h200l-40 80z"/>
 <path class="worn" d="M160 156l-40 80M200 156l-40 80M240 156l-40 80M280 156l-40 80M320 156l-40 80"/>
 <path class="worn" d="M150 182h196M134 210h196"/>
 <path class="crack" d="M214 160l-8 22 12 10-10 20"/>
 <path class="crack" d="M286 186l-14 18 10 12"/>
 <ellipse class="stain" cx="196" cy="214" rx="30" ry="11"/>
 <ellipse class="stain" cx="300" cy="176" rx="18" ry="7"/>
 <path class="worn" d="M300 156l-6 12h-16"/>
 <path class="env" d="M120 156h240"/>
 <path class="worn" d="M60 236v-52h44v52M60 208h44"/>
</svg>`;
export const BA_AFTER=`<svg viewBox="0 0 420 260" class="scn">
 <path class="env" d="M0 236h420"/>
 <path class="ln" d="M120 236l40-80h200l-40 80z"/>
 <path class="ln" d="M160 156l-40 80M200 156l-40 80M240 156l-40 80M280 156l-40 80M320 156l-40 80"/>
 <path class="ln" d="M150 182h196M134 210h196"/>
 <path class="sheen" d="M236 158l-34 68M268 158l-34 68"/>
 <path class="ln" d="M120 156h240"/>
 <path class="ln" d="M60 236v-52h44v52M60 208h44"/>
 <circle class="pulse2" cx="352" cy="150" r="4"/>
</svg>`;

export const GALLERY=["air-conditioning-ventilation","electrical-services","plumbing-sanitary-works","floor-wall-tiling","ceiling-partition-works","aluminum-glass-works"];