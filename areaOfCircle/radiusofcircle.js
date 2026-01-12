function findArea(arr) {
  const result = arr.map((num) => {
    return parseFloat((3.14 * num * num).toFixed(2));
  });
  return result;
}

const arr = [5, 2, 3, 4];
console.log(findArea(arr));
