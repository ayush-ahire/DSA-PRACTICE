function hashtagGenerator(str) {
  if (str.trim() === "") return false;
  if (str.trim().length > 140) return false;
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return "#" + words.join("");
}
const str = "   ";
console.log(hashtagGenerator(str));
