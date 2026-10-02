import React from 'react';

interface MemoryArtworkProps {
  type: string;
  className?: string;
}

export const MemoryArtwork: React.FC<MemoryArtworkProps> = ({ type, className = 'w-full h-full' }) => {
  // Soft pastel green aesthetic backgrounds and romantic vector scene silhouettes
  switch (type) {
    case 'coffee':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#E4ECE2] via-[#D5E3D2] to-[#BCCFB6] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#5C7A65_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#46634F]" fill="none">
            {/* Coffee table scene */}
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            <path d="M70 160h100" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.6" />
            {/* Two coffee cups */}
            <rect x="80" y="115" width="32" height="35" rx="6" fill="#6A8973" />
            <path d="M112 122c6 0 10 4 10 10s-4 10-10 10" stroke="#6A8973" strokeWidth="3" />
            <rect x="128" y="115" width="32" height="35" rx="6" fill="#87A690" />
            <path d="M128 122c-6 0-10 4-10 10s4 10 10 10" stroke="#87A690" strokeWidth="3" />
            {/* Latte heart */}
            <path d="M96 128c-3-4-8 0-8 3 0 4 8 8 8 8s8-4 8-8c0-3-5-7-8-3z" fill="#FFF5E4" />
            <path d="M144 128c-3-4-8 0-8 3 0 4 8 8 8 8s8-4 8-8c0-3-5-7-8-3z" fill="#FFF5E4" />
            {/* Steam hearts */}
            <path d="M96 100c-2-3-5 0-5 2 0 3 5 6 5 6s5-3 5-6c0-2-3-5-5-2z" fill="#D38B95" opacity="0.85" />
            <path d="M144 98c-2-3-5 0-5 2 0 3 5 6 5 6s5-3 5-6c0-2-3-5-5-2z" fill="#D38B95" opacity="0.85" />
            {/* Botanical leafy sprig */}
            <path d="M60 80c15 10 25 35 25 35s-20-5-30-15c-5-5-3-15 5-20z" fill="#9FBCA5" opacity="0.5" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Kencan Pertama
          </span>
        </div>
      );

    case 'umbrella':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#D9E6D8] via-[#C9DCC8] to-[#ADC4AC] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            {/* Raindrops */}
            <path d="M70 70l-6 12M170 75l-6 12M85 95l-6 12M160 105l-6 12M115 65l-6 12" stroke="#7BA086" strokeWidth="2.5" strokeLinecap="round" />
            {/* Pastel umbrella */}
            <path d="M65 130c0-30 25-55 55-55s55 25 55 55c-18-5-37-5-55 0-18-5-37-5-55 0z" fill="#587A63" />
            <path d="M120 75v70c0 8-6 12-12 12s-8-4-8-8" stroke="#375240" strokeWidth="3.5" strokeLinecap="round" />
            {/* Two holding hands under */}
            <circle cx="108" cy="145" r="10" fill="#E8C3B9" />
            <circle cx="128" cy="145" r="10" fill="#E8C3B9" />
            <path d="M118 135c-2-3-6 0-6 2 0 3 6 6 6 6s6-3 6-6c0-2-4-5-6-2z" fill="#E28F9B" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Hujan & Kenangan
          </span>
        </div>
      );

    case 'movie':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#DCE7DA] via-[#CBDCC9] to-[#B1C8AF] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            {/* Popcorn and movie tickets */}
            <path d="M85 110l10 50h30l10-50z" fill="#E8EDE6" stroke="#4F6D58" strokeWidth="2.5" />
            <path d="M92 105c0-4 4-8 8-8s8 4 8 8c0-4 4-8 8-8s8 4 8 8" fill="#E5C378" />
            {/* Cinema Ticket */}
            <rect x="135" y="115" width="40" height="25" rx="3" transform="rotate(15 135 115)" fill="#688A72" />
            <circle cx="140" cy="130" r="3" fill="#F4F8F3" />
            <circle cx="172" cy="138" r="3" fill="#F4F8F3" />
            <path d="M120 75c-3-4-8 0-8 3 0 4 8 8 8 8s8-4 8-8c0-3-5-7-8-3z" fill="#D38B95" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Nonton Berdua
          </span>
        </div>
      );

    case 'park':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#E2ECE0] via-[#D0E2CE] to-[#B4CBB2] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            {/* Gentle hill */}
            <path d="M40 170c40-30 120-30 160 0" fill="#A5C4A9" opacity="0.6" />
            {/* Romantic park bench */}
            <path d="M85 140h70M85 147h70M95 140v25M145 140v25M85 130v15M155 130v15" stroke="#3D5A46" strokeWidth="3" strokeLinecap="round" />
            {/* Tree with falling leaves */}
            <path d="M70 155c0-25 15-45 35-45s35 20 35 45" fill="#5F8369" opacity="0.8" />
            <path d="M150 100c-2-3-6 0-6 2 0 3 6 6 6 6s6-3 6-6c0-2-4-5-6-2z" fill="#D38B95" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Taman Kota
          </span>
        </div>
      );

    case 'stargaze':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#2D4537] via-[#3E5C49] to-[#51765F] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#E8F5E9_1px,transparent_1px)] [background-size:14px_14px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-white" fill="none">
            <circle cx="120" cy="120" r="90" fill="#1C2E24" fillOpacity="0.75" />
            {/* Crescent moon */}
            <path d="M145 65c-15 0-27 12-27 27s12 27 27 27c4 0 8-1 11-3-10 2-20-5-20-15 0-9 8-17 17-17 4 0 8 1 11 3-5-13-16-22-29-22z" fill="#FFF2BD" />
            {/* Stars */}
            <circle cx="75" cy="80" r="2" fill="#FFFFFF" />
            <circle cx="95" cy="65" r="2.5" fill="#FFFFFF" />
            <circle cx="165" cy="95" r="2" fill="#FFFFFF" />
            <circle cx="85" cy="115" r="1.5" fill="#FFFFFF" />
            <circle cx="155" cy="135" r="2" fill="#FFFFFF" />
            {/* Couple silhouette looking up */}
            <ellipse cx="110" cy="165" rx="14" ry="12" fill="#A5C4AC" />
            <ellipse cx="130" cy="165" rx="13" ry="11" fill="#88A98F" />
            <path d="M120 145c-2-3-6 0-6 2 0 3 6 6 6 6s6-3 6-6c0-2-4-5-6-2z" fill="#E8B4B8" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-white bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-white/20">
            Menatap Bintang
          </span>
        </div>
      );

    case 'beach':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#D5E6DC] via-[#BDD8C8] to-[#9DC2AE] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3B5E49_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            {/* Gentle waves */}
            <path d="M40 145c20-6 40 6 60 0s40-6 60 0 40-6 40 0v35H40z" fill="#75A68B" opacity="0.6" />
            <path d="M40 155c20-4 40 4 60 0s40-4 60 0 40-4 40 0v25H40z" fill="#588B6E" opacity="0.8" />
            {/* Sunset sun */}
            <circle cx="120" cy="110" r="22" fill="#F7D3A6" />
            {/* Birds */}
            <path d="M75 80c4-3 8 0 8 0s4-3 8 0" stroke="#486853" strokeWidth="2" strokeLinecap="round" />
            <path d="M95 90c3-2 6 0 6 0s3-2 6 0" stroke="#486853" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Deburan Ombak
          </span>
        </div>
      );

    case 'sunset':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#EAE2D5] via-[#D8D4C5] to-[#B7C7B7] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#FAF7F2" fillOpacity="0.85" />
            <circle cx="120" cy="120" r="32" fill="#F2B59D" opacity="0.85" />
            <path d="M40 150c30-10 70-15 110-5 25 6 40 5 50 0v30H40z" fill="#53755E" />
            <path d="M120 78c-3-4-8 0-8 3 0 4 8 8 8 8s8-4 8-8c0-3-5-7-8-3z" fill="#E28F9B" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Senja Romantis
          </span>
        </div>
      );

    case 'dinner':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#E3EDE1] via-[#D2E3CF] to-[#B3CAB0] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            {/* Candle with warm flame */}
            <rect x="116" y="115" width="8" height="30" rx="3" fill="#FFFFFF" stroke="#486853" strokeWidth="2" />
            <path d="M120 102c-4 4-1 9 0 11 1-2 4-7 0-11z" fill="#F4A261" />
            {/* Plates & Fork/Knife */}
            <ellipse cx="80" cy="135" rx="16" ry="6" fill="#DDE7DB" stroke="#486853" strokeWidth="2" />
            <ellipse cx="160" cy="135" rx="16" ry="6" fill="#DDE7DB" stroke="#486853" strokeWidth="2" />
            <path d="M120 80c-3-4-8 0-8 3 0 4 8 8 8 8s8-4 8-8c0-3-5-7-8-3z" fill="#D38B95" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Makan Berdua
          </span>
        </div>
      );

    case 'candid':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#DDE8DB] via-[#C9DAC7] to-[#ADC4AB] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            {/* Vintage Camera */}
            <rect x="75" y="105" width="90" height="55" rx="10" fill="#587B64" />
            <rect x="85" y="95" width="25" height="12" rx="3" fill="#425E4C" />
            <circle cx="120" cy="132" r="20" fill="#F4F8F3" stroke="#374F3F" strokeWidth="4" />
            <circle cx="120" cy="132" r="12" fill="#374F3F" />
            <circle cx="116" cy="128" r="3" fill="#FFFFFF" />
            <path d="M120 75c-3-4-8 0-8 3 0 4 8 8 8 8s8-4 8-8c0-3-5-7-8-3z" fill="#D38B95" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Momen Candid
          </span>
        </div>
      );

    case 'gift':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#E0EADA] via-[#CCE0C6] to-[#B3CBB0] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            {/* Gift Box with Ribbon */}
            <rect x="85" y="115" width="70" height="50" rx="4" fill="#6A8F76" />
            <rect x="80" y="105" width="80" height="15" rx="3" fill="#4C6E57" />
            <rect x="115" y="105" width="10" height="60" fill="#E8B4B8" />
            {/* Bow */}
            <path d="M120 105c-10-15-25 0-10 10 10-10 10-10 10-10z" fill="#D38B95" />
            <path d="M120 105c10-15 25 0 10 10-10-10-10-10-10-10z" fill="#D38B95" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Kejutan Manis
          </span>
        </div>
      );

    case 'travel':
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#DCE8DC] via-[#C6DAC6] to-[#A8C2A8] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#F4F8F3" fillOpacity="0.85" />
            {/* Scenic road / mountain */}
            <path d="M40 160l50-45 35 25 45-35 30 55z" fill="#587A63" opacity="0.75" />
            <path d="M120 120l-15 45h30z" fill="#E8EDE6" />
            <path d="M120 75c-3-4-8 0-8 3 0 4 8 8 8 8s8-4 8-8c0-3-5-7-8-3z" fill="#D38B95" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            Jalan Berdua
          </span>
        </div>
      );

    case 'anniversary':
    default:
      return (
        <div className={`relative overflow-hidden bg-gradient-to-br from-[#E2EFE1] via-[#CFE2CE] to-[#AFC9AE] flex items-center justify-center ${className}`}>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#496652_1px,transparent_1px)] [background-size:16px_16px]" />
          <svg viewBox="0 0 240 240" className="w-40 h-40 drop-shadow-sm text-[#3E5C47]" fill="none">
            <circle cx="120" cy="120" r="90" fill="#FAFDF9" fillOpacity="0.9" />
            {/* Ring / Flower wreath */}
            <circle cx="120" cy="120" r="55" stroke="#7A9E84" strokeWidth="2.5" strokeDasharray="6 4" />
            {/* Number 1 in center */}
            <text x="120" y="132" textAnchor="middle" fill="#3B5A45" fontSize="42" fontFamily="'Playfair Display', serif" fontWeight="bold">
              1
            </text>
            <text x="120" y="152" textAnchor="middle" fill="#668770" fontSize="11" fontFamily="'Plus Jakarta Sans', sans-serif" letterSpacing="2">
              TAHUN
            </text>
            {/* Heart on wreath */}
            <path d="M120 58c-4-5-10 0-10 4 0 5 10 10 10 10s10-5 10-10c0-4-6-9-10-4z" fill="#D38B95" />
            <path d="M60 120c-4-5-10 0-10 4 0 5 10 10 10 10s10-5 10-10c0-4-6-9-10-4z" fill="#E8B4B8" />
            <path d="M180 120c-4-5-10 0-10 4 0 5 10 10 10 10s10-5 10-10c0-4-6-9-10-4z" fill="#E8B4B8" />
          </svg>
          <span className="absolute bottom-3 right-3 text-[11px] font-medium tracking-wider text-[#354D3D] bg-white/70 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-[#C5D8C7]">
            365 Hari Bersama
          </span>
        </div>
      );
  }
};
