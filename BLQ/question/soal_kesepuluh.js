function soal10(name) {
  const arrName = name.split(" ");
  console.log("Input : " + name);
  process.stdout.write("Output : ");

  for (let i = 0; i < arrName.length; i++) {
    const top = arrName[i].length;
    const bottom = 0;

    for (let j = bottom; j < top; j++) {
      if (j === bottom || j === top - 1) {
        process.stdout.write(arrName[i][j]);
      } else {
        process.stdout.write("*");
      }
    }

    process.stdout.write(" ");
  }

  console.log("\n");
}

soal10("Susilo Bambang Yudhoyono");
soal10("Rani Tiara");
soal10("Agung Nugraha");
