/*
https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).
*/ 

function sym() {
    const args = Array.from(arguments);
    while(args.length > 1){
      const current = args[0];
      const next = args[1];
  
      let deltas = current.reduce((arr, num) => {
        if(!next.includes(num) && !arr.includes(num)){
          arr.push(num);
        }
        return arr;
      }, []);
  
      deltas = deltas.concat(next.reduce((arr, num) => {
        if(!current.includes(num) && !arr.includes(num)){
          arr.push(num);
        }
        return arr;
      }, []));
  
      args.splice(0, 2, deltas);
    }
    return args[0];
}