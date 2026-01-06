function FindMissingLetters(arr) {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let startAlphabet = letters.indexOf(arr[0])
  let missing = []
  let i = 0

  while (i < arr.length) {
    const expected = letters[startAlphabet]
    console.log(expected)
    if (arr[i] === expected) {
      i++
      startAlphabet++
    } else {
      missing.push(expected)
      startAlphabet++
    }
  }

  return missing
}

const arr = ['a','b','c','d','g']
console.log(FindMissingLetters(arr))



// function FindMissingLetter(arr){
//   const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNNOPQRSTUVWXYZ'
//   const  startAlphabet = letters.indexOf(arr[0])
//   for(let i = 0 ; i <arr.length; i++){
//    if(arr[i] !== letters[startAlphabet + i] ){
//     return letters[startAlphabet+i]
//    }
//   }
// return ''
// }
// const arr = ['a', 'b', 'c' , 'e' , 'g']
// console.log(FindMissingLetter(arr)); 