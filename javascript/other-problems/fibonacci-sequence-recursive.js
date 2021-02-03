function fibRecursive(n){
    //base case
    if(n === 2){
        return [1, 1];
    } else {
        const fibArray = fibRecursive(n - 1); //return array of each recursive call
        array.push(array[array.length - 1] + array[array.length - 2]); //add to the array the last value and second to last value
        return fibArray;
    }
}