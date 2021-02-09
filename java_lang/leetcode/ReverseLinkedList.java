package java_lang.leetcode;

/*
 * https://leetcode.com/problems/reverse-linked-list/
 * 
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 * 
 * Ultimately, you are building a new linked list from the "back" and removing
 * nodes from the "front" of the original list.
*/ 

public class ReverseLinkedList {
    public ListNode reverseList(ListNode head){
        //example 1 -> 2 -> null
        ListNode reversed = null;
        ListNode current = head; //1 -> 2

        while(current != null){
            ListNode nextTemp = current.next;
            //1st iteration: 2 -> null
            //2nd iteration: null
            current.next = reversed;
            //1st iteration value of current and value of next: 1 -> null
            //2nd iteration value of current and value of next: 2 -> 1 -> null
            reversed = current;
            //1st iteration: 1 -> null **reversed and current are the same
            //2nd iteration: 2 -> 1 -> null
            current = nextTemp;
            //1st iteration: 2 -> null **remainder of original list
            //2nd iteration: null
        }
        //reverse 2 -> 1 -> null
        return reversed;
    }
}
