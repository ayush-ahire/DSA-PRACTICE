function HighestScoringWord(str) {
  const words = str.split(" ");

  const scores = words.map((word) => {
    let score = 0;
    for (letters of word) {
      score += letters.charCodeAt(0) - 96;
    }
    return score;
  });
  let highestScore = 0;
  let highestIndex = 0;
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }
  return words[highestIndex];
}

let str = "There is a taxi across the street";
console.log(HighestScoringWord(str));
