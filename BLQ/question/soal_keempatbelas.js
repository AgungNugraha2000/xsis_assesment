function geserDeret(deret, n) {
  const geseran = deret.slice(n);
  const hasil = geseran.concat(deret.slice(0, n));
  return hasil;
}

const deretAwal = [3, 9, 0, 7, 1, 2, 4];

const hasil1 = geserDeret(deretAwal, 3);
console.log(`N = 3 -> ${hasil1.join(" ")}`);

const hasil2 = geserDeret(deretAwal, 1);
console.log(`N = 1 -> ${hasil2.join(" ")}`);
