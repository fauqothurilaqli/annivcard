import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  MapPin,
  Calendar,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Images,
  X,
} from 'lucide-react';
import { MonthMemory } from '../types';
import { MemoryArtwork } from './MemoryArtwork';
import { SlidingText } from './SlidingText';

interface MonthCardProps {
  memory: MonthMemory;
}

export const MonthCard: React.FC<MonthCardProps> = ({ memory }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [showFullImage, setShowFullImage] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Normalize photo array: support both `photos` (up to 5) and single `photoUrl`
  const photoList =
    memory.photos && memory.photos.length > 0
      ? memory.photos.slice(0, 5)
      : memory.photoUrl
      ? [memory.photoUrl]
      : [];

  const hasPhotos = photoList.length > 0;
  const currentPhoto = photoList[activePhotoIndex] || photoList[0];

  // Active title: dynamically switches based on currently selected photo
  const activeTitle =
    (memory.photoTitles && memory.photoTitles[activePhotoIndex]) ||
    memory.title;

  // Active story: dynamically switches based on currently selected photo
  const activeStory =
    (memory.photoStories && memory.photoStories[activePhotoIndex]) ||
    memory.story;

  const handleNextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (photoList.length <= 1) return;
    setActivePhotoIndex((prev) => (prev + 1) % photoList.length);
  };

  const handlePrevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (photoList.length <= 1) return;
    setActivePhotoIndex((prev) => (prev - 1 + photoList.length) % photoList.length);
  };

  // Touch Swipe for mobile gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    const threshold = 40; // min swipe distance in px
    if (deltaX < -threshold) {
      handleNextPhoto();
    } else if (deltaX > threshold) {
      handlePrevPhoto();
    }
    setTouchStartX(null);
  };

  return (
    <>
      <article className="relative bg-[#FFFFFF] rounded-3xl p-4 sm:p-5 border border-[#D5E3D2] shadow-sm hover:shadow-md transition-shadow">
        {/* Subtle decorative tape on polaroid */}
        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-[#DCE8DC]/80 backdrop-blur-xs rounded-sm border border-[#C5D8C6] shadow-xs rotate-[-1deg]" />

        {/* Top Header: Month Tag & Date */}
        <div className="flex items-center justify-between gap-2 pb-3 pt-1 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
            <span className="inline-flex items-center justify-center whitespace-nowrap shrink-0 px-2.5 py-1 rounded-lg text-xs font-bold text-white bg-[#4D6D58] leading-none tracking-normal">
              {memory.monthLabel}
            </span>
            <SlidingText
              text={memory.highlight}
              className="text-xs text-[#5D7A67] font-medium flex-1 min-w-0"
            />
          </div>

          <div className="flex items-center gap-1 text-[11px] text-[#789682] shrink-0 whitespace-nowrap">
            <Calendar className="w-3.5 h-3.5 text-[#6D8F78]" />
            <span>{memory.dateString}</span>
          </div>
        </div>

        {/* MAIN PHOTO CONTAINER (Polaroid Style Carousel) */}
        <div
          onClick={() => {
            if (hasPhotos) setShowFullImage(true);
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#EDF3EC] border border-[#DEEADE] group select-none ${
            hasPhotos ? 'cursor-pointer' : ''
          }`}
        >
          {hasPhotos ? (
            <>
              <img
                src={currentPhoto}
                alt={`${memory.title} - Foto ${activePhotoIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Photo Counter Pill Badge (e.g. 📷 2/5) */}
              {photoList.length > 1 && (
                <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-xs pointer-events-none">
                  <Images className="w-3 h-3 text-[#A9C7B2]" />
                  <span>
                    {activePhotoIndex + 1}/{photoList.length}
                  </span>
                </div>
              )}

              {/* Navigation Arrows for Multi-photo */}
              {photoList.length > 1 && (
                <>
                  <button
                    onClick={handlePrevPhoto}
                    className="min-h-[36px] w-9 h-9 rounded-full bg-white/85 hover:bg-white text-[#253D2D] shadow-md absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all opacity-80 hover:opacity-100 active:scale-95 z-10"
                    title="Foto Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    className="min-h-[36px] w-9 h-9 rounded-full bg-white/85 hover:bg-white text-[#253D2D] shadow-md absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all opacity-80 hover:opacity-100 active:scale-95 z-10"
                    title="Foto Berikutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Bottom Dot Pagination Indicator */}
              {photoList.length > 1 && (
                <div className="absolute bottom-2.5 inset-x-0 flex items-center justify-center gap-1.5 pointer-events-none">
                  {photoList.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 shadow-xs ${
                        idx === activePhotoIndex
                          ? 'w-5 bg-white'
                          : 'w-1.5 bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              )}

              {/* Hover Zoom Prompt */}
              <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                <div className="p-2 rounded-full bg-white/90 text-[#2E4837] shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </>
          ) : (
            <MemoryArtwork type={memory.presetType} className="w-full h-full" />
          )}
        </div>

        {/* 5 MINI PHOTO THUMBNAILS ROW (If multiple photos) */}
        {photoList.length > 1 && (
          <div className="pt-2.5 flex items-center justify-between gap-1.5 overflow-x-auto no-scrollbar">
            {photoList.map((photoUrl, idx) => {
              const isActive = idx === activePhotoIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhotoIndex(idx)}
                  className={`relative flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    isActive
                      ? 'border-[#466551] ring-2 ring-[#466551]/30 scale-102 shadow-xs'
                      : 'border-[#DEEADE] opacity-60 hover:opacity-100'
                  }`}
                  title={`Lihat Foto ${idx + 1}`}
                >
                  <img
                    src={photoUrl}
                    alt={`Miniatur ${idx + 1}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-[#466551]/10 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Story & Details */}
        <div className="pt-3.5 space-y-2">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-[#52715C]">
            <MapPin className="w-3.5 h-3.5 text-[#6B8D76]" />
            <span className="font-medium">{memory.location}</span>
          </div>

          {/* Title & Story Narrative - Changes dynamically per active photo */}
          <div key={activePhotoIndex} className="space-y-1.5 animate-fade-in transition-all duration-300">
            <h3 className="text-base font-bold text-[#23352A] font-serif-romantic leading-snug">
              {activeTitle}
            </h3>

            <p className="text-xs text-[#4F6857] leading-relaxed font-sans-clean">
              {activeStory}
            </p>
          </div>
        </div>
      </article>

      {/* FULL IMAGE LIGHTBOX MODAL */}
      {showFullImage && hasPhotos && createPortal(
        <div
          className="fixed inset-0 w-screen h-screen min-h-[100dvh] z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-hidden animate-fade-in"
          onClick={() => setShowFullImage(false)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90dvh] bg-white rounded-3xl p-3 sm:p-4 shadow-2xl overflow-y-auto flex flex-col animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close & Counter */}
            <div className="flex items-center justify-between px-1 pb-2 shrink-0">
              <span className="text-xs font-semibold text-[#577561]">
                Foto {activePhotoIndex + 1} dari {photoList.length}
              </span>
              <button
                onClick={() => setShowFullImage(false)}
                className="w-8 h-8 rounded-full bg-[#EEF5EC] text-[#334E3B] flex items-center justify-center hover:bg-[#DEEBDC] active:scale-95 transition-all"
                title="Tutup"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Image with Navigation */}
            <div className="relative rounded-2xl overflow-hidden bg-black/95 flex items-center justify-center shrink-0 max-h-[42vh] sm:max-h-[50vh]">
              <img
                src={currentPhoto}
                alt={`${memory.title} - Foto ${activePhotoIndex + 1}`}
                className="max-h-[42vh] sm:max-h-[50vh] w-full object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />

              {photoList.length > 1 && (
                <>
                  <button
                    onClick={handlePrevPhoto}
                    className="min-h-[40px] w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white shadow-md absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all z-10"
                    title="Foto Sebelumnya"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNextPhoto}
                    className="min-h-[40px] w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white shadow-md absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center transition-all z-10"
                    title="Foto Berikutnya"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Modal Mini Thumbnails */}
            {photoList.length > 1 && (
              <div className="pt-2 flex items-center justify-center gap-1.5 overflow-x-auto no-scrollbar shrink-0">
                {photoList.map((photoUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePhotoIndex(idx)}
                    className={`w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === activePhotoIndex
                        ? 'border-[#466551] scale-105'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photoUrl}
                      alt={`Mini ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Details & Dynamic Story */}
            <div className="p-2 text-center shrink-0">
              <div key={activePhotoIndex} className="animate-fade-in transition-all duration-300">
                <h4 className="text-base font-bold text-[#23352A] font-serif-romantic">
                  {activeTitle}
                </h4>
                <p className="text-[11px] text-[#5D7A67] mt-0.5">
                  Foto {activePhotoIndex + 1} dari {photoList.length} · {memory.dateString} · {memory.location}
                </p>
                <div className="mt-2 p-2.5 rounded-xl bg-[#F4F8F3] border border-[#DEEADE] text-left">
                  <p className="text-xs text-[#35523E] leading-relaxed">
                    {activeStory}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowFullImage(false)}
              className="min-h-[44px] w-full py-2 bg-[#E6EFE5] text-[#2F4939] text-xs font-semibold rounded-xl hover:bg-[#D8E6D6] active:scale-98 transition-all shrink-0 mt-1"
            >
              Tutup Foto
            </button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};
