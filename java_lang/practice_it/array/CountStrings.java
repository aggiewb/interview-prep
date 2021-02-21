package java_lang.practice_it.array;

/*
https://practiceit.cs.washington.edu/problem/view/bjp5/chapter7/s16a%2DcountStrings
*/ 

public class CountStrings {
    public static int countStrings(String[] words, String target){
        int numOccurences = 0;
        for(int i = 0; i < words.length; i++){
            if(words[i].equals(target)){
                numOccurences++;
            }
        }
        return numOccurences;
    }
    
}
