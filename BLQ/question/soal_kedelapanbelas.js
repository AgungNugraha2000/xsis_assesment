function hitungAirMinum(jamMakan, kalori, jamOlahragaMulai) {
  let totalAirMinum = 0;
  const waktuOlahraga = 60;

  for (let i = 0; i < jamMakan.length; i++) {
    const timeDifference = jamOlahragaMulai - jamMakan[i];
    totalAirMinum += 0.1 * kalori[i] * timeDifference;
  }

  return totalAirMinum / waktuOlahraga;
}

function caseBurningCalories(totalAirMinum) {
  return 100 * totalAirMinum * 2 + 500;
}

function burningCalories(jamMakan, kalori, jamOlahragaMulai) {
  const duration = hitungAirMinum(jamMakan, kalori, jamOlahragaMulai);
  console.log(`Donna needs ${caseBurningCalories(duration)} cc of water`);
}

// Contoh penggunaan
const jamMakan = [9, 13, 15, 17];
const kalori = [30, 20, 50, 80];
const jamOlahragaMulai = 18;

const div = "-------------------------------";
console.log(div);
burningCalories(jamMakan, kalori, jamOlahragaMulai);
console.log(div);
