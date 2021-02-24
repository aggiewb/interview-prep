package java_lang.leetcode.array;
import java.util.*;

class SingleNumber {
    public int singleNumber(int[] nums) {
        Map<Integer, Integer> numsMap = new HashMap<>();
        for(int i = 0; i < nums.length; i++){
            Integer currentNum = nums[i];
            if(!numsMap.containsKey(currentNum)){
                numsMap.put(currentNum, 1);
            } else {
                numsMap.put(currentNum, numsMap.get(currentNum) + 1);
            }
        }
        
        Set<Integer> numsMapKeys = numsMap.keySet();
        int uniqueNum = 0;
        for(Integer num: numsMapKeys){
            if(numsMap.get(num) == 1){
                uniqueNum = num;
                break;
            }
        }
        return uniqueNum;
    }
}