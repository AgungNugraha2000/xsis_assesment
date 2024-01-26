function bubbleSort(arr) {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const inputArray = [1, 2, 1, 3, 4, 7, 1, 1, 5, 6, 1, 8];

console.log("Input: " + inputArray.join(" "));
bubbleSort(inputArray);
console.log("Output: " + inputArray.join(" "));
