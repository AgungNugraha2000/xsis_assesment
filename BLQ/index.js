const express = require("express");
const app = express();
const PORT = 8080;
const satu = require("./question/soal_pertama");
const dua = require("./question/soal_kedua");
const tiga = require("./question/soal_ketiga");
const empat = require("./question/soal_keempat");
const lima = require("./question/soal_kelima");
const enam = require("./question/soal_keenam");
const tujuh = require("./question/soal_ketujuh");
const delapan = require("./question/soal_kedelapan");
const sembilan = require("./question/soal_kesembilan");
const sepuluh = require("./question/soal_kesepuluh");
const sebelas = require("./question/soal_kesebelas");
const duabelas = require("./question/soal_keduabelas");
const tigabelas = require("./question/soal_ketigabelas");
const empatbelas = require("./question/soal_keempatbelas");
const limabelas = require("./question/soal_kelimabelas");
const enambelas = require("./question/soal_keenambelas");
const tujuhbelas = require("./question/soal_ketujuhbelas");
const delapanbelas = require("./question/soal_kedelapanbelas");
const sembilanbelas = require("./question/soal_kesembilanbelas");
const duapuluh = require("./question/soal_keduapuluh");
const duapuluhsatu = require("./question/soal_keduapuluhsatu");
const duapuluhdua = require("./question/soal_keduapuluhdua");

app.get("/", (req, res) => {
  //   const result = satu();
  //   const result = dua();
  //   const result = tiga();
  //   const result = empat();
  //   const result = lima();
  //   const result = enam();
  //   const result = tujuh();
  //   const result = delapan();
  // const result = sepuluh();
  // const result = sebelas();
  // const result = duabelas();
  // const result = tigabelas();
  // const result = empatbelas();
  // const result = limabelas();
  // const result = enambelas();
  // const result = tujuhbelas();
  // const result = delapanbelas();
  // const result = sembilanbelas();
  // const result = duapuluh();
  // const result = duapuluhsatu();
  const result = duapuluhdua();

  res.send(result);
});

app.listen(PORT);
