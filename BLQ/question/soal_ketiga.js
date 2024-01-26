function hitungTarifParkir(masuk, keluar) {
  const masukObj = new Date(masuk);
  const keluarObj = new Date(keluar);

  const selisihJam = (keluarObj - masukObj) / (1000 * 60 * 60);

  let tarif = 0;
  if (selisihJam <= 8) {
    tarif = selisihJam * 1000; // 1.000/jam
  } else if (selisihJam <= 24) {
    tarif = 8000; // 8.000 flat
  } else if (selisihJam <= 32) {
    tarif = 15000; // 15.000 flat
    tarif += (selisihJam - 24) * 1000; // 1.000/jam
  } else {
    tarif = 23000; // 23.000 flat
  }

  return tarif;
}

const dataParkir1 = hitungTarifParkir(
  "2019-01-27T05:00:01",
  "2019-01-27T17:45:03"
);
const dataParkir2 = hitungTarifParkir(
  "2019-01-27T07:03:59",
  "2019-01-27T15:30:06"
);
const dataParkir3 = hitungTarifParkir(
  "2019-01-27T07:05:00",
  "2019-01-28T00:20:21"
);
const dataParkir4 = hitungTarifParkir(
  "2019-01-27T11:14:23",
  "2019-01-27T13:20:00"
);

console.log("Tarif Parkir 1: Rp" + dataParkir1);
console.log("Tarif Parkir 2: Rp" + dataParkir2);
console.log("Tarif Parkir 3: Rp" + dataParkir3);
console.log("Tarif Parkir 4: Rp" + dataParkir4);
