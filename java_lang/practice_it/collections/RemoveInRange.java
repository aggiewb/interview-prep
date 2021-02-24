package java_lang.practice_it.collections;
import java.util.List;

/*
https://practiceit.cs.washington.edu/problem/view/bjp4/chapter11/e3%2DremoveInRange
*/ 

public class RemoveInRange {
    public static void removeInRange(List<Integer> nums, int element, int startIndex, int endIndex){
        int i = startIndex;
        while(i < nums.size() && endIndex != i && startIndex < endIndex){
            if(nums.get(i) == element){
                nums.remove(i);
                endIndex--;
            } else {
                i++;
            }
        }
    }
}