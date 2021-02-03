/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/least-common-multiple

The least common multiple of 12 and 18 is 36, because 12 is a factor (12 × 3 = 36), and 18 is a factor (18 × 2 = 36), 
and there is no positive integer less than 36 that has both factors. As a special case, if either m or n is zero, 
then the least common multiple is zero. One way to calculate the least common multiple is to iterate all the multiples of m, 
until you find one that is also a multiple of n. If you already have gcd for greatest common divisor, 
then this formula calculates lcm. ( \operatorname{lcm}(m, n) = \frac{|m \times n|}{\operatorname{gcd}(m, n)} )

Compute the least common multiple of an array of integers. Given m and n, 
the least common multiple is the smallest positive integer that has both m and n as factors.
*/

function LCM(A) {
    const lastIndex = A.length - 1;
    const largestValue = A[lastIndex];
    let leastCommonMultiple = largestValue;

    for(let i = A.length - 2; i >= 0; i--){
        if(leastCommonMultiple % A[i] !== 0){
            leastCommonMultiple += largestValue;
            i = lastIndex;
        }
    }
    return leastCommonMultiple;
}