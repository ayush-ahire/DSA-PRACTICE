function SumOfEvenSquares(arr) {
  const evens = arr.filter((num) => {
    return num % 2 === 0;
  });
  const result = evens.reduce((total, num) => {
    return (total += num * num);
  }, 0);
  return result;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(SumOfEvenSquares(arr));
