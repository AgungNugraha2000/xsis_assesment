function hitungDenda(
  namaBuku,
  durasiPeminjaman,
  tanggalPeminjaman,
  tanggalPengembalian
) {
  const tanggalPeminjamanObj = new Date(tanggalPeminjaman);
  const tanggalPengembalianObj = new Date(tanggalPengembalian);

  const selisihHari =
    (tanggalPengembalianObj - tanggalPeminjamanObj) / (1000 * 60 * 60 * 24);

  const denda = Math.max(0, selisihHari - durasiPeminjaman) * 100;

  const hasil = {
    namaBuku: namaBuku,
    denda: denda,
    selisihHari: selisihHari,
  };

  return hasil;
}

const bukuA = hitungDenda("A", 14, "2016-02-28", "2016-03-07");
const bukuB = hitungDenda("B", 3, "2018-04-29", "2018-05-30");
const bukuC = hitungDenda("C", 7, "2016-02-28", "2016-03-07");
const bukuD = hitungDenda("D", 7, "2018-04-29", "2018-05-30");

console.log(bukuA);
console.log(bukuB);
console.log(bukuC);
console.log(bukuD);
