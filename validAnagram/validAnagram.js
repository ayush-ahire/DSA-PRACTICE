function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const freqCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  const freqCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(freqCount1).every(
    (char) => freqCount1[char] === freqCount2[char]
  );
}
const str1 = "ana";
const str2 = "baa";
console.log(validAnagram(str1, str2));
