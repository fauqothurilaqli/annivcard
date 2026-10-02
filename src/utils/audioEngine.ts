/**
 * Audio Engine for "Anggis Devaki - Menua Bersama"
 * Provides Web Audio API synthesized acoustic piano & celesta romantic ballad arrangement,
 * with audio visualizer analyzer, volume control, and play/pause state.
 */

// Note frequencies for acoustic piano romantic melody (Menua Bersama theme)
const NOTE_FREQS: Record<string, number> = {
  'G3': 196.00, 'A3': 220.00, 'B3': 246.94, 'C4': 261.63, 'D4': 293.66,
  'E4': 329.63, 'F#4': 369.99, 'G4': 392.00, 'A4': 440.00, 'B4': 493.88,
  'C5': 523.25, 'D5': 587.33, 'E5': 659.25, 'F#5': 739.99, 'G5': 783.99,
};

interface MelodyStep {
  notes: string[];
  duration: number; // in seconds
}

// Melody sequence representing acoustic piano chords & romantic lead for "Menua Bersama"
const BALLAD_SEQUENCE: MelodyStep[] = [
  // Intro - Arpeggio G - D - Em - C
  { notes: ['G3', 'D4', 'B4'], duration: 1.2 },
  { notes: ['D4', 'G4', 'D5'], duration: 1.2 },
  { notes: ['E4', 'B4', 'G5'], duration: 1.4 },
  { notes: ['C4', 'G4', 'E5'], duration: 1.4 },

  // "Kuingin menua bersamamu..."
  { notes: ['G3', 'B4', 'D5'], duration: 0.8 },
  { notes: ['D4', 'G4', 'B4'], duration: 0.8 },
  { notes: ['E4', 'B4', 'G4'], duration: 1.2 },
  { notes: ['C4', 'E4', 'G4', 'C5'], duration: 1.4 },

  // "Menghabiskan sisa waktu..."
  { notes: ['D4', 'F#4', 'A4'], duration: 0.9 },
  { notes: ['E4', 'G4', 'B4'], duration: 0.9 },
  { notes: ['C4', 'E4', 'G4'], duration: 1.2 },
  { notes: ['D4', 'A4', 'F#5'], duration: 1.4 },

  // "Berdua denganmu, lewati suka dan duka..."
  { notes: ['G3', 'D4', 'B4'], duration: 0.8 },
  { notes: ['B3', 'G4', 'D5'], duration: 0.8 },
  { notes: ['C4', 'E4', 'C5'], duration: 1.0 },
  { notes: ['D4', 'F#4', 'D5'], duration: 1.2 },
  { notes: ['E4', 'G4', 'B4', 'E5'], duration: 1.5 },

  // "Hingga rambut memutih nanti..."
  { notes: ['C4', 'E4', 'G4'], duration: 0.9 },
  { notes: ['D4', 'F#4', 'A4'], duration: 0.9 },
  { notes: ['B3', 'D4', 'G4', 'D5'], duration: 1.4 },
  { notes: ['E4', 'G4', 'B4'], duration: 1.2 },

  // "Cinta ini kan abadi..."
  { notes: ['C4', 'G4', 'C5'], duration: 1.0 },
  { notes: ['D4', 'A4', 'D5'], duration: 1.2 },
  { notes: ['G3', 'D4', 'G4', 'B4'], duration: 2.0 },
];

export class RomanticAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private currentStepIndex: number = 0;
  private timerId: number | null = null;
  private masterGain: GainNode | null = null;
  private analyser: AnalyserNode | null = null;
  private volume: number = 0.7;
  private onPlaybackUpdate?: (time: number, isPlaying: boolean) => void;
  private elapsedTime: number = 0;
  private totalDuration: number = 55; // cycle duration in seconds

  constructor() {
    // Lazy init on first user interaction
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;

      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setUpdateListener(cb: (time: number, isPlaying: boolean) => void) {
    this.onPlaybackUpdate = cb;
  }

  public getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  private playTone(freq: number, duration: number, isBass: boolean = false) {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    // Use gentle triangle/sine waves for warm acoustic piano / celesta timbre
    osc.type = isBass ? 'triangle' : 'sine';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Warm envelope
    const now = this.ctx.currentTime;
    const attack = isBass ? 0.04 : 0.02;
    const decay = duration * 0.7;

    noteGain.gain.setValueAtTime(0, now);
    noteGain.gain.linearRampToValueAtTime(isBass ? 0.18 : 0.12, now + attack);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration + decay);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + duration + decay);
  }

  private scheduleNextStep() {
    if (!this.isPlaying) return;

    const step = BALLAD_SEQUENCE[this.currentStepIndex];
    step.notes.forEach((noteName, idx) => {
      const freq = NOTE_FREQS[noteName];
      if (freq) {
        // Slight stagger for natural piano finger arpeggiation
        setTimeout(() => {
          if (this.isPlaying) {
            this.playTone(freq, step.duration, idx === 0 && freq < 250);
          }
        }, idx * 45);
      }
    });

    const stepDurationMs = step.duration * 1000;
    this.elapsedTime += step.duration;
    if (this.elapsedTime >= this.totalDuration) {
      this.elapsedTime = 0;
    }

    if (this.onPlaybackUpdate) {
      this.onPlaybackUpdate(this.elapsedTime, true);
    }

    this.currentStepIndex = (this.currentStepIndex + 1) % BALLAD_SEQUENCE.length;

    this.timerId = window.setTimeout(() => {
      this.scheduleNextStep();
    }, stepDurationMs);
  }

  public start() {
    this.initContext();
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.scheduleNextStep();

    if (this.onPlaybackUpdate) {
      this.onPlaybackUpdate(this.elapsedTime, true);
    }
  }

  public pause() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.onPlaybackUpdate) {
      this.onPlaybackUpdate(this.elapsedTime, false);
    }
  }

  public toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.start();
    }
  }

  public setVolume(val: number) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  public getVolume(): number {
    return this.volume;
  }

  public getPlayingState(): boolean {
    return this.isPlaying;
  }

  public getElapsedTime(): number {
    return this.elapsedTime;
  }
}

export const romanticAudio = new RomanticAudioEngine();
