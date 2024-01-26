function isPangram(sentence) {
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");

  const lowerCaseSentence = sentence.toLowerCase();

  for (const char of lowerCaseSentence) {
    if (char >= "a" && char <= "z") {
      alphabetSet.delete(char);
    }
  }

  return alphabetSet.size === 0;
}

const sentence1 = "Sphinx of black quartz, judge my vow";
const sentence2 = "Brawny gods just flocked up to quiz and vex him";
const sentence3 = "Check back tomorrow; I will see if the book has arrived.";

console.log(`Kalimat 1: ${isPangram(sentence1) ? "Pangram" : "Bukan Pangram"}`);
console.log(`Kalimat 2: ${isPangram(sentence2) ? "Pangram" : "Bukan Pangram"}`);
console.log(`Kalimat 3: ${isPangram(sentence3) ? "Pangram" : "Bukan Pangram"}`);
