package java_lang.leetcode;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
*/ 

public class StrStr {
    public int strStr(String haystack, String needle){
        int indexOfNeedle = 0;
        if(haystack.equals(needle) || haystack.isEmpty() && needle.isEmpty()){
            return indexOfNeedle;
        }

        int needleLength = needle.length();
        String haystackSubstring = "";

        while(!haystackSubstring.isEmpty() || indexOfNeedle == 0){
            if(haystack.substring(indexOfNeedle).length() >= needleLength){
                haystackSubstring = haystack.substring(indexOfNeedle, indexOfNeedle + needleLength);
           } else {
               break;
           }
           if(haystackSubstring.equals(needle)){
               return indexOfNeedle;
           }
           indexOfNeedle++;
        }
        return -1;
    }
}