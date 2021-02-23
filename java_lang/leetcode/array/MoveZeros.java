package java_lang.leetcode.array;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
*/ 

public class MoveZeros {
    public void moveZeroes(int[] nums){
        int numsLength = nums.length;
        for(int i = 0; i < numsLength; i++){
            int currNum = nums[i];
            if(currNum == 0){
                for(int j = i + 1; j < numsLength; j++){
                    if(nums[j] != 0){
                        nums[i] = nums[j];
                        nums[j] = currNum;
                    }
                }
            }
        }
    }
}
