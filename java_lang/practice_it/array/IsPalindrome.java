package java_lang.practice_it.array;

/*
https://practiceit.cs.washington.edu/problem/view/bjp5/chapter7/s30%2DisPalindrome
*/ 

public class IsPalindrome {
    public static boolean isPalindrome(String[] words){
        int wordLength = words.length;
        if(wordLength <= 1){
            return true;
        }
        
        for(int i = 0; i < wordLength; i++){
            if(!words[i].equals(words[wordLength - 1 - i])){
                return false;
            }
        }
        return true;
    }
}
