import React, { useEffect, useState } from 'react';
import { Heart, Clock, Calendar } from 'lucide-react';

interface AnniversaryCounterProps {
  startDateStr: string; // "2025-10-03"
  partnerName: string;
  senderName: string;
}

export const AnniversaryCounter: React.FC<AnniversaryCounterProps> = ({
  startDateStr,
  partnerName,
  senderName,
}) => {
  const [timeTogether, setTimeTogether] = useState({
    days: 363,
    hours: 14,
    minutes: 28,
    seconds: 45,
  });

  useEffect(() => {
    const calculateTime = () => {
      // Anniversary start date
      const start = new Date(startDateStr).getTime();
      const now = new Date().getTime();
      const diff = Math.max(0, now - start);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeTogether({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [startDateStr]);

  return (
    <div className="w-full bg-[#FFFFFF]/90 backdrop-blur-xs rounded-3xl p-5 border border-[#D5E3D2] shadow-sm">
      {/* Kicker header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E2ECE0]">
        <div className="flex items-center gap-1.5 text-xs text-[#52715B] font-medium">
          <Calendar className="w-3.5 h-3.5 text-[#63876E]" />
          <span>Resmi Jadian: 3 Oktober 2025</span>
        </div>
        <div className="text-[11px] text-[#A6626E] font-medium bg-[#F9ECEE] px-2.5 py-0.5 rounded-full">
          <span>1 Tahun Cinta</span>
        </div>
      </div>

      {/* Main counter numbers */}
      <div className="pt-4 pb-2">
        <p className="text-center text-xs text-[#526B5A] mb-3">
          Waktu yang telah kita lewati bersama <span className="font-semibold text-[#304838]">{partnerName}</span>:
        </p>

        <div className="grid grid-cols-4 gap-2 text-center">
          {/* Days */}
          <div className="bg-[#F2F7F1] rounded-2xl py-2.5 px-1 border border-[#D6E5D4]">
            <span className="block text-2xl font-bold font-serif-romantic text-[#2F4738] tabular-nums">
              {timeTogether.days}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#637F6C] font-semibold">
              Hari
            </span>
          </div>

          {/* Hours */}
          <div className="bg-[#F2F7F1] rounded-2xl py-2.5 px-1 border border-[#D6E5D4]">
            <span className="block text-2xl font-bold font-serif-romantic text-[#2F4738] tabular-nums">
              {timeTogether.hours}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#637F6C] font-semibold">
              Jam
            </span>
          </div>

          {/* Minutes */}
          <div className="bg-[#F2F7F1] rounded-2xl py-2.5 px-1 border border-[#D6E5D4]">
            <span className="block text-2xl font-bold font-serif-romantic text-[#2F4738] tabular-nums">
              {timeTogether.minutes}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#637F6C] font-semibold">
              Menit
            </span>
          </div>

          {/* Seconds */}
          <div className="bg-[#F2F7F1] rounded-2xl py-2.5 px-1 border border-[#D6E5D4]">
            <span className="block text-2xl font-bold font-serif-romantic text-[#A6626E] tabular-nums">
              {timeTogether.seconds}
            </span>
            <span className="text-[10px] uppercase tracking-wider text-[#915B65] font-semibold">
              Detik
            </span>
          </div>
        </div>
      </div>

      {/* Romantic Milestone Quote */}
      <div className="mt-3 bg-[#EAF2E8] rounded-xl p-2.5 text-center flex items-center justify-center gap-2">
        <Heart className="w-3.5 h-3.5 text-[#D17684] fill-current shrink-0" />
        <p className="text-[11px] text-[#36503E] font-medium leading-tight">
          "365 hari bersamamu, dan aku masih jatuh cinta setiap harinya."
        </p>
      </div>
    </div>
  );
};
