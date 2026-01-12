function MoveZeros(arr) {
  let leftPointer = 0;

  for (let rightPoint = 0; rightPoint < arr.length; rightPoint++) {
    if (arr[rightPoint] !== 0) {
      ([arr[leftPointer], arr[rightPoint]] = [
        arr[rightPoint],
        arr[leftPointer],
      ]),
        leftPointer++;
    }
  }
  return arr;
}
const arr = [0, 1, 3, 0, 12];
console.log(MoveZeros(arr));
