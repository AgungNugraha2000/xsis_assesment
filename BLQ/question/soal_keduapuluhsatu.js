function soal21(track) {
  let st = 0;
  const path = [];

  for (let i = 0; i < track.length; i++) {
    const elem = track[i];
    if (elem === "O") {
      if (st < 2) {
        return "FAILED";
      }
      st -= 2;
      path.push("J");
    } else {
      st += 1;
      path.push("W");
    }
  }

  return path;
}

const div =
  "--------------------------------------------------------------------------------";
console.log(div);
const track1 = [" ", " ", " ", " ", " ", "O", " ", " ", " ", "Finish"];
const result1 = soal21(track1);
console.log("Contoh 1:", result1);
console.log(div);
const track2 = [" ", "O", " ", " ", " ", " ", "O", " ", " ", "Finish"];
const result2 = soal21(track2);
console.log("Contoh 2:", result2);
console.log(div);
