/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/no-repeats-please

Return the number of total permutations of the provided string that don't have repeated consecutive letters. 
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

I honestly had to look up help with implementing Heap's Algorithm for this problem, which
I have used once before with Java problem that found all of the permutations in which 
people can line up for a photo using an ArrayList<String>: 
https://github.com/aggiewb/scc-web-dev-sp20/blob/master/itc155/Midterm/src/PhotoLineups.java
*/ 

function permAlone(str) {
    const strLength = str.length;
    let perms = [];
    if(strLength === 1){
      return strLength;
    } else {
      perms = permHelper(str);
    }
    const permsWithNoConsecutiveLetters = findPermsNoConsecutive(perms);  
    return permsWithNoConsecutiveLetters.length;
}
  
function permHelper(str){
    const result = [];
    if(str.length === 1){
      return [str];
    }
    //example: str = 'aab'
    for(let i = 0; i < str.length; i++){
      //each recursive call result returns an array of permutation concatenations
      //ex, base case ['a'], ['a'], ['b'] ---> 
      //1st loop ['ab', 'ba'], 2nd loop ['ab', 'ba'], 3rd loop ['aa', 'aa']
      //1st loop ['aab', 'aba'], 2nd loop ['aab', 'aba'], 3rd loop ['baa', 'baa']
      const firstChar = str[i];
      const remainingChars = str.substring(0, i) + str.substring(i + 1);
      const charSets = permHelper(remainingChars);
      charSets.forEach(charSet => {
        const perm = firstChar + charSet;
        result.push(perm);
      });
    };
    return result;
}
  
function findPermsNoConsecutive(permArr){
    const noConsecutivePerms = [];
    // (.) 1st capturing group matching anything 
    // \1 matches the same text as most recently matched by the 1st capturing group 
    // + Quantifier matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
    const regex = /(.)\1+/;
    for(let i = 0; i < permArr.length; i++){
      const perm = permArr[i];
      if(!perm.match(regex)){
        noConsecutivePerms.push(perm);
      }
    }
    return noConsecutivePerms;
}