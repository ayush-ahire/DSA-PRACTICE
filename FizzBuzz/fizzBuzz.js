function fizzBuzzArray(num) {
let arr = []
    for(let i = 1 ; i <=num;i++){
        arr.push(i)
    }
    for(let j = 0 ; j<arr.length;j++){
        if(arr[j] % 3 ==0  && arr[j]% 5 ==0){
            arr[j] = "FizzBuzz"
        }else if( arr[j] % 5 ==0){
            arr[j] = "Buzz"
        }else if(arr[j] % 3 ==0){
            arr[j] = "Fizz"
        }
    }
    return arr
  
}

let num = 15
console.log(fizzBuzzArray(num));