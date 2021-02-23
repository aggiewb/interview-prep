package java_lang.leetcode.strings;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
*/ 

public class LongestCommonPrefix {
    public String longestCommonPrefix(String[] strs){
        int strsLength = strs.length;

        if(strsLength == 0){
            return "";
        }

        String prefix = strs[0];

        for(int i = 1; i < strs.length; i++){
            String word = strs[i];
            while(word.indexOf(prefix) != 0){
                prefix = prefix.substring(0, prefix.length() - 1);

                if(prefix.isEmpty()){
                    return prefix;
                }
            }
        }
        return prefix;
    }
}
