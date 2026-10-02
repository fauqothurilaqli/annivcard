import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight, X, Smile, Shield, MessageCircle, Gift, User, Star, Feather, Infinity } from 'lucide-react';
import { LoveReason } from '../types';

interface LoveReasonsModalProps {
  isOpen: boolean;
  onClose: () => void;
  reasons: LoveReason[];
  partnerName: string;
}

export const LoveReasonsModal: React.FC<LoveReasonsModalProps> = ({
  isOpen,
  onClose,
  reasons,
  partnerName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || reasons.length === 0) return null;

  const current = reasons[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const renderIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#4F715A]' };
    switch (iconName) {
      case 'smile': return <Smile {...props} />;
      case 'shield': return <Shield {...props} />;
      case 'message': return <MessageCircle {...props} />;
      case 'gift': return <Gift {...props} />;
      case 'user': return <User {...props} />;
      case 'star': return <Star {...props} />;
      case 'feather': return <Feather {...props} />;
      case 'infinity': return <Infinity {...props} />;
      default: return <Heart {...props} />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-[#FAFDF9] rounded-3xl p-5 shadow-2xl border border-[#D5E3D2] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E3EDE1]">
          <span className="text-xs text-[#52715B] font-semibold">10 Alasan Aku Mencintaimu</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EEF5EC] text-[#425E4B] flex items-center justify-center hover:bg-[#DEEBDC]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Counter Badge */}
        <div className="text-center pt-4">
          <span className="text-[11px] font-semibold text-[#5B7B65] bg-[#E9F2E8] px-3 py-1 rounded-full">
            Alasan #{current.id} dari {reasons.length}
          </span>
        </div>

        {/* Reason Card */}
        <div className="my-5 bg-[#FFFFFF] rounded-2xl p-6 border border-[#DCE8DB] shadow-xs text-center flex flex-col items-center justify-center min-h-[190px]">
          <div className="w-12 h-12 rounded-full bg-[#EBF3EA] flex items-center justify-center mb-3">
            {renderIcon(current.icon)}
          </div>

          <h3 className="text-base font-bold font-serif-romantic text-[#23352A] mb-2">
            {current.title}
          </h3>

          <p className="text-xs text-[#526D5A] leading-relaxed font-sans-clean">
            {current.description}
          </p>
        </div>

        {/* Navigation Buttons (Thumb friendly) */}
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            onClick={handlePrev}
            className="min-h-[44px] flex-1 py-2 rounded-xl bg-[#EEF5EC] text-[#344F3C] text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#E0ECE0] active:scale-95 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Sebelumnya</span>
          </button>

          <button
            onClick={handleNext}
            className="min-h-[44px] flex-1 py-2 rounded-xl bg-[#466551] text-white text-xs font-semibold flex items-center justify-center gap-1 hover:bg-[#385342] active:scale-95 transition-all"
          >
            <span>Lanjut</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-1.5 pt-4">
          {reasons.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex ? 'w-5 bg-[#466551]' : 'w-1.5 bg-[#D2E2D0]'
              }`}
              aria-label={`Lihat alasan ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
