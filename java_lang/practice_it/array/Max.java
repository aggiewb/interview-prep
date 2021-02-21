package java_lang.practice_it.array;

/*
https://practiceit.cs.washington.edu/problem/view/bjp5/chapter7/s10%2Dmax
*/ 

public class Max {
    public static int max(int[] nums){
        int maxValue = nums[0];
        for(int i = 1; i < nums.length; i++){
            int compareNum = nums[i];
            if(compareNum > maxValue){
                maxValue = compareNum;
            }
        }
        return maxValue;
    }
}
