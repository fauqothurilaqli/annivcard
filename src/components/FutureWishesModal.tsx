import React, { useState } from 'react';
import { CheckSquare, Square, Plus, X, Heart } from 'lucide-react';
import { FutureWish } from '../types';

interface FutureWishesModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishes: FutureWish[];
  onToggleWish: (id: string) => void;
  onAddWish: (text: string, category: string) => void;
}

export const FutureWishesModal: React.FC<FutureWishesModalProps> = ({
  isOpen,
  onClose,
  wishes,
  onToggleWish,
  onAddWish,
}) => {
  const [newWishText, setNewWishText] = useState('');
  const [newCategory, setNewCategory] = useState('Kencan');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newWishText.trim()) {
      onAddWish(newWishText.trim(), newCategory);
      setNewWishText('');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-[#FAFDF9] rounded-3xl p-5 shadow-2xl border border-[#D5E3D2] max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#E3EDE1]">
          <div className="flex items-center gap-1.5 text-xs text-[#52715B] font-medium">
            <Heart className="w-3.5 h-3.5 text-[#5F836A] fill-current" />
            <span>Harapan & Janji Menua Bersama</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EEF5EC] text-[#425E4B] flex items-center justify-center hover:bg-[#DEEBDC]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Intro */}
        <div className="py-3">
          <h3 className="text-base font-bold font-serif-romantic text-[#23352A]">
            Bucket List Tahun Kedua Kita
          </h3>
          <p className="text-xs text-[#56725F]">
            Hal-hal manis yang ingin kita lakukan berdua di tahun berikutnya:
          </p>
        </div>

        {/* Checklist */}
        <div className="flex-1 overflow-y-auto space-y-2 py-1 pr-1">
          {wishes.map((wish) => (
            <div
              key={wish.id}
              onClick={() => onToggleWish(wish.id)}
              className={`p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                wish.completed
                  ? 'bg-[#EDF5EC] border-[#C8DEC5] text-[#4A6853]'
                  : 'bg-white border-[#DDE8DB] text-[#293E30] hover:bg-[#F8FAF7]'
              }`}
            >
              <button
                type="button"
                className="mt-0.5 shrink-0 text-[#466551]"
                aria-label={wish.completed ? 'Sudah tercapai' : 'Belum tercapai'}
              >
                {wish.completed ? (
                  <CheckSquare className="w-4 h-4 text-[#466551] fill-[#D1E6CF]" />
                ) : (
                  <Square className="w-4 h-4 text-[#7A9884]" />
                )}
              </button>

              <div className="flex-1 min-w-0">
                <span
                  className={`text-xs block leading-relaxed ${
                    wish.completed ? 'line-through text-[#6F8877]' : 'font-medium'
                  }`}
                >
                  {wish.text}
                </span>
                <span className="text-[10px] text-[#7A9984] font-medium">
                  {wish.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Add Wish Form */}
        <form onSubmit={handleSubmit} className="pt-3 mt-2 border-t border-[#E3EDE1] space-y-2">
          <div className="flex gap-2">
            <input
              type="text"
              value={newWishText}
              onChange={(e) => setNewWishText(e.target.value)}
              placeholder="Tulis harapan baru untuk kita..."
              className="flex-1 text-xs px-3 py-2 rounded-xl border border-[#C5DAC4] bg-white focus:outline-none focus:ring-2 focus:ring-[#52765E]"
            />
            <button
              type="submit"
              className="min-h-[44px] px-3.5 py-2 bg-[#466551] text-white text-xs font-semibold rounded-xl hover:bg-[#385342] flex items-center gap-1 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Tambah</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
