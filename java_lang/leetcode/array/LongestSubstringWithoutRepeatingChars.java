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

    /*Sliding Window*/ 
    public int lengthOfLongestSubstringSW(String s) {
        Set<Character> longestSubstringSet = new HashSet<>();
        int stringLength = s.length();
        int longestSubstringLength = 0;
        int i = 0;
        int j = 0;
        
        while(j < stringLength){
            //if the set does not contain the current character
            if(!longestSubstringSet.contains(s.charAt(j))){
                //add that character to the set then increment j
                longestSubstringSet.add(s.charAt(j++));
                //set the return value to the max of set longestSubstringLength or the current set size
                longestSubstringLength = Math.max(longestSubstringLength, longestSubstringSet.size());
            //if the set does contain the character
            } else {
                //remove characters from the start of the s string until the character at j is not in the set
                longestSubstringSet.remove(s.charAt(i++));
            }
        }
        return longestSubstringLength;
    }
}
