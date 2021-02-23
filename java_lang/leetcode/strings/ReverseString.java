package java_lang.leetcode.strings;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
*/ 

public class ReverseString {
    public void reverseString(char[] s){
        int sLength = s.length;
        int sLastIndex = sLength - 1;
        for(int i = 0; i < sLength / 2; i++){
            char temp = s[i];
            s[i] = s[sLastIndex - i];
            s[sLastIndex - i] = temp;
        }
    }
    
}
