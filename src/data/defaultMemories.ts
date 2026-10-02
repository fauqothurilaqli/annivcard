import { MonthMemory, CoupleProfile, LoveReason, FutureWish } from '../types';

/**
 * PANDUAN MENGEDIT DATA SURAT & NAMA LEWAT CODE:
 * ----------------------------------------------------
 * - senderName: Nama Anda (pengirim surat / tanda tangan)
 * - partnerName: Nama panggilan pasangan tercinta
 * - anniversaryDate: Tanggal resmi jadian (format: 'YYYY-MM-DD')
 * - loveLetterText: Kalimat / isi surat cinta Anda secara lengkap
 */
export const INITIAL_COUPLE_PROFILE: CoupleProfile = {
  senderName: 'Thuril',
  partnerName: 'Septi',
  anniversaryDate: '2025-10-03',
  loveLetterText: `Selamat satu tahun jadian, Sayangku tercinta.

Rasanya baru kemarin tanggal 3 Oktober kita duduk berdua dan memutuskan untuk memulai cerita ini bersama. Tak terasa, 365 hari sudah kita lewati—dengan segala tawa yang renyah, candaan konyol, pelukan hangat yang menenangkan, hingga hari-hari ketika kita harus belajar mengalah dan saling memahami.

Terima kasih sudah memilih untuk tetap tinggal. Terima kasih sudah menerima kekuranganku, memeluk kelemahanku, dan menjadi alasan terbesar mengapa aku selalu ingin menjadi pribadi yang lebih baik setiap hari.

Seperti lagu Anggis Devaki yang selalu mengingatkanku padamu: aku benar-benar ingin menua bersamamu. Melewati musim demi musim, suka dan duka, hingga rambut memutih nanti.

Aku mencintaimu, hari ini, esok, dan seterusnya. Selamat 1 tahun pacaran, cintaku! ❤️🌿`,
};

/**
 * PANDUAN MENGISI 5 FOTO PER BULAN LEWAT CODE:
 * ----------------------------------------------------
 * - Setiap bulan kini memiliki array `photos` yang berisi 5 foto kenangan!
 * - Ganti URL di dalam array `photos` di bawah dengan link/URL foto asli kalian berdua.
 * - Pengunjung bisa menggeser (*swipe*), menekan panah kiri-kanan, atau mengetuk 
 *   5 miniatur foto di bawahnya untuk melihat tiap foto secara bergantian.
 * - Ketuk foto untuk membuka pratinjau layar penuh (lightbox).
 */
export const INITIAL_MEMORIES: MonthMemory[] = [
  {
    monthNumber: 1,
    monthLabel: 'Bulan 1',
    dateString: '3 Oktober 2025',
    title: 'Kencan Pertama di Xiyue & Awal Kisah Kita',
    location: 'Kedai Es Krim Xiyue',
    story: 'Kencan pertama kita di Xiyue. Duduk berdampingan, menikmati manisnya es krim, dan senyum manismu yang membuat hatiku berdebar tak karuan. Foto-foto awal kebersamaan kita, obrolan larut malam lewat video call, pesan-pesan manismu, sampai momen lucu saat kita video call bareng si kucing oren kesayangan.',
    highlight: 'Kencan Pertama Xiyue',
    photos: [
      '/photos/jempol.jpeg',
      '/photos/firstpeluk.jpeg',
      '/photos/vchobi.jpeg',
      '/photos/vckerja.jpeg',
      '/photos/ss.jpeg',
    ],
    photoTitles: [
      'Date pertama kita di Xiyuee',
      'Mo pelukk',
      'Vc with hobii',
      'jempol kak',
      'my biutipul gril',
    ],
    photoStories: [
      'Date pertama kita di Xiyuee, disini aku deg-degan banget asli, tapi berusaha cool makanya jantungku aman ehehehehe.',
      'ini chat minta peluk pertama kita dan sangattt gemesssss',
      'pidiocall cama hompol',
      'Jempolnya pun cakepp babyy.',
      'my kiyut babyy.',
    ],
    presetType: 'coffee',
    likesCount: 14,
  },
  {
    monthNumber: 2,
    monthLabel: 'Bulan 2',
    dateString: 'November 2025',
    title: 'Payung Berdua di Bawah Hujan',
    location: 'Trotoar Jalan Kenanga',
    story: 'ws',
    highlight: 'Hujan Romantis',
    photos: [
      '/photos/date pertama xiyue.jpeg',
      '/photos/kafekinta.jpeg',
      '/photos/kiss.jpeg',
      '/photos/bunga.jpeg',
      '/photos/potosop.jpeg',
    ],
    photoTitles: [
      'Payung Berdua di Bawah Hujan',
      'Bahu yang Saling Bersentuhan',
      'Secangkir Cokelat Hangat',
      'Langkah Kaki di Genangan Kota',
      'Menatap Hujan yang Mereda',
    ],
    photoStories: [
      'Date pertama kita di Xiyuee, disini aku deg-degan banget asli, tapi berusaha cool makanya jantungku aman ehehehehe.',
      'ini chat minta peluk pertama kita dan sangattt gemesssss.',
      'Bahu kita saling bersentuhan lembut untuk menghindari tetesan air hujan di sepanjang trotoar.',
      'Secangkir cokelat hangat setelah menembus dinginnya hujan, ditemani senyum malumu.',
      'Langkah kaki kita di atas genangan air yang memantulkan kerlip lampu kota yang syahdu.',
      'Momen kita berdua menatap rintik hujan yang perlahan reda, penuh rasa syukur.',
    ],
    presetType: 'umbrella',
    likesCount: 19,
  },
  {
    monthNumber: 3,
    monthLabel: 'Bulan 3',
    dateString: 'Desember 2025',
    title: 'Nonton Bioskop & Cerita Sampai Larut',
    location: 'Cinema & Kedai Martabak',
    story: 'Filmnya seru, tapi momen yang paling berharga justru obrolan kita setelahnya di parkiran. Berbagi popcorn dan menceritakan impian masa kecil kita hingga larut malam.',
    highlight: 'Movie Date',
    photos: [
      '/photos/vcbobo1.jpeg',
      '/photos/vcbobo2.jpeg',
      '/photos/vcmam.jpeg',
      '/photos/vckerjades.jpeg',
      '/photos/vchobides.jpeg',
    ],
    photoStories: [
      'Tiket bioskop film kesukaan kita dan popcorn karamel yang kita nikmati berdua.',
      'Di dalam studio yang dingin, genggaman tanganmu membuat segalanya terasa hangat.',
      'Lampu bioskop mulai menyala, menatap wajahmu yang terharu selesai nonton.',
      'Makan martabak manis berdua di pinggir jalan sambil membahas jalan cerita film.',
      'Obrolan panjang tentang impian masa kecil kita di bawah taburan bintang malam.',
    ],
    presetType: 'movie',
    likesCount: 22,
  },
  {
    monthNumber: 4,
    monthLabel: 'Bulan 4',
    dateString: 'Januari 2026',
    title: 'Menyambut Awal Tahun Bersama',
    location: 'Balkon Atas & Kembang Api',
    story: 'Tahun baru pertama yang kulalui dengan status sebagai milikmu. Saat langit malam berpendar kembang api, doa pertamaku adalah semoga kita selalu bergandengan tangan.',
    highlight: 'Tahun Baru Berdua',
    photos: [
      '/photos/1.jpeg',
      '/photos/2.jpeg',
      '/photos/3.jpeg',
      '/photos/4.jpeg',
      '/photos/5.jpeg',
    ],
    presetType: 'stargaze',
    likesCount: 28,
  },
  {
    monthNumber: 5,
    monthLabel: 'Bulan 5',
    dateString: 'Februari 2026',
    title: 'Berdamai & Belajar Memahami',
    location: 'Taman Pinggir Danau',
    story: 'Bulan di mana kita sempat berbeda pendapat. Tapi kita belajar bahwa cinta bukan tentang siapa yang menang, melainkan tentang saling merengkuh dan menurunkan ego.',
    highlight: 'Makin Kuat',
    photos: [
      '/photos/motor.jpeg',
      '/photos/motor2.jpeg',
      '/photos/depanrumah.jpeg',
      '/photos/bolos.jpeg',
      '/photos/rumahemak.jpeg',
    ],
    presetType: 'park',
    likesCount: 17,
  },
  {
    monthNumber: 6,
    monthLabel: 'Bulan 6',
    dateString: 'Maret 2026',
    title: 'Setengah Tahun Penuh Syukur',
    location: 'Piknik Santai di Kebun Rumput',
    story: 'Enam bulan kebersamaan. Kita menggelar kain piknik sederhana, membawa camilan kesukaanmu, dan membiarkan angin sore berbisik tentang rasa syukur yang melimpah.',
    highlight: 'Setengah Tahun',
    photos: [
      '/photos/lebaran.jpeg',
      '/photos/lebaran2.jpeg',
      '/photos/lebaran3.jpeg',
      '/photos/ustadturil.jpeg',
      '/photos/vclebaran.jpeg',
    ],
    presetType: 'dinner',
    likesCount: 31,
  },
  {
    monthNumber: 7,
    monthLabel: 'Bulan 7',
    dateString: 'April 2026',
    title: 'Deburan Ombak & Angin Pantai',
    location: 'Pesisir Pantai Senja',
    story: 'Melihatmu tersenyum dengan latar belakang ombak dan matahari tenggelam adalah salah satu pemandangan terindah yang pernah kulihat seumur hidupku.',
    highlight: 'Sunset di Pantai',
    photos: [
      '/photos/ngakak.jpeg',
      '/photos/sayangtia.jpeg',
      '/photos/nusadua.jpeg',
      '/photos/motor55.jpeg',
      '/photos/alfamart.jpeg',
    ],
    presetType: 'beach',
    likesCount: 26,
  },
  {
    monthNumber: 8,
    monthLabel: 'Bulan 8',
    dateString: 'Mei 2026',
    title: 'Saling Menenangkan Saat Lelah',
    location: 'Teras Rumah Sore Hari',
    story: 'Hari-hari yang cukup melelahkan karena kesibukan masing-masing. Namun hanya dengan mendengarkan suaramu dan bersandar sebentar, semua beban terasa menguap.',
    highlight: 'Rumah Ternyaman',
    photos: [
      '/photos/cantik.jpeg',
      '/photos/ganteng.jpeg',
      '/photos/cantik2.jpeg',
      '/photos/ganteng2.jpeg',
      '/photos/cantik3.jpeg',
    ],
    presetType: 'sunset',
    likesCount: 25,
  },
  {
    monthNumber: 9,
    monthLabel: 'Bulan 9',
    dateString: 'Juni 2026',
    title: 'Foto Candid Paling Lucu',
    location: 'Kedai Es Krim Gelato',
    story: 'Aku mengambil foto candid saat kamu belepotan es krim dan tertawa terbahak-bahak. Di mataku, kamu selalu menjadi manusia paling menggemaskan dan tulus di muka bumi.',
    highlight: 'Tawa Terlucu',
    photos: [
      '/photos/bakso.jpeg',
      '/photos/rebahan.jpeg',
      '/photos/monyong.jpeg',
      '/photos/selfi.jpeg',
      '/photos/monyonglagi.jpeg',
    ],
    presetType: 'candid',
    likesCount: 35,
  },
  {
    monthNumber: 10,
    monthLabel: 'Bulan 10',
    dateString: 'Juli 2026',
    title: 'Kejutan Kecil yang Menghangatkan',
    location: 'Kafe Tempat Favorit',
    story: 'Bukan hadiah yang mewah, tapi caramu selalu mengingat hal-hal kecil yang kusukai membuatku menyadari betapa beruntungnya aku dicintai oleh seseorang sepertimu.',
    highlight: 'Perhatian Tulus',
    photos: [
      '/photos/tampol.jpeg',
      '/photos/tersiksa.jpeg',
      '/photos/selat.jpeg',
      '/photos/datericis.jpeg',
      '/photos/pulang.jpeg',
    ],
    presetType: 'gift',
    likesCount: 29,
  },
  {
    monthNumber: 11,
    monthLabel: 'Bulan 11',
    dateString: 'Agustus 2026',
    title: 'Perjalanan Singkat Berdua',
    location: 'Jalanan Berkelok & Playlist Kita',
    story: 'Road trip santai sambil menyanyikan lagu-lagu favorit kita di mobil. Menikmati pemandangan hijau dan merasa sangat damai karena kamu duduk di sebelahku.',
    highlight: 'Road Trip Manis',
    photos: [
      'photos/bjorka.jpeg',
      'photos/11.jpeg',
      'photos/12.jpeg',
      'photos/13.jpeg',
      'photos/14.jpeg',
    ],
    presetType: 'travel',
    likesCount: 33,
  },
  {
    monthNumber: 12,
    monthLabel: 'Bulan 12',
    dateString: 'September - 3 Oktober 2026',
    title: 'Satu Tahun Penuh Cinta: Menua Bersama',
    location: 'Di Sini, Selalu di Hatimu',
    story: 'Genap 365 hari kita bersama. Satu tahun yang membuktikan bahwa rasa sayang ini bukan sekadar kata, melainkan janji untuk terus merawat dan menua bersama.',
    highlight: '1st Anniversary!',
    photos: [
      '/photos/blindbox.jpeg',
      '/photos/kafebedugul.jpeg',
      '/photos/belakang.jpeg',
      '/photos/kelinci.jpeg',
      '/photos/bawakelinci.jpeg',
    ],
    presetType: 'anniversary',
    likesCount: 52,
  },
];

export const INITIAL_REASONS: LoveReason[] = [
  {
    id: 1,
    title: 'Senyumanmu yang Menenangkan',
    description: 'Setiap kali hariku berat, senyuman dan binar matamu selalu berhasil mengembalikan energi dan ketenanganku.',
    icon: 'smile',
  },
  {
    id: 2,
    title: 'Ketulusan Hatimu',
    description: 'Caramu memperlakukan orang lain dengan ramah dan lembut selalu membuatku bangga dan kagum.',
    icon: 'heart',
  },
  {
    id: 3,
    title: 'Tawa Lepas Tanpa Jaim',
    description: 'Ketika kamu tertawa terbahak-bahak saat bersamaku, itu adalah melodi terindah yang tak pernah membosankan.',
    icon: 'sparkles',
  },
  {
    id: 4,
    title: 'Mendengarkan Ceritaku',
    description: 'Kamu selalu sabar mendengarkan celotehanku, bahkan untuk hal-hal sepele yang tidak begitu penting.',
    icon: 'message',
  },
  {
    id: 5,
    title: 'Pelukan Paling Hangat',
    description: 'Tempat paling aman di seluruh dunia adalah saat berada di dalam pelukanmu.',
    icon: 'shield',
  },
  {
    id: 6,
    title: 'Caramu Merawat Hal-Hal Kecil',
    description: 'Kamu mengingat makanan kesukaanku, kebiasaan kecilku, dan selalu mengingatkanku untuk istirahat.',
    icon: 'gift',
  },
  {
    id: 7,
    title: 'Bisa Jadi Diri Sendiri',
    description: 'Di depanmu, aku tidak perlu berpura-pura menjadi orang lain. Aku merasa utuh dan diterima apa adanya.',
    icon: 'user',
  },
  {
    id: 8,
    title: 'Selalu Saling Mendukung',
    description: 'Kamu adalah pendukung nomor satuku dalam menggapai mimpi dan cita-citaku.',
    icon: 'star',
  },
  {
    id: 9,
    title: 'Sabar Mengajariku Banyak Hal',
    description: 'Kedewasaanmu membantuku melihat sudut pandang baru dan membuatku tumbuh menjadi orang yang lebih sabar.',
    icon: 'feather',
  },
  {
    id: 10,
    title: 'Karena Kamu adalah Kamu',
    description: 'Dari sekian miliar orang di dunia, hatiku memilihmu dan selalu bersyukur atas takdir mempertemukan kita.',
    icon: 'infinity',
  },
];

export const INITIAL_WISHES: FutureWish[] = [
  { id: 'w1', text: 'Piknik santai di taman rumput saat cuaca cerah', completed: false, category: 'Kencan' },
  { id: 'w2', text: 'Mencoba resep masakan baru berdua di akhir pekan', completed: false, category: 'Aktivitas' },
  { id: 'w3', text: 'Liburan singkat ke tempat yang belum pernah kita datangi', completed: false, category: 'Petualangan' },
  { id: 'w4', text: 'Bikin photobook kenangan fisik dari foto 1 tahun ini', completed: false, category: 'Kenangan' },
  { id: 'w5', text: 'Menonton konser musisi favorit kita berdua bersama', completed: false, category: 'Hiburan' },
  { id: 'w6', text: 'Tetap saling memeluk dan berpelukan erat setiap kali lelah', completed: true, category: 'Kebiasaan' },
  { id: 'w7', text: 'Terus menjaga komitmen dan menua bersama hingga bertahun-tahun ke depan', completed: false, category: 'Masa Depan' },
];

export const SONG_LYRICS = [
  { time: 0, text: '♪ Intro: Anggis Devaki - Menua Bersama ♪' },
  { time: 21, text: 'Awal kita memulai kisah' },
  { time: 27, text: 'Banyak yang tak suka' },
  { time: 33, text: 'Kini lihat sejauh mana' },
  { time: 39, text: 'Kita melangkah' },
  { time: 46, text: 'Bersamamu dunia mudah' },
  { time: 51, text: 'Untuk ku lalui' },
  { time: 57, text: 'Tetaplah di sini dan slalu' },
  { time: 65, text: 'Jadilah tempatku tuk berbagi' },
  { time: 71, text: 'Di kala sedih dan senang hatiku' },
  { time: 78, text: 'Karena takkan ada yang mengerti aku' },
  { time: 85, text: 'Selain dirimu' },
  { time: 92, text: 'Ku ingin kau slalu menemani' },
  { time: 99, text: 'Dan jadi bagian cerita hidup ini slamanya' },
  { time: 108, text: 'Hingga kita berdua menua bersama' },
  { time: 119, text: 'Hm-hm-hm...' },
  { time: 131, text: 'Entah apa jadinya jika' },
  { time: 136, text: 'Hidupku tanpamu' },
  { time: 142, text: 'Bagai langit biru' },
  { time: 147, text: 'Tertutup awan sendu pudar kelabu' },
  { time: 154, text: 'Bersamamu dunia mudah untuk ku lalui' },
  { time: 161, text: 'Tetaplah di sini dan slalu' },
  { time: 168, text: 'Jadilah tempatku tuk berbagi' },
  { time: 175, text: 'Di kala sedih dan senang hatiku' },
  { time: 182, text: 'Karena takkan ada yang mengerti aku' },
  { time: 189, text: 'Selain dirimu' },
  { time: 196, text: 'Ku ingin kau slalu menemani' },
  { time: 202, text: 'Dan jadi bagian cerita hidup ini slamanya' },
  { time: 211, text: 'Hingga kita berdua menua bersama' },
  { time: 221, text: 'Jadilah tempatku tuk berbagi' },
  { time: 226, text: 'Di kala sedih dan senang hatiku' },
  { time: 231, text: 'Karena takkan ada yang mengerti aku' },
  { time: 235, text: 'Selain dirimu' },
  { time: 240, text: 'Ku ingin kau slalu menemani' },
  { time: 246, text: 'Dan jadi bagian cerita hidup ini slamanya' },
  { time: 253, text: 'Hingga kita berdua menua bersamah' },
  { time: 260, text: 'Sedih dan senang hatiku' },
  { time: 264, text: 'Takkan ada yang mengerti aku' },
  { time: 268, text: 'Selain dirimu' },
  { time: 272, text: 'Menualah bersama ❤️🌿' },
];

