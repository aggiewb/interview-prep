package java_lang.leetcode.array;
import java.util.Set;
import java.util.HashSet;


/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/ 

public class LongestSubstringWithoutRepeatingChars {
    /*Brute Force*/
    public int lengthOfLongestSubstringBF(String s) {
        Set<Character> longestSubstringSet = new HashSet<>();
        int longestSubstringLength = 0;
        int stringLength = s.length();
        
        if(stringLength == 1){
            longestSubstringLength = 1;
            return longestSubstringLength;
        }
        
        for(int i = 0; i < stringLength - 1; i++){
            char letter = s.charAt(i);
            longestSubstringSet.add(letter);
            int substringLength = 1;
            for(int j = i + 1; j < stringLength; j++){
                char nextLetter = s.charAt(j);
                if(!longestSubstringSet.contains(nextLetter)){
                    longestSubstringSet.add(nextLetter);
                    substringLength++;
                } else {
                    longestSubstringSet.removeAll(longestSubstringSet);
                    if(longestSubstringLength < substringLength){
                        longestSubstringLength = substringLength;
                    }
                    break;
                }
                if(longestSubstringLength < substringLength){
                    longestSubstringLength = substringLength;
                }
            }
        }
        return longestSubstringLength;
    }
    
}
