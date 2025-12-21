function palindromeNumber(num){
    let original = num
    let lastdigit = 0 
    let reversed = 0 
    while (num >0){
        lastdigit = num %10
        reversed = reversed *10 + lastdigit
        num = (num- lastdigit)/10
    }
    if (reversed === original){
        return true
    }else{
        return false
    }
    
}


const num = 191
console.log(palindromeNumber(num));