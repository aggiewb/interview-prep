package java_lang.practice_it.array;

/*
https://practiceit.cs.washington.edu/problem/view/bjp5/chapter7/s29%2DaverageLength
*/ 

public class AverageLength {
    public static double averageLength(String[] words){
        int wordLengthSum = words[0].length();
        for(int i = 1; i < words.length; i++){
            wordLengthSum += words[i].length();
        }
        double avgLength = (double)wordLengthSum / words.length;
        return avgLength;
    }
}
