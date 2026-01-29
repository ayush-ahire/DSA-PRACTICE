function recursion (num){
    if(num<=0 ){
        console.log('well done', num)
        return
    }

    // recursion case
    console.log("recursive case",num)
    num--
    recursion(num)
}
recursion(10)