function isPalindrome(kata) {
  // Menghapus spasi dan mengubah ke huruf kecil
  const cleanedString = kata.toLowerCase().replace(/\s/g, "");

  // Membandingkan string asli dengan string yang sudah dibalik
  for (let i = 0; i < Math.floor(cleanedString.length / 2); i++) {
    if (cleanedString[i] !== cleanedString[cleanedString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const kata1 = "katak";
const kata2 = "12021";
const kata3 = "malam";
const kata4 = "javascript";

console.log(`${kata1} adalah palindrome: ${isPalindrome(kata1)}`);
console.log(`${kata2} adalah palindrome: ${isPalindrome(kata2)}`);
console.log(`${kata3} adalah palindrome: ${isPalindrome(kata3)}`);
console.log(`${kata4} adalah palindrome: ${isPalindrome(kata4)}`);
