function konversiFormatWaktu(waktu12Jam) {
  const date12Jam = new Date("2000-01-01 " + waktu12Jam);

  const jam24Jam = date12Jam.getHours();
  const menit = date12Jam.getMinutes();
  const detik = date12Jam.getSeconds();

  const waktu24Jam = `${padZero(jam24Jam)}:${padZero(menit)}:${padZero(detik)}`;

  return waktu24Jam;
}

// Fungsi untuk menambahkan leading zero pada angka jika kurang dari 10
function padZero(number) {
  return number < 10 ? "0" + number : number;
}

const waktu12Jam = "03:40:44 PM";
const waktu24Jam = konversiFormatWaktu(waktu12Jam);

console.log(`Waktu 12 Jam: ${waktu12Jam}`);
console.log(`Waktu 24 Jam: ${waktu24Jam}`);
