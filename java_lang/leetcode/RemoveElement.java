package java_lang.leetcode;

/*
https://leetcode.com/problems/remove-element/
*/ 

public class RemoveElement {
    public int removeElement(int[] nums, int val) {
        int newLength = nums.length;
        int i = 0;
        
        while(i < newLength){
            if(nums[i] == val){
                nums[i] = nums[newLength - 1];
                newLength--;
            } else {
                i++;
            }
        }
        return newLength;
    }
}
