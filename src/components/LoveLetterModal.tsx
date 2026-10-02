import React, { useState } from 'react';
import { Mail, Heart, X } from 'lucide-react';
import { CoupleProfile } from '../types';

interface LoveLetterModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CoupleProfile;
  onPlaySong?: () => void;
}

export const LoveLetterModal: React.FC<LoveLetterModalProps> = ({
  isOpen,
  onClose,
  profile,
  onPlaySong,
}) => {
  const [isOpened, setIsOpened] = useState(false);

  if (!isOpen) return null;

  const handleOpenEnvelope = () => {
    setIsOpened(true);
    if (onPlaySong) {
      onPlaySong();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#FAFDF9] rounded-3xl p-5 shadow-2xl border border-[#D5E3D2] max-h-[88vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E3EDE1]">
          <div className="flex items-center gap-1.5 text-xs text-[#52715B] font-medium">
            <Mail className="w-4 h-4 text-[#5F836A]" />
            <span>Surat Cinta 1 Tahun Kita</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#EEF5EC] text-[#425E4B] flex items-center justify-center hover:bg-[#DEEBDC] transition-colors"
            aria-label="Tutup Surat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Envelope Zero State (Click to Open) */}
        {!isOpened ? (
          <div className="py-10 px-4 text-center flex flex-col items-center justify-center">
            {/* Wax Seal Envelope Graphics */}
            <div
              onClick={handleOpenEnvelope}
              className="relative w-64 h-44 bg-gradient-to-br from-[#E7EFE6] via-[#D5E4D3] to-[#BDD5BB] rounded-2xl p-4 shadow-lg border border-[#C5DAC3] flex flex-col items-center justify-center cursor-pointer group active:scale-98 transition-transform hover:shadow-xl"
            >
              {/* Envelope flap lines */}
              <div className="absolute inset-x-0 top-0 h-20 border-b border-[#ADC6AA] opacity-50 [clip-path:polygon(0_0,50%_100%,100%_0)] bg-[#DFEBDE]" />

              {/* Wax Seal Stamp */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#AF4D5B] text-white flex flex-col items-center justify-center shadow-md border-2 border-[#D8818E] group-hover:scale-105 transition-transform">
                <Heart className="w-6 h-6 fill-current text-white/95" />
                <span className="text-[9px] font-bold tracking-widest mt-0.5">3 OKT</span>
              </div>

              <div className="relative z-10 mt-3 text-center">
                <p className="text-xs font-serif-romantic font-bold text-[#273E2E]">
                  Khusus Untuk {profile.partnerName}
                </p>
                <p className="text-[10px] text-[#55735D]">Dari {profile.senderName}</p>
              </div>
            </div>

            <p className="mt-5 text-xs text-[#4F6C57] font-medium animate-pulse">
              Ketuk amplop untuk membuka surat & memutar lagu...
            </p>

            <button
              onClick={handleOpenEnvelope}
              className="min-h-[44px] mt-3 px-6 py-2.5 rounded-full bg-[#466551] text-white text-xs font-semibold shadow-md hover:bg-[#385342] active:scale-95 transition-all flex items-center justify-center"
            >
              <span>Buka Surat Cinta</span>
            </button>
          </div>
        ) : (
          /* Opened Letter Content */
          <div className="flex-1 overflow-y-auto py-4 px-2 space-y-4">
            {/* Header info */}
            <div className="text-center pb-2">
              <span className="text-[11px] uppercase tracking-wider text-[#698872] font-semibold">
                3 Oktober 2025 — 3 Oktober 2026
              </span>
              <h3 className="text-lg font-bold text-[#23352A] font-serif-romantic mt-0.5">
                Untuk {profile.partnerName} Tercinta
              </h3>
            </div>

            {/* Letter Body (Paper texture) */}
            <div className="bg-[#FAFDF9] rounded-2xl p-4 border border-[#DEEADE] shadow-xs relative">
              <div className="prose prose-sm text-xs leading-relaxed text-[#354D3D] space-y-3 whitespace-pre-line font-sans-clean">
                {profile.loveLetterText}
              </div>

              <div className="mt-6 pt-3 border-t border-[#E3ECE1] text-xs text-[#5A7865]">
                <p className="font-serif-romantic text-sm font-bold text-[#283E2F]">
                  Dengan segenap hatiku,
                </p>
                <p className="font-handwriting text-xl text-[#3E5C47] mt-1">
                  {profile.senderName}
                </p>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="text-center pt-3 pb-1">
              <p className="text-xs italic text-[#4D6C56]">
                "Mari terus melangkah dan menua bersama, Sayang."
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
