function firstNonRepeatchar(str) {
 let charCount = {}
 
    for(const char of str){
       charCount[char] = (charCount[char] || 0 ) +1
    }
    for(const char of str){
      if(charCount[char]===1){
        return char
      }
    }
   return ''
}

let str = "programming"
console.log(firstNonRepeatchar(str));