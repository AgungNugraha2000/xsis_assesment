// Panjang awal lilin
const panjangLilin = [3, 3, 9, 6, 7, 8, 23];
const deretFibonacci = [1, 1, 2, 3, 5, 8, 13];

// Fungsi untuk menghitung lama waktu meleleh
function lamaMeleleh(panjangAwal, lajuMeleleh) {
  return panjangAwal / lajuMeleleh;
}

// Array untuk menyimpan lama waktu meleleh masing-masing lilin
const listWaktu = panjangLilin.map((panjang, index) =>
  lamaMeleleh(panjang, deretFibonacci[index])
);

// Cari index waktu paling singkat
const indexMinWaktu = listWaktu.indexOf(Math.min(...listWaktu));

console.log(`Index Waktu : ${listWaktu}`);
console.log(
  `Lilin yang paling pertama habis meleleh adalah lilin ke-${
    indexMinWaktu + 1
  } dengan waktu ${listWaktu[indexMinWaktu]}`
);
