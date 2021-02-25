package java_lang.leetcode.array;
import java.util.Queue;
import java.util.LinkedList;

/*
https://leetcode.com/submissions/detail/460698795/?from=explore&item_id=646

Disclaimer: Very inefficient solution, but I wanted practice with a Queue
*/ 

public class RotateArray {
    public void rotate(int[] nums, int k) {
        Queue<Integer> reversedNums = new LinkedList<>();
        
        for(int i = nums.length - 1; i >= 0; i--){
            reversedNums.add(nums[i]);
        }
        
        for(int i = 0; i < k; i++){
            int currNum = reversedNums.remove();
            reversedNums.add(currNum);
        }
        
        for(int i = nums.length - 1; i >= 0; i--){
            nums[i] = reversedNums.remove();
        }
    }
}
