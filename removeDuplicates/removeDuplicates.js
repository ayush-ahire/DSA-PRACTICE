// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

function removeDuplicates(arr, val){

  let k = 0
  
    for (let i=0; i<arr.length;i++){
     
         if(arr[i] != val){
          arr[k] = arr[i]
          k++
        }
    }
     return k
      
}

let arr = [0,1,2,2,3,0,4,2]
let val = 2
console.log(removeDuplicates(arr,val));