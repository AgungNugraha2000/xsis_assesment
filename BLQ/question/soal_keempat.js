function tampilkanBilanganPrima(n) {
  const bilanganPrima = [];

  // Fungsi untuk mengecek apakah suatu bilangan adalah prima
  function isPrima(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

  // Mencari n bilangan prima pertama
  let i = 2;
  while (bilanganPrima.length < n) {
    if (isPrima(i)) {
      bilanganPrima.push(i);
    }
    i++;
  }

  return bilanganPrima;
}

// Contoh penggunaan
const n = 10;
const bilanganPrimaPertama = tampilkanBilanganPrima(n);
console.log(
  `Bilangan prima pertama ${n} adalah: ${bilanganPrimaPertama.join(", ")}`
);
