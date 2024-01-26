function cariMinMaxPenjumlahanKomponen(deret) {
  const jumlahKomponen = deret.length;
  let minimal = Infinity;
  let maksimal = -Infinity;

  // Menjumlahkan 4 komponen dan mencari nilai minimal dan maksimal
  for (let i = 0; i <= jumlahKomponen - 4; i++) {
    const penjumlahan = deret[i] + deret[i + 1] + deret[i + 2] + deret[i + 3];
    minimal = Math.min(minimal, penjumlahan);
    maksimal = Math.max(maksimal, penjumlahan);
  }

  return { minimal, maksimal };
}

const deretAngka = [1, 2, 4, 7, 8, 6, 9];
const { minimal, maksimal } = cariMinMaxPenjumlahanKomponen(deretAngka);

console.log(`Nilai Minimal: ${minimal}`);
console.log(`Nilai Maksimal: ${maksimal}`);
