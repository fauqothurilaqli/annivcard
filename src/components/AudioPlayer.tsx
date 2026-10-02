import React, { useEffect, useRef } from 'react';
import { musicManager } from '../utils/musicManager';

export const AudioPlayer: React.FC = () => {
  const htmlAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Mount the background YouTube player in active DOM
    musicManager.mountPlayer();
  }, []);

  return (
    <>
      {/* 
        Completely hidden background YouTube audio container:
        Kept in active layout (bottom-right 2x2px, opacity 0.01) so browser doesn't throttle background playback.
        Zero visible UI, no lyrics.
      */}
      <div
        id="hidden-yt-audio-container"
        className="fixed bottom-0 right-0 w-[2px] h-[2px] opacity-[0.01] pointer-events-none overflow-hidden z-[-1]"
        aria-hidden="true"
      />

      {/* Hidden HTML5 audio element for optional fallback */}
      <audio
        ref={htmlAudioRef}
        className="hidden"
        onEnded={() => musicManager.pause()}
      />
    </>
  );
};
