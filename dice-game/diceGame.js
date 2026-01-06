function diceRoll() {
  return Math.floor(Math.random() * 6 + 1);
}

function diceGame(numSimulations) {
  let results = [];
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = diceRoll();
    const dice2 = diceRoll();
    let sum = dice1 + dice2;
    let result = "";
    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "lose";
    } else {
      result = "try again";
    }
    results.push({ dice1, dice2, sum, result });
  }
  return results;
}
let numSimulation = 10;
console.log(diceGame(numSimulation));
