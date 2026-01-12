function reverseWordsString(str) {
  let arr = str.split(" ").filter((words) => words !== "");
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result.join(" ").trim();
}
const str = " this is a   cat ";
console.log(reverseWordsString(str));
