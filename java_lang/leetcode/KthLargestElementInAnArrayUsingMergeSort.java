package java_lang.leetcode;
import java.util.Arrays;

/*
https://leetcode.com/problems/kth-largest-element-in-an-array/
*/ 

public class KthLargestElementInAnArrayUsingMergeSort {
    public int findKthLargest(int[] nums, int k) {
        mergeSort(nums);
        return nums[nums.length - k];
    }
    
    public void mergeSort(int[] nums){
        if(nums.length > 1){
            //split arrays
            int arrMidpoint = nums.length/2;
            int[] left = Arrays.copyOfRange(nums, 0, arrMidpoint);
            int[] right = Arrays.copyOfRange(nums, arrMidpoint, nums.length);
            
            //recursive call for each half
            //at minimum each array will be no less than 2 length
            mergeSort(left);
            mergeSort(right);
            
            //sort and merge each half
            merge(nums, left, right);  
        }
    }
    
    public void merge(int[] result, int[] left, int[] right){
        int leftIndex = 0;
        int rightIndex = 0;
        for(int i = 0; i < result.length; i++){
            //if rightIndex has passed the end of the array
            //** this condition will always evalute to false unless the array contains all values lesser than the left
            //or
            //if leftIndex has not passed the end of the left array length and
            //left value at left index is smaller than or equal to the right value at the right index
            if(rightIndex >= right.length || 
               (leftIndex < left.length && left[leftIndex] < right[rightIndex])){
                result[i] = left[leftIndex];
                leftIndex++;
            } else {
                result[i] = right[rightIndex];
                rightIndex++;
            }
        }
    }
}
