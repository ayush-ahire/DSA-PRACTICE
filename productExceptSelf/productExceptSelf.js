function productExceptSelf(arr) {
  let result = new Array(arr.length).fill(1);
  let leftProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    result[i] = leftProduct;
    leftProduct *= arr[i];
  }
  let rightProduct = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  
  }
  return result;
}
const arr = [1, 2, 3, 4];
console.log(productExceptSelf(arr));
