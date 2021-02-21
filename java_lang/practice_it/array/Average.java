package java_lang.practice_it.array;

/*
https://practiceit.cs.washington.edu/problem/view/bjp5/chapter7/s11%2Daverage
*/ 

public class Average {
    public static double average(int nums[]){
        int sum = nums[0];
        for(int i = 1; i < nums.length; i++){
            sum += nums[i];
        }
        
        double average = (double)sum / nums.length;
        return average;
    }
}
