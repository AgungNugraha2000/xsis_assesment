function hitungSudutTerkecil(jam, menit) {
  const sudutTerkecil = Math.abs(30 * (jam - menit / 60) - 6 * menit);
  return sudutTerkecil;
}

const sudut1 = hitungSudutTerkecil(3, 0); // Jam 3:00
const sudut2 = hitungSudutTerkecil(5, 30); // Jam 5:30
const sudut3 = hitungSudutTerkecil(2, 20); // Jam 2:20

console.log(`Jam 3:00 -> Sudut Terkecil: ${sudut1} derajat`);
console.log(`Jam 5:30 -> Sudut Terkecil: ${sudut2} derajat`);
console.log(`Jam 2:20 -> Sudut Terkecil: ${sudut3} derajat`);
