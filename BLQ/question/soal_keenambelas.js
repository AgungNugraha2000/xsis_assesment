const menu = [
  ["Tuna Sandwich", 42],
  ["Spaghetti Carbonara", 50],
  ["Tea pitcher", 30],
  ["Pizza", 70],
  ["Salad", 30],
];

const totalOrang = 4;
const orangAlergiIkan = 1;
let chargeForAll = 0;
let ttlFish;

for (let i = 0; i < menu.length; i++) {
  let tax = menu[i][1] * 0.1;
  let service = menu[i][1] * 0.05;

  if (menu[i][0].includes("Tuna")) {
    ttlFish = menu[i][1] + tax + service;
  } else {
    let ttl = menu[i][1] + tax + service;
    chargeForAll += ttl;
  }
}

const chargeForAlergic = chargeForAll / totalOrang;
const chargeForOther =
  chargeForAlergic + ttlFish / (totalOrang - orangAlergiIkan);

console.log(
  `Untuk banyak orang yang alergi ikan (${orangAlergiIkan}) hanya membayar ${chargeForAlergic},`
);
console.log(
  `dan yang lainnya (${
    totalOrang - orangAlergiIkan
  }) harus membayar ${chargeForOther}`
);
