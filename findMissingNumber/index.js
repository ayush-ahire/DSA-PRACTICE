function FindMissingNumber(arr){
 let n = arr.length;
let expectedSum=n*(n+1)/2

let actualSum = 0 
    for(let i = 0 ; i<arr.length; i++){
        actualSum += arr[i]
    }
   console.log(expectedSum)
   console.log(actualSum)
    return expectedSum - actualSum

}

let arr = [1,2,3,4,5,6,7,8,10]
console.log(FindMissingNumber(arr));