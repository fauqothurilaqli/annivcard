export interface MonthMemory {
  monthNumber: number; // 1 to 12
  monthLabel: string; // e.g. "Bulan 1"
  dateString: string; // e.g. "3 Oktober 2025"
  title: string; // e.g. "Hari Pertama & Awal Cerita Kita"
  location: string; // e.g. "Kedai Kopi Sudut Kota"
  story: string; // Deep personal memory text
  highlight: string; // Brief takeaway tag e.g. "Kencan Pertama"
  photoUrl?: string; // Single photo fallback
  photos?: string[]; // Array of up to 5 photos per month!
  photoTitles?: string[]; // Judul tersendiri untuk setiap foto (otomatis berubah saat berganti foto)
  photoStories?: string[]; // Deskripsi tersendiri untuk setiap foto (otomatis berubah saat berganti foto)
  presetType: 'coffee' | 'umbrella' | 'movie' | 'park' | 'stargaze' | 'beach' | 'sunset' | 'dinner' | 'candid' | 'gift' | 'travel' | 'anniversary';
  likesCount: number;
}

export interface CoupleProfile {
  senderName: string;
  partnerName: string;
  anniversaryDate: string; // "2025-10-03"
  loveLetterText: string;
}

export interface LoveReason {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FutureWish {
  id: string;
  text: string;
  completed: boolean;
  category: string;
}

