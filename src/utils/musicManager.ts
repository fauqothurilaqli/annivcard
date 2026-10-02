/**
 * Music Manager for Anggis Devaki - Menua Bersama
 * Uses YouTube IFrame API in the background (completely hidden from UI, no YouTube logos or frames)
 * with graceful fallback to Web Audio romantic acoustic synthesizer.
 */
import { romanticAudio } from './audioEngine';

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT: any;
  }
}

export type MusicSource = 'youtube' | 'synth' | 'custom';

export interface MusicState {
  isPlaying: boolean;
  currentTime: number;
  volume: number;
  isMuted: boolean;
  source: MusicSource;
}

type MusicListener = (state: MusicState) => void;

class HiddenMusicManager {
  private ytPlayer: any = null;
  private isYtReady: boolean = false;
  private isPlaying: boolean = false;
  private currentTime: number = 0;
  private volume: number = 0.8;
  private isMuted: boolean = false;
  private source: MusicSource = 'youtube';
  private timerId: number | null = null;
  private listeners: MusicListener[] = [];
  private customAudioEl: HTMLAudioElement | null = null;
  private isInitialized: boolean = false;

  constructor() {
    // YouTube video ID from the user: ZSq3zKWfGjw (Anggis Devaki - Menua Bersama)
    if (typeof window !== 'undefined') {
      this.initYouTube();
    }
  }

  private initYouTube() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    // Load YouTube IFrame API if not already present
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }

    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (previousReady) previousReady();
      this.mountPlayer();
    };

    if (window.YT && window.YT.Player) {
      this.mountPlayer();
    }
  }

  public mountPlayer() {
    if (this.ytPlayer || typeof window === 'undefined' || !window.YT?.Player) return;

    try {
      this.ytPlayer = new window.YT.Player('hidden-yt-audio-container', {
        height: '1',
        width: '1',
        videoId: 'ZSq3zKWfGjw',
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: () => {
            this.isYtReady = true;
            this.source = 'youtube';
            this.notify();
          },
          onStateChange: (event: { data: number }) => {
            // YT.PlayerState: PLAYING = 1, PAUSED = 2, ENDED = 0
            if (event.data === 1) {
              this.isPlaying = true;
              this.source = 'youtube';
              this.startTracking();
            } else if (event.data === 2) {
              this.isPlaying = false;
              this.stopTracking();
            } else if (event.data === 0) {
              // loop song
              if (this.ytPlayer?.seekTo) {
                this.ytPlayer.seekTo(0);
                this.ytPlayer.playVideo();
              }
            }
            this.notify();
          },
          onError: () => {
            // Fallback to piano synthesizer if blocked
            this.source = 'synth';
            if (this.isPlaying) {
              romanticAudio.start();
            }
            this.notify();
          },
        },
      });
    } catch {
      this.source = 'synth';
    }
  }

  private startTracking() {
    this.stopTracking();
    this.timerId = window.setInterval(() => {
      if (this.source === 'youtube' && this.ytPlayer?.getCurrentTime) {
        try {
          this.currentTime = this.ytPlayer.getCurrentTime() || 0;
          this.notify();
        } catch {
          // ignore
        }
      } else if (this.source === 'custom' && this.customAudioEl) {
        this.currentTime = this.customAudioEl.currentTime;
        this.notify();
      } else if (this.source === 'synth') {
        this.currentTime = romanticAudio.getElapsedTime();
        this.notify();
      }
    }, 200);
  }

  private stopTracking() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public subscribe(listener: MusicListener) {
    this.listeners.push(listener);
    listener(this.getState());
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  private notify() {
    const state = this.getState();
    this.listeners.forEach((l) => l(state));
  }

  public getState(): MusicState {
    return {
      isPlaying: this.isPlaying,
      currentTime: this.currentTime,
      volume: this.volume,
      isMuted: this.isMuted,
      source: this.source,
    };
  }

  public play() {
    this.initYouTube();

    if (this.source === 'custom' && this.customAudioEl) {
      this.customAudioEl.play();
      this.isPlaying = true;
      this.startTracking();
      this.notify();
      return;
    }

    if (this.isYtReady && this.ytPlayer?.playVideo) {
      try {
        this.ytPlayer.playVideo();
        this.isPlaying = true;
        this.source = 'youtube';
        this.startTracking();
        this.notify();
        return;
      } catch {
        // Fall through to synth fallback
      }
    }

    // Fallback to synthesized melody
    this.source = 'synth';
    romanticAudio.start();
    this.isPlaying = true;
    this.startTracking();
    this.notify();
  }

  public pause() {
    if (this.source === 'custom' && this.customAudioEl) {
      this.customAudioEl.pause();
    } else if (this.source === 'youtube' && this.ytPlayer?.pauseVideo) {
      try {
        this.ytPlayer.pauseVideo();
      } catch {
        // ignore
      }
    }

    romanticAudio.pause();
    this.isPlaying = false;
    this.stopTracking();
    this.notify();
  }

  public toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  public toggleMute() {
    this.isMuted = !this.isMuted;
    const effectiveVol = this.isMuted ? 0 : this.volume;

    if (this.ytPlayer?.setVolume) {
      try {
        if (this.isMuted) {
          this.ytPlayer.mute();
        } else {
          this.ytPlayer.unMute();
          this.ytPlayer.setVolume(effectiveVol * 100);
        }
      } catch {
        // ignore
      }
    }

    if (this.customAudioEl) {
      this.customAudioEl.volume = effectiveVol;
    }

    romanticAudio.setVolume(effectiveVol);
    this.notify();
  }

  public setCustomAudio(url: string, el: HTMLAudioElement) {
    this.pause();
    this.customAudioEl = el;
    this.customAudioEl.src = url;
    this.source = 'custom';
    this.play();
  }

  public switchToYouTube() {
    this.pause();
    this.source = 'youtube';
    this.play();
  }

  public seekTo(seconds: number) {
    this.currentTime = seconds;
    if (this.source === 'youtube' && this.ytPlayer?.seekTo) {
      try {
        this.ytPlayer.seekTo(seconds, true);
        if (!this.isPlaying) {
          this.play();
        }
      } catch {
        // ignore
      }
    } else if (this.source === 'custom' && this.customAudioEl) {
      this.customAudioEl.currentTime = seconds;
      if (!this.isPlaying) {
        this.play();
      }
    }
    this.notify();
  }
}

export const musicManager = new HiddenMusicManager();
