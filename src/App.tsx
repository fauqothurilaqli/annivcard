import React, { useState, useEffect } from 'react';
import {
  Heart,
  Mail,
  CheckCircle2,
  Pause,
  Play,
} from 'lucide-react';
import { MonthMemory, CoupleProfile, LoveReason, FutureWish } from './types';
import {
  INITIAL_COUPLE_PROFILE,
  INITIAL_MEMORIES,
  INITIAL_REASONS,
  INITIAL_WISHES,
} from './data/defaultMemories';
import { AnniversaryCounter } from './components/AnniversaryCounter';
import { MonthCard } from './components/MonthCard';
import { AudioPlayer } from './components/AudioPlayer';
import { PetalEffects } from './components/PetalEffects';
import { LoveLetterModal } from './components/LoveLetterModal';
import { LoveReasonsModal } from './components/LoveReasonsModal';
import { FutureWishesModal } from './components/FutureWishesModal';
import { musicManager } from './utils/musicManager';

export default function App() {
  // Couple Profile (Code-driven directly from INITIAL_COUPLE_PROFILE in defaultMemories.ts)
  const profile = INITIAL_COUPLE_PROFILE;

  // 12 Months Memories State (Code-driven from INITIAL_MEMORIES in defaultMemories.ts)
  const [memories, setMemories] = useState<MonthMemory[]>(INITIAL_MEMORIES);

  // Future Wishes State (Safely initialized)
  const [wishes, setWishes] = useState<FutureWish[]>(() => {
    try {
      const saved = localStorage.getItem('anniversary_wishes');
      if (saved && saved !== 'undefined' && saved !== 'null') {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Ignore corrupted localStorage data
    }
    return INITIAL_WISHES;
  });

  // UI Interactive Modals
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isReasonsOpen, setIsReasonsOpen] = useState(false);
  const [isWishesOpen, setIsWishesOpen] = useState(false);
  const [isPetalsEnabled, setIsPetalsEnabled] = useState(true);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Subscribe to playback updates for top play button
  useEffect(() => {
    // Clear old localStorage memory, profile, and custom photo caches so changes in code take effect immediately
    localStorage.removeItem('anniversary_memories');
    localStorage.removeItem('anniversary_profile');
    localStorage.removeItem('anniversary_custom_photos');

    const unsubscribe = musicManager.subscribe((state) => {
      setIsPlayingMusic(state.isPlaying);
    });
    return unsubscribe;
  }, []);

  // Save wishes changes to localStorage
  useEffect(() => {
    localStorage.setItem('anniversary_wishes', JSON.stringify(wishes));
  }, [wishes]);

  // Handle Wishes Toggle & Add
  const handleToggleWish = (id: string) => {
    setWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, completed: !w.completed } : w))
    );
  };

  const handleAddWish = (text: string, category: string) => {
    const newWish: FutureWish = {
      id: `wish_${Date.now()}`,
      text,
      category,
      completed: false,
    };
    setWishes((prev) => [...prev, newWish]);
  };

  return (
    <div className="min-h-screen bg-[#F3F6F3] text-[#22332A] flex flex-col font-sans-clean selection:bg-[#B7CEBE] selection:text-[#18261F] pb-12">
      {/* Floating Leaves & Flower Petals Effect */}
      <PetalEffects enabled={isPetalsEnabled} />

      {/* Top Header: Centered Menua Bersama */}
      <header className="sticky top-0 z-30 bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#D7E3D5] px-4 py-3 shadow-xs">
        <div className="max-w-md mx-auto flex items-center justify-center">
          <span className="text-lg font-bold font-serif-romantic text-[#2F4738] tracking-tight text-center">
            Menua Bersama
          </span>
        </div>
      </header>

      {/* Main Mobile-First Container (Ergonomic max-w-md) */}
      <main className="max-w-md mx-auto w-full px-4 pt-4 space-y-6 flex-1 pb-12">

        {/* HERO SECTION: Warm Romantic Opening */}
        <section className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#E7EFE6] via-[#F0F5EE] to-[#FAFDF9] p-6 border border-[#D5E3D2] shadow-xs text-center">
          {/* Gentle Kicker */}
          <p className="text-[11px] uppercase tracking-widest text-[#5A7C65] font-semibold">
            Perayaan Satu Tahun Kita
          </p>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-bold font-serif-romantic text-[#223528] mt-1.5 leading-snug">
            Selamat 1 Tahun, <span className="text-[#3A5E46]">{profile.partnerName}</span>!
          </h1>

          <p className="text-xs text-[#526D5B] mt-2 leading-relaxed">
            Hari ini, genap 3 Oktober, tepat satu tahun kita resmi berpacaran.
            Terima kasih telah menjadi alasan di balik setiap senyum dan bahagiaku.
          </p>

          {/* Primary Call-to-Actions (Thumb Ergonomics) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2.5">
            <button
              onClick={() => {
                setIsLetterOpen(true);
                musicManager.play();
              }}
              className="min-h-[44px] w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#466551] text-white text-xs font-semibold shadow-md hover:bg-[#385342] active:scale-98 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#FFDEE2]" />
              <span>Buka Surat Cinta Kita</span>
            </button>

            <button
              onClick={() => musicManager.toggle()}
              className={`min-h-[44px] w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold border active:scale-98 transition-all flex items-center justify-center gap-2 ${isPlayingMusic
                ? 'bg-[#E1EDE0] text-[#223528] border-[#B7D1BA] shadow-xs'
                : 'bg-white text-[#385342] border-[#CADBCA] hover:bg-[#F2F7F1]'
                }`}
            >
              {isPlayingMusic ? (
                <>
                  <Pause className="w-4 h-4 fill-current text-[#466551]" />
                  <span>Jeda Musik  </span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-current text-[#567A60]" />
                  <span>Putar Musik</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* ANNIVERSARY COUNTER (Exact Days, Hours, Minutes, Seconds) */}
        <section aria-label="Waktu Bersama">
          <AnniversaryCounter
            startDateStr={profile.anniversaryDate}
            partnerName={profile.partnerName}
            senderName={profile.senderName}
          />
        </section>

        {/* QUICK SURPRISE CARDS (10 Alasan & Harapan Masa Depan) */}
        <section className="grid grid-cols-2 gap-3">
          {/* Card 1: 10 Alasan Aku Mencintaimu */}
          <div
            onClick={() => setIsReasonsOpen(true)}
            className="bg-[#FFFFFF] rounded-2xl p-4 border border-[#D5E3D2] shadow-xs cursor-pointer hover:border-[#B4CBB2] active:scale-98 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-full bg-[#EBF3EA] text-[#466551] flex items-center justify-center mb-2.5">
                <Heart className="w-4 h-4 fill-current text-[#C95B6A]" />
              </div>
              <h3 className="text-xs font-bold font-serif-romantic text-[#23352A] leading-tight">
                10 Alasan Aku Memilihmu
              </h3>
              <p className="text-[10px] text-[#597463] mt-1 leading-normal">
                Hal-hal kecil yang membuatku jatuh cinta setiap hari.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#466551] mt-3 inline-block">
              Buka Kartu →
            </span>
          </div>

          {/* Card 2: Harapan Tahun Kedua */}
          <div
            onClick={() => setIsWishesOpen(true)}
            className="bg-[#FFFFFF] rounded-2xl p-4 border border-[#D5E3D2] shadow-xs cursor-pointer hover:border-[#B4CBB2] active:scale-98 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-full bg-[#EBF3EA] text-[#466551] flex items-center justify-center mb-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#466551]" />
              </div>
              <h3 className="text-xs font-bold font-serif-romantic text-[#23352A] leading-tight">
                Harapan Menua Bersama
              </h3>
              <p className="text-[10px] text-[#597463] mt-1 leading-normal">
                Bucket list & mimpi kita untuk tahun kedua.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-[#466551] mt-3 inline-block">
              Lihat Wishlist →
            </span>
          </div>
        </section>

        {/* 12 MONTHS JOURNEY TIMELINE (BULAN 1 SAMPAI BULAN 12) */}
        <section className="space-y-4 pt-2">
          {/* Section Heading */}
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-wider text-[#63836D] font-semibold">
              Kilas Balik 1 Tahun
            </span>
            <h2 className="text-xl font-bold font-serif-romantic text-[#23352A] mt-0.5">
              Perjalanan Cinta: Bulan 1 – 12
            </h2>
            <p className="text-xs text-[#526D5B] mt-1">
              Setiap bulan menyimpan cerita dan rasa syukur yang abadi.
            </p>
          </div>

          {/* Month Cards Feed - All 12 Months displayed seamlessly */}
          <div className="space-y-5">
            {memories.map((memory) => (
              <MonthCard
                key={memory.monthNumber}
                memory={memory}
              />
            ))}
          </div>
        </section>

        {/* ROMANTIC CLOSING BANNER */}
        <section className="bg-gradient-to-br from-[#E2EDE1] via-[#D5E4D3] to-[#BCCFB6] rounded-3xl p-6 text-center border border-[#BED5BF] shadow-xs space-y-3">
          <div className="w-12 h-12 rounded-full bg-white/80 mx-auto flex items-center justify-center text-[#466551] shadow-xs">
            <Heart className="w-6 h-6 fill-current text-[#D16978]" />
          </div>

          <h3 className="text-lg font-bold font-serif-romantic text-[#223527]">
            "Menua Bersamamu Adalah Rencana Terindahku"
          </h3>

          <p className="text-xs text-[#3E5B47] leading-relaxed max-w-xs mx-auto">
            Satu tahun pertama yang penuh keajaiban. Aku berjanji akan terus belajar mencintaimu lebih baik di tahun-tahun berikutnya.
          </p>

          <div className="pt-2 pb-6">
            <p className="font-handwriting text-2xl text-[#2F4A38]">
              {profile.senderName} & {profile.partnerName}
            </p>
            <p className="text-[10px] text-[#55755E] uppercase tracking-wider font-semibold mt-1">
              Selamanya · Sejak 3 Oktober 2025
            </p>
          </div>
        </section>

      </main>

      {/* BACKGROUND AUDIO (NO BOTTOM BAR, NO LYRICS) */}
      <AudioPlayer />

      {/* INTERACTIVE MODALS */}
      <LoveLetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
        profile={profile}
        onPlaySong={() => musicManager.play()}
      />

      <LoveReasonsModal
        isOpen={isReasonsOpen}
        onClose={() => setIsReasonsOpen(false)}
        reasons={INITIAL_REASONS}
        partnerName={profile.partnerName}
      />

      <FutureWishesModal
        isOpen={isWishesOpen}
        onClose={() => setIsWishesOpen(false)}
        wishes={wishes}
        onToggleWish={handleToggleWish}
        onAddWish={handleAddWish}
      />
    </div>
  );
}
