function countSubarraysOptimal(arr, target) {
  let map = new Map();
  let currSum = 0;
  let count = 0;

  map.set(0, 1);

  for (let num of arr) {
    currSum += num;

    if (map.has(currSum - target)) {
      count += map.get(currSum - target);
    }

    map.set(currSum, (map.get(currSum) || 0) + 1);
  }

  return count;
}

arr = [1, 1, 1, 2, 3];
target = 3;
console.log(countSubarraysOptimal(arr, target));
