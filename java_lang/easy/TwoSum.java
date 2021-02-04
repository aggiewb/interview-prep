package java_lang.easy;
import java.util.*; 
/*
https://leetcode.com/problems/two-sum/submissions/
*/ 

public class TwoSum {
    public static void main(String[] args){
        int[] testCaseArr = new int[]{2,7,11,15};
        int target = 9;
        System.out.println(Arrays.toString(twoSum(testCaseArr, target)));
    }

    public static int[] twoSum(int[] nums, int target){
        HashMap<Integer, Integer> numsMap = new HashMap<Integer, Integer>();
        int[] twoSumIndices = new int[2];

        for(int i = 0; i < nums.length; i++){
            int currNum = nums[i];
            int targetDiff = target - currNum;

            if(numsMap.containsKey(targetDiff)){
                twoSumIndices[0] = numsMap.get(targetDiff);
                twoSumIndices[1] = i;
                break;
            } else {
                numsMap.put(currNum, i);
            }
        }
        return twoSumIndices;
    }
}
