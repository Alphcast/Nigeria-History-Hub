import React from 'react';

interface NigeriaLogoProps {
  className?: string;
  variant?: 'emblem' | 'full' | 'shield';
  showLabel?: boolean;
}

/**
 * Authentic Nigerian National Coat of Arms & Official Heritage Emblem
 * Features:
 * - Red Eagle: National strength and pride
 * - Green & White Torse: Agricultural richness and peace
 * - Black Shield: Fertile earth of Nigeria
 * - Silver Wavy Pall ("Y"): Confluence of River Niger and River Benue at Lokoja
 * - Two White Horses (Chargers): Dignity
 * - Base Verge with Red Flowers: Costus spectabilis (National flower)
 * - Motto: "Unity and Faith, Peace and Progress"
 */
export const NigeriaCoatOfArms: React.FC<{ className?: string }> = ({ className = 'h-10 w-10' }) => {
  return (
    <svg
      viewBox="0 0 500 450"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Coat of Arms of the Federal Republic of Nigeria"
    >
      <defs>
        <linearGradient id="shieldGrad" x1="175" y1="120" x2="325" y2="310" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="50%" stopColor="#0d0d0d" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <linearGradient id="greenBand" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#007944" />
          <stop offset="50%" stopColor="#008751" />
          <stop offset="100%" stopColor="#006b3c" />
        </linearGradient>
        <linearGradient id="silverRiver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e6f2ed" />
          <stop offset="100%" stopColor="#d1e3da" />
        </linearGradient>
        <linearGradient id="goldScroll" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d99b1a" />
          <stop offset="50%" stopColor="#f3c64c" />
          <stop offset="100%" stopColor="#c58a10" />
        </linearGradient>
        <linearGradient id="eagleRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e52d27" />
          <stop offset="100%" stopColor="#b31217" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* 1. GREEN GRASS VERGE / COMPARTMENT */}
      <ellipse cx="250" cy="385" rx="200" ry="24" fill="url(#greenBand)" opacity="0.95" />
      <path
        d="M60,390 C120,375 380,375 440,390 C400,405 100,405 60,390 Z"
        fill="#005a34"
      />

      {/* Red Costus Spectabilis Flowers */}
      <circle cx="160" cy="386" r="4.5" fill="#e52d27" />
      <circle cx="160" cy="386" r="1.5" fill="#fcd34d" />
      <circle cx="210" cy="389" r="4.5" fill="#e52d27" />
      <circle cx="210" cy="389" r="1.5" fill="#fcd34d" />
      <circle cx="250" cy="390" r="5" fill="#e52d27" />
      <circle cx="250" cy="390" r="1.8" fill="#fcd34d" />
      <circle cx="290" cy="389" r="4.5" fill="#e52d27" />
      <circle cx="290" cy="389" r="1.5" fill="#fcd34d" />
      <circle cx="340" cy="386" r="4.5" fill="#e52d27" />
      <circle cx="340" cy="386" r="1.5" fill="#fcd34d" />

      {/* 2. LEFT WHITE HORSE / CHARGER */}
      <g id="leftHorse" filter="url(#shadow)">
        {/* Rear Legs */}
        <path d="M125,290 L115,385 L125,385 L138,310 Z" fill="#e4e8eb" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M105,320 L95,385 L106,385 L118,335 Z" fill="#d0d7de" stroke="#b2becd" strokeWidth="1.5" />
        {/* Forelegs raised */}
        <path d="M145,210 L110,180 L115,170 L160,195 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M150,225 L120,220 L125,210 L165,215 Z" fill="#e2e8f0" stroke="#b2becd" strokeWidth="1.5" />
        {/* Torso & Flank */}
        <path
          d="M135,190 C120,200 115,240 120,270 C125,300 155,305 175,295 C185,260 180,220 160,200 Z"
          fill="#f8fafc"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        {/* Neck & Head */}
        <path
          d="M145,195 C140,165 125,140 115,125 C108,122 100,126 95,130 C90,135 92,142 98,145 C105,150 112,148 118,155 C122,165 130,190 135,200 Z"
          fill="#f8fafc"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        {/* Mane */}
        <path
          d="M115,125 C125,135 135,155 140,175 C142,170 138,150 130,135 Z"
          fill="#d0d7de"
        />
        {/* Hooves */}
        <rect x="94" y="380" width="12" height="6" rx="2" fill="#475569" />
        <rect x="114" y="380" width="12" height="6" rx="2" fill="#475569" />
      </g>

      {/* 3. RIGHT WHITE HORSE / CHARGER */}
      <g id="rightHorse" filter="url(#shadow)">
        {/* Rear Legs */}
        <path d="M375,290 L385,385 L375,385 L362,310 Z" fill="#e4e8eb" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M395,320 L405,385 L394,385 L382,335 Z" fill="#d0d7de" stroke="#b2becd" strokeWidth="1.5" />
        {/* Forelegs raised */}
        <path d="M355,210 L390,180 L385,170 L340,195 Z" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
        <path d="M350,225 L380,220 L375,210 L335,215 Z" fill="#e2e8f0" stroke="#b2becd" strokeWidth="1.5" />
        {/* Torso & Flank */}
        <path
          d="M365,190 C380,200 385,240 380,270 C375,300 345,305 325,295 C315,260 320,220 340,200 Z"
          fill="#f8fafc"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        {/* Neck & Head */}
        <path
          d="M355,195 C360,165 375,140 385,125 C392,122 400,126 405,130 C410,135 408,142 402,145 C395,150 388,148 382,155 C378,165 370,190 365,200 Z"
          fill="#f8fafc"
          stroke="#cbd5e1"
          strokeWidth="2"
        />
        {/* Mane */}
        <path
          d="M385,125 C375,135 365,155 360,175 C358,170 362,150 370,135 Z"
          fill="#d0d7de"
        />
        {/* Hooves */}
        <rect x="394" y="380" width="12" height="6" rx="2" fill="#475569" />
        <rect x="374" y="380" width="12" height="6" rx="2" fill="#475569" />
      </g>

      {/* 4. CENTRAL BLACK SHIELD */}
      <g id="shield" filter="url(#shadow)">
        <path
          d="M175,120 L325,120 C325,120 330,220 250,315 C170,220 175,120 175,120 Z"
          fill="url(#shieldGrad)"
          stroke="#d4af37"
          strokeWidth="4"
        />

        {/* Silver Wavy Pall ("Y" - Rivers Niger & Benue) */}
        <path
          d="M185,120 L232,185 L232,300 C242,308 258,308 268,300 L268,185 L315,120 L285,120 L250,168 L215,120 Z"
          fill="url(#silverRiver)"
          stroke="#94a3b8"
          strokeWidth="1.5"
        />
      </g>

      {/* 5. GREEN AND WHITE WREATH / TORSE */}
      <g id="torse">
        <rect x="205" y="105" width="15" height="15" fill="#008751" rx="2" />
        <rect x="220" y="105" width="15" height="15" fill="#ffffff" rx="2" />
        <rect x="235" y="105" width="15" height="15" fill="#008751" rx="2" />
        <rect x="250" y="105" width="15" height="15" fill="#ffffff" rx="2" />
        <rect x="265" y="105" width="15" height="15" fill="#008751" rx="2" />
        <rect x="280" y="105" width="15" height="15" fill="#ffffff" rx="2" />
      </g>

      {/* 6. RED EAGLE (STRENGTH) */}
      <g id="eagle" filter="url(#shadow)">
        {/* Wings spread */}
        <path
          d="M250,85 C230,65 195,50 170,55 C185,75 210,90 235,95 Z"
          fill="url(#eagleRed)"
          stroke="#7f1d1d"
          strokeWidth="1.5"
        />
        <path
          d="M250,85 C270,65 305,50 330,55 C315,75 290,90 265,95 Z"
          fill="url(#eagleRed)"
          stroke="#7f1d1d"
          strokeWidth="1.5"
        />
        {/* Tail feathers */}
        <path d="M242,95 L235,115 L265,115 L258,95 Z" fill="#991b1b" />
        {/* Body */}
        <ellipse cx="250" cy="80" rx="14" ry="20" fill="url(#eagleRed)" />
        {/* Head and Beak */}
        <path
          d="M250,62 C245,55 240,48 245,42 C248,38 254,38 257,44 C260,40 268,43 264,48 C258,54 255,62 250,62 Z"
          fill="url(#eagleRed)"
        />
        <polygon points="238,44 246,41 244,47" fill="#f59e0b" />
        <circle cx="248" cy="43" r="1.5" fill="#ffffff" />
      </g>

      {/* 7. MOTTO SCROLL BANNER */}
      <g id="mottoScroll" filter="url(#shadow)">
        {/* Folded Ribbon Ends */}
        <path d="M85,410 L110,395 L110,420 L85,435 L98,422 Z" fill="#b45309" />
        <path d="M415,410 L390,395 L390,420 L415,435 L402,422 Z" fill="#b45309" />
        {/* Main Ribbon */}
        <path
          d="M100,400 Q250,425 400,400 L395,422 Q250,447 105,422 Z"
          fill="url(#goldScroll)"
          stroke="#92400e"
          strokeWidth="1.5"
        />
        {/* Motto Text */}
        <text
          x="250"
          y="419"
          textAnchor="middle"
          fill="#1c1917"
          fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
          fontWeight="800"
          fontSize="11"
          letterSpacing="0.8"
        >
          UNITY AND FAITH, PEACE AND PROGRESS
        </text>
      </g>
    </svg>
  );
};

/**
 * Modern Nigerian Emblem Medallion Badge
 * Optimized for compact topbars, buttons, brand marks, and avatars
 */
export const NigeriaEmblem: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({
  className = '',
  size = 'md',
}) => {
  const sizeMap = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center rounded-xl border border-emerald-500/40 bg-gradient-to-br from-emerald-950/90 via-[#032214] to-[#0d3d2e] shadow-md shadow-emerald-950/40 transition-transform group-hover:scale-105 ${sizeMap[size]} ${className}`}
    >
      {/* Authentic Coat of Arms inside emblem */}
      <NigeriaCoatOfArms className="h-[85%] w-[85%] object-contain drop-shadow" />
      {/* 66 Jubilee gold micro badge */}
      <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500/20 border border-amber-400/60 text-[9px] font-extrabold text-amber-300 font-mono shadow-sm">
        66
      </span>
    </div>
  );
};

export const NigeriaLogo: React.FC<NigeriaLogoProps> = ({
  className = 'h-10 w-10',
  variant = 'emblem',
  showLabel = false,
}) => {
  if (variant === 'full') {
    return <NigeriaCoatOfArms className={className} />;
  }

  return (
    <div className="flex items-center gap-3">
      <NigeriaEmblem className={className} />
      {showLabel && (
        <div className="flex flex-col whitespace-nowrap">
          <span className="font-display text-sm sm:text-base font-extrabold tracking-wider text-white">
            NIGERIA HISTORY HUB
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Federal Republic of Nigeria
          </span>
        </div>
      )}
    </div>
  );
};
