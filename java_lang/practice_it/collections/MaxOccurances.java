package java_lang.practice_it.collections;
import java.util.*;

/*
https://practiceit.cs.washington.edu/problem/view/bjp4/chapter11/e15%2DmaxOccurrences
*/ 

public class MaxOccurances {
    public static int maxOccurrences (List<Integer> nums){
        if(nums.isEmpty()){
            return 0;
        }
        
        Map<Integer, Integer> numsOccurrences = new HashMap<Integer, Integer>();
        Iterator<Integer> iterator = nums.iterator();
        
        while(iterator.hasNext()){
            int currNum = iterator.next();
            if(!numsOccurrences.containsKey(currNum)){
                numsOccurrences.put(currNum, 1);
            } else {
                numsOccurrences.replace(currNum, numsOccurrences.get(currNum) + 1);
            }
        }
        
        int maxOccurrences = 0;
        
        for(Integer key: numsOccurrences.keySet()){
            int occurance = numsOccurrences.get(key);
            if(occurance > maxOccurrences){
                maxOccurrences = occurance;
            }
        }
        
        return maxOccurrences;
    }
    
}
