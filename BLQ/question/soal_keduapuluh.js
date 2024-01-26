function determineWinner(initialDistance, suitsA, suitsB) {
  let distance = initialDistance;

  for (let i = 0; i < suitsA.length; i++) {
    if (suitsA[i] === "G" && suitsB[i] === "B") {
      distance += 2;
    } else if (suitsA[i] === "B" && suitsB[i] === "K") {
      distance += 2;
    } else if (suitsA[i] === "K" && suitsB[i] === "G") {
      distance += 2;
    } else {
      distance -= 1;
    }

    if (distance === 0) {
      return i % 2 === 0 ? "A" : "B";
    }
  }

  return "Draw";
}

const initialDistance = 2;
const suitsA = ["G", "G", "G", "K"];
const suitsB = ["K", "K", "B", "G"];

const winner = determineWinner(initialDistance, suitsA, suitsB);

console.log(`Pemenang: ${winner}`);
