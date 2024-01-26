function soal2(money) {
  const itemsDict = {
    "Kaca Mata": [500, 600, 700, 800],
    Baju: [200, 400, 350],
    Sepatu: [400, 350, 200, 30],
    Buku: [100, 50, 150],
  };

  let cart = "";
  let myItem = 0;
  const startMoney = money;

  // Loop Until Money is 0
  while (money !== 0) {
    for (const item in itemsDict) {
      for (let i = 0; i < itemsDict[item].length - 1; i++) {
        const price = itemsDict[item][i];
        if (money >= price) {
          money -= price;
          myItem++;
          cart += `*${item} ${price}\n`;
          break;
        }
      }
    }
  }

  console.log(
    `Money Input : ${startMoney}\nCurrent Money : ${money}\nTotal Item : ${myItem}\n${cart}`
  );
}

soal2(5000);
