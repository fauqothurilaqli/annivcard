import React, { useState } from 'react';
import { User, Calendar, X, Check, Heart } from 'lucide-react';
import { CoupleProfile } from '../types';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: CoupleProfile;
  onSaveProfile: (profile: CoupleProfile) => void;
}

export const EditProfileModal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSaveProfile,
}) => {
  const [senderName, setSenderName] = useState(profile.senderName);
  const [partnerName, setPartnerName] = useState(profile.partnerName);
  const [anniversaryDate, setAnniversaryDate] = useState(profile.anniversaryDate);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile({
      ...profile,
      senderName: senderName.trim() || 'Fauqo',
      partnerName: partnerName.trim() || 'Sayangku',
      anniversaryDate: anniversaryDate || '2025-10-03',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm bg-[#FAFDF9] rounded-3xl p-5 shadow-2xl border border-[#D5E3D2]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#E3EDE1]">
          <div className="flex items-center gap-1.5 text-xs text-[#52715B] font-medium">
            <User className="w-3.5 h-3.5 text-[#5F836A]" />
            <span>Kustomisasi Nama & Tanggal</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EEF5EC] text-[#425E4B] flex items-center justify-center hover:bg-[#DEEBDC]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="pt-4 space-y-3.5">
          <div>
            <label className="block text-[11px] font-semibold text-[#3B5443] mb-1">
              Nama Pasangan / Panggilan Sayang:
            </label>
            <input
              type="text"
              value={partnerName}
              onChange={(e) => setPartnerName(e.target.value)}
              placeholder="Contoh: Dinda / Sayangku"
              className="w-full text-xs px-3 py-2 rounded-xl border border-[#C5DAC4] bg-white focus:outline-none focus:ring-2 focus:ring-[#52765E]"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#3B5443] mb-1">
              Namamu:
            </label>
            <input
              type="text"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Contoh: Fauqo"
              className="w-full text-xs px-3 py-2 rounded-xl border border-[#C5DAC4] bg-white focus:outline-none focus:ring-2 focus:ring-[#52765E]"
              required
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#3B5443] mb-1">
              Tanggal Resmi Berpacaran:
            </label>
            <input
              type="date"
              value={anniversaryDate}
              onChange={(e) => setAnniversaryDate(e.target.value)}
              className="w-full text-xs px-3 py-2 rounded-xl border border-[#C5DAC4] bg-white focus:outline-none focus:ring-2 focus:ring-[#52765E]"
              required
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="min-h-[44px] w-full py-2.5 rounded-full bg-[#466551] text-white text-xs font-semibold shadow-md hover:bg-[#385342] flex items-center justify-center gap-1.5 active:scale-98 transition-all"
            >
              <Check className="w-4 h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
