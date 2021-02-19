package java_lang.leetcode;

/*
https://leetcode.com/problems/palindrome-number/
*/ 

public class PalindromeNumber {
    public Boolean isPalindrome(int x){
        if(x < 0){
            return false;
        }
    
        if(x < 10){
            return true;
        }

        String xString = x + "";
        int lastXStrIndex = xString.length() - 1;

        for(int i = 0; i < xString.length(); i++){
            if(xString.charAt(i) != xString.charAt(lastXStrIndex - i)){
                return false;
            }
        }
        return true;
    }
}
