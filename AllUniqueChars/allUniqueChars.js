// function allUniqueChars(str) {
//     let mySet = new Set();
//     for(let i=0;i<str.length;i++){
//         mySet.add(str[i])

//     }
//   if(mySet.size !== str.length){
//     return false
//   }
//     return true
  
// }

// let str = "programming"
// console.log(allUniqueChars(str));



function allUniqueChars(str) {
    let mySet = new Set();
    for(let i=0;i<str.length;i++){
      const char = str[i]
        if(mySet.has(char)){
            return false
        }
        mySet.add(char)
    }
    return true
  
}

let str = "programming"
console.log(allUniqueChars(str));