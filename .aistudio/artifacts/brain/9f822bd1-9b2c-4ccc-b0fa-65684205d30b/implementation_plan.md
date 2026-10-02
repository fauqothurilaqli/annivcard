# Website 1st Anniversary Romantis: Menua Bersama (Hijau Pastel)

Website kenangan romantis mobile-first yang didedikasikan untuk merayakan 1 tahun resmi berpacaran pada tanggal 3 Oktober. Mengusung palet warna hijau pastel (*soft sage*, matcha, *warm cream*) yang tenang dan elegan, dilengkapi perjalanan cinta 12 bulan (Bulan 1 - Bulan 12), surat cinta interaktif, penghitung waktu jadian, pemutar lagu *Anggis Devaki - Menua Bersama* dengan lirik romantis, serta fitur unggah foto kenangan.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> **Keputusan Desain & Fitur Utama:**
> - **Aesthetic Palette**: Hijau pastel alami (*soft sage green* `#6E8879`, *pale matcha* `#8FA89B`, *linen cream* `#F7F9F6`, *deep forest slate* `#26362E`). Dirancang khusus dengan tipografi anggun dan layout mobile yang nyaman untuk jempol (*thumb-friendly*).
> - **Format Perjalanan 12 Bulan**: Grid & Timeline kartu kenangan bergaya Polaroid modern untuk Bulan 1 hingga Bulan 12. Setiap bulan dilengkapi foto kenangan, tanggal, lokasi, dan catatan manis.
> - **Custom Photo & Note Editor**: Dilengkapi tombol "Ganti Foto Kenangan" yang intuitif di mobile, memungkinkan pengguna mengunggah foto asli mereka secara instan (tersimpan di *localStorage*) atau tetap menggunakan foto romantis bawaan.
> - **Lagu "Anggis Devaki - Menua Bersama"**: Pemutar musik sticky mobile yang elegan dengan visualizer equalizer, kontrol play/pause, dan showcase lirik romantis yang menyentuh hati.
> - **Surat Cinta Amplop Interaktif**: Surat perayaan 1 tahun dengan animasi amplop terbuka, efek kelopak bunga/hati berjatuhan, dan hitungan waktu kebersamaan (365 hari cinta).

---

## 1. Overview & Core Concept

- **What It Does**: Memberikan pengalaman digital yang personal dan mengharukan bagi pasangan saat membuka link di smartphone, mulai dari pembuka surat cinta, hitungan hari cinta, kilas balik foto & cerita setiap bulan selama setahun penuh, hingga lagu pengiring yang syahdu.
- **Target Audience**: Pacar tercinta yang membukanya di smartphone (iOS / Android), didesain dengan navigasi satu tangan (*thumb-friendly*), animasi lembut, dan teks yang mudah dibaca.
- **Key Value**: Mengubah memori 1 tahun menjadi hadiah digital abadi yang estetik, rapi, dan bisa disimpan atau disesuaikan foto aslinya kapan saja.

---

## 2. User Experience & Visual Design

### Key User Flows

1. **The Romantic Opening (Hero)**:
   - Sambutan hangat dengan nama pasangan, tanggal jadian resmi (3 Oktober), hitungan waktu kebersamaan (365 Hari, 8.760 Jam, 525.600 Menit).
   - Tombol "Buka Kenangan Kita & Putar Lagu" yang langsung mengalunkan melodi romantis.

2. **12 Months Memory Journey (Bulan 1 - Bulan 12)**:
   - Bagian utama berisi 12 kartu linimasa dari Bulan Pertama hingga Bulan Kedua Belas.
   - Filter cepat tab per kuartal (Bulan 1-3, Bulan 4-6, Bulan 7-9, Bulan 10-12) atau scroll vertikal lancar.
   - Setiap kartu menampilkan:
     - Foto kenangan berestetika lembut dengan efek rounded-2xl dan frame polaroid halus.
     - Judul momen (misal: "Awal Segalanya", "Kencan Hujan Pertama", "Setengah Tahun Penuh Tawa").
     - Tanggal & lokasi kencan.
     - Catatan rasa syukur dan rasa sayang.
     - Tombol ganti foto cepat (bisa langsung pilih foto dari galeri HP pacar/pengguna).

3. **Surat Cinta & Ucapan 1 Tahun (The Love Letter)**:
   - Amplop surat interaktif yang dapat diklik untuk terbuka dengan efek kertas terangkat.
   - Berisi ucapan mendalam tentang rasa syukur telah bertahan, berkembang, dan saling mencintai selama 365 hari.
   - Pesan komitmen untuk terus melangkah dan menua bersama.

4. **Floating Music Player & Lyrics Bar**:
   - Pemutar lagu di bagian bawah dengan tinggi proporsional (<15% viewport height).
   - Menampilkan judul lagu *Anggis Devaki - Menua Bersama*, tombol play/pause, visualizer gelombang suara, dan bar lirik yang mengalir lembut.

5. **Interaksi Kejutan Tambahan**:
   - Efek jatuhan partikel kelopak bunga/hati lembut (bisa dinyalakan/dimatikan).
   - "Top 10 Alasan Kenapa Aku Memilihmu" (Kartu geser interaktif).
   - "Kotak Janji & Harapan Masa Depan" (Wishlist kita untuk tahun kedua).

### Visual Identity & Theme Tokens

- **Aesthetic Direction**: Soft Romantic Editorial & Warm Botanical.
- **Color Palette (60-30-10 Rule)**:
  - *Canvas (60%)*: `--color-surface-bg: #F4F7F4` (Lembut, tenang, bersih).
  - *Structure (30%)*: `--color-card-bg: #FFFFFF` & `#E9EFE9` (Border halus `rgba(74, 98, 83, 0.12)`).
  - *Accent (10%)*: `--color-accent: #4A6E59` dan *Soft Sage*: `#7A9A85`, *Rose Blush*: `#E8B4B8` untuk aksen cinta.
  - *Typography*: Serif editorial untuk judul display dipadukan dengan sans-serif modern yang nyaman (`Plus Jakarta Sans`).

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Audio Playback Strategy**:
  - *Chosen Approach*: Audio engine yang memuat audio stream lagu *Menua Bersama* dengan fallback synthesizer melodi piano Web Audio API berkualitas tinggi jika audio stream diblokir autoplay browser mobile.
  - *Why*: Browser mobile membatasi autoplay suara sebelum user berinteraksi. Tombol pembuka "Buka Kenangan & Putar Lagu" memastikan pemutaran lagu berjalan mulus tanpa kendala autoplay.

- **Decision 2: LocalStorage Photo Customization**:
  - *Chosen Approach*: Menyediakan foto default beresolusi tinggi bertema pasangan estetis untuk seluruh 12 bulan, sekaligus menyediakan fitur unggah foto dari HP yang disimpan di `localStorage` per-item base64 terkompresi.
  - *Why*: Pengguna bisa langsung membagikan link ke pacar dengan tampilan yang sudah sangat cantik, atau memasukkan foto asli momen mereka berdua dalam hitungan detik langsung dari HP.

---

## 4. Technical Architecture & Data Strategy

### Architecture & Component Diagram

```
┌────────────────────────────────────────────────────────┐
│                   App.tsx (Main Root)                  │
│  - Couple State & Names (Customizable)                 │
│  - Anniversary Date Engine (Countdown & Days Counter)  │
│  - Audio Player Engine (Anggis Devaki - Menua Bersama) │
└──────────────────────────┬─────────────────────────────┘
                           │
       ┌───────────────────┼───────────────────┐
       ▼                   ▼                   ▼
┌──────────────┐   ┌──────────────┐   ┌────────────────┐
│  HeroHeader  │   │ LetterModal  │   │  AudioPlayer   │
│ - Anniversary│   │ - Amplop 3D  │   │ - Play/Pause   │
│   Counter    │   │ - Ucapan     │   │ - Floating bar │
│ - Petals FX  │   │   Puitis     │   │ - Lirik Lagu   │
└──────────────┘   └──────────────┘   └────────────────┘
       │
       ▼
┌────────────────────────────────────────────────────────┐
│               JourneyTimeline (12 Bulan)               │
│  - MonthCard (Bulan 1 hingga Bulan 12)                 │
│  - Image Uploader Modal (Simpan foto kenangan asli)    │
│  - Quarter Filter & Quick Navigator                    │
└────────────────────────────────────────────────────────┘
       │
       ▼
┌────────────────────────────────────────────────────────┐
│              Reasons & Future Wishes                   │
│  - 10 Alasan Aku Mencintaimu (Carousel Kartu)          │
│  - Harapan Menua Bersama (Interactive Wishes)          │
└────────────────────────────────────────────────────────┘
```
