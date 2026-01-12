function stringPalindromeCheck(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reverse = [];
  for (let i = cleaned.length - 1; i >= 0; i--) {
    reverse.push(cleaned[i]);
  }
  reversedString = reverse.join("");
  return reversedString === cleaned;
}
const str = "race A car";
console.log(stringPalindromeCheck(str));
