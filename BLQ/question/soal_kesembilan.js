function generateDeretN(n) {
  const deret = [];

  for (let i = 1; i <= n; i++) {
    deret.push(i * n);
  }

  return deret;
}

// Contoh penggunaan
const n1 = 3;
const deret1 = generateDeretN(n1);
console.log(`N = ${n1} -> ${deret1.join(" ")}`);

const n2 = 4;
const deret2 = generateDeretN(n2);
console.log(`N = ${n2} -> ${deret2.join(" ")}`);

const n3 = 5;
const deret3 = generateDeretN(n3);
console.log(`N = ${n3} -> ${deret3.join(" ")}`);
