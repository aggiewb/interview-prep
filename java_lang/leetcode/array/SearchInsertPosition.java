package java_lang.leetcode.array;

/*
https://leetcode.com/problems/search-insert-position/
*/ 

public class SearchInsertPosition {
    public int searchInsert(int[] nums, int target) {
        if(nums[0] >= target){
            return 0;
        }
        for(int i = 0; i < nums.length - 1; i++){
            if(nums[i] == target){
                return i;
            } else if(nums[i + 1] == target){
                return i + 1;
            } else if(nums[i + 1] > target){
                return i + 1;
            }
        }
        return nums.length;
    }
}
