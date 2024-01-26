function hitungMean(arr) {
  const jumlah = arr.reduce((total, nilai) => total + nilai, 0);
  return jumlah / arr.length;
}

function hitungMedian(arr) {
  const sortedArr = arr.slice().sort((a, b) => a - b);
  const tengah = Math.floor(sortedArr.length / 2);

  if (sortedArr.length % 2 === 0) {
    return (sortedArr[tengah - 1] + sortedArr[tengah]) / 2;
  } else {
    return sortedArr[tengah];
  }
}

function hitungModus(arr) {
  const frekuensi = {};
  let modus = [];
  let maxFrekuensi = 0;

  arr.forEach((nilai) => {
    frekuensi[nilai] = (frekuensi[nilai] || 0) + 1;

    if (frekuensi[nilai] > maxFrekuensi) {
      maxFrekuensi = frekuensi[nilai];
      modus = [nilai];
    } else if (frekuensi[nilai] === maxFrekuensi) {
      modus.push(nilai);
    }
  });

  return modus.sort((a, b) => a - b);
}

const deretAngka = [8, 7, 0, 2, 7, 1, 7, 6, 3, 0, 7, 1, 3, 4, 6, 1, 6, 4, 3];

const mean = hitungMean(deretAngka);
const median = hitungMedian(deretAngka);
const modus = hitungModus(deretAngka);

console.log(`Mean: ${mean}`);
console.log(`Median: ${median}`);
console.log(`Modus: ${modus.join(", ")}`);
