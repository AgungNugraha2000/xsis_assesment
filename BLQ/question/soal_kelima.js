function tampilkanFibonacci(n) {
  const fibonacci = [0, 1];

  // Membuat deret Fibonacci
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
}

// Contoh penggunaan
const n = 10;
const bilanganFibonacciPertama = tampilkanFibonacci(n);
console.log(
  `Bilangan Fibonacci pertama ${n} adalah: ${bilanganFibonacciPertama.join(
    ", "
  )}`
);
