function FindMissingLetter(arr){
    let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let startIndex = alphabets.indexOf(arr[0])
    for(let i = 0 ; i <arr.length ; i++){
      if(arr[i] !== alphabets[startIndex+i]){
        return alphabets[startIndex +i]
        
      }
    }
}
let arr = ['a', 'b', 'c' , 'e' , 'f']
console.log(FindMissingLetter(arr));