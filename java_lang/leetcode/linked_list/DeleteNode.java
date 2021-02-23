package java_lang.leetcode.linked_list;

/**
 * https://leetcode.com/problems/delete-node-in-a-linked-list/solution/
 * 
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */

class Solution {
    public void deleteNode(ListNode node){
        node.val = node.next;
        node.next = node.next.next;
    }
}