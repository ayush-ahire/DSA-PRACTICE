// function containsDuplicate(nums) {
//     for(let i =0 ; i < nums.length; i++){
//         for(let j = i+1 ; j<nums.length ; j++){
//          if(nums[i]===nums[j]){
//             return true
//          }
//         }
//     }
//   return false
// }

// alternate solution for large size input

function containsDuplicate(nums) {
    let seen = new Set()
    for(let i =0 ; i < nums.length; i++){
      if(!seen.has(nums[i])){
        seen.add(nums[i])
      }
      
    }
  return seen
}


let nums = [1,2,3,1]
console.log(containsDuplicate(nums));