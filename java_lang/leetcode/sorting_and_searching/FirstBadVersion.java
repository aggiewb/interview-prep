package java_lang.leetcode.sorting_and_searching;

/*
https://leetcode.com/problems/first-bad-version/

The isBadVersion API is defined in the parent class VersionControl.
      boolean isBadVersion(int version);
*/ 

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int left = 1;
        int right = n;
        while(left < right){
            //algorithm for finding midpoint that isn't affected by the overflow bug
            int mid = left + (right - left) / 2;
            if(isBadVersion(mid)){
                //example:
                // 1 2 3 4 5 6 7 8 9
                // G G G B B B B B B   
                right = mid;
            } else {
                //example:
                // 1 2 3 4 5 6 7 8 9
                // G G G G G G B B B
                left = mid + 1;
            }
        }
        return right;
    }
}
