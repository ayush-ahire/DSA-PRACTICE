function validAnagram(str1, str2) {
  const frequencyCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  console.log(frequencyCount1);
  const frequencyCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  console.log(frequencyCount2);

  return Object.keys(frequencyCount1).every(
    (char) => frequencyCount1[char] === frequencyCount2[char]
  );
}

let str1 = "jam";
let str2 = "jar";
console.log(validAnagram(str1, str2));
