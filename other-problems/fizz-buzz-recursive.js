function fizzBuzz(n){
    if(n === 1){
        return [1];
    } else {
        const fizzBuzzArr = fizzBuzz(n - 1);
        let word = '';
        if(n % 3 === 0){
            word += "Fizz";
        } 
        if(n % 5 === 0){
            word += "Buzz";
        }
        
        if(word){
            fizzBuzzArr.push(word)
        } else {
            fizzBuzzArr.push(n);
        }
        return fizzBuzzArr;
    }
}