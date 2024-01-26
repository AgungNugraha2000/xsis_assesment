function soal11(word) {
  const lenWord = word.length;
  let i = lenWord - 1;
  const side = Math.floor(lenWord / 2);

  console.log("Input : " + word);
  console.log("Output : ");

  while (i >= 0) {
    for (let j = 0; j < side; j++) {
      process.stdout.write("*");
    }

    process.stdout.write(word[i]);

    for (let k = 0; k < side; k++) {
      process.stdout.write("*");
    }

    console.log();
    i -= 1;
  }

  console.log();
}

soal11("Afrika");
soal11("Jeruk");
