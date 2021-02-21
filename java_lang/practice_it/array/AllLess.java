package java_lang.practice_it.array;

/*
https://practiceit.cs.washington.edu/problem/view/bjp5/chapter7/s17%2DallLess
*/ 

public class AllLess {
    public static boolean allLess(int[] firstArr, int[] secondArr){
        if(firstArr.length != secondArr.length){
            return false;
        }
        
        for(int i = 0; i < firstArr.length; i++){
            if(secondArr[i] <= firstArr[i]){
                return false;
            }
        }
        return true;
    } 
}
