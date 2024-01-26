function hitungGunungLembah(catatanPerjalanan) {
  let jumlahGunung = 0;
  let jumlahLembah = 0;
  let ketinggian = 0; // Awalnya berada pada dataran rendah (0 mdpl)
  let dalamGunung = false;

  for (let i = 0; i < catatanPerjalanan.length; i++) {
    const langkah = catatanPerjalanan[i];

    if (langkah === "N") {
      ketinggian++;
    } else if (langkah === "T") {
      ketinggian--;
    }

    if (ketinggian === 0) {
      if (dalamGunung) {
        jumlahGunung++;
      } else {
        jumlahLembah++;
      }
      dalamGunung = false;
    } else if (ketinggian === 1) {
      dalamGunung = true;
    }
  }

  return { jumlahGunung, jumlahLembah };
}

// Contoh penggunaan
const catatanPerjalanan = "NNTNNNTTTTTNTTTNTN";

const hasil = hitungGunungLembah(catatanPerjalanan);

console.log(`Jumlah Gunung: ${hasil.jumlahGunung}`);
console.log(`Jumlah Lembah: ${hasil.jumlahLembah}`);
