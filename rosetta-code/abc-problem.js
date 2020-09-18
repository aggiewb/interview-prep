/*
https://www.freecodecamp.org/learn/coding-interview-prep/rosetta-code/abc-problem

You are given a collection of ABC blocks (e.g., childhood alphabet blocks). 
There are 20 blocks with two letters on each block. 
A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:

(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)

Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.

Some rules to keep in mind:
    - Once a letter on a block is used, that block cannot be used again.
    - The function should be case-insensitive.
*/ 

function canMakeWord(word) {
    const blocks = {
      A: 2, B: 2, C: 2, D: 2, E: 2, F: 2, G: 2, 
      H: 1, I: 1, J: 1, K: 1, L: 1, M: 1, N: 2,
      O: 2, P: 2, Q: 2, R: 2, S: 2, T: 2, U: 1, 
      V: 1, W: 1, X: 1, Y: 1, Z: 1
    }
  
    word = word.toUpperCase();
    const wordArr = Array.from(word);
    let hasMadeWord = true;
    for(let i = 0; i < wordArr.length; i++){
      const letter = wordArr[i];
      const letterAscii = letter.charCodeAt(0);
      const letterCount = blocks[letter] - 1;
      if(letterCount < 0){
        hasMadeWord = false;
        break;
      }
      blocks[letter] = letterCount;
  
      let letterPartner = '';
      const middleUppercaseAlphabetAsciiCode = 77;
      const halfOfAlphabet = 13;
      if(letter.charCodeAt(0) <= middleUppercaseAlphabetAsciiCode){
        letterPartner = String.fromCharCode(letterAscii + halfOfAlphabet);
      }
      if(letter.charCodeAt(0) > middleUppercaseAlphabetAsciiCode){
        letterPartner = String.fromCharCode(letterAscii - halfOfAlphabet);
      }
      blocks[letterPartner] = blocks[letterPartner] - 1;
    }
    return hasMadeWord;
}