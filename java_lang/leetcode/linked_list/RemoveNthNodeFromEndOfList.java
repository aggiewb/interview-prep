package java_lang.leetcode.linked_list;

/**
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/solution/
 * 
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

public class RemoveNthNodeFromEndOfList {
    public ListNode removeNthFromEnd(ListNode head, int n){
        //set an initial dummy node val for a starting place for
        //advancedNode and currNode to start to maintain n nodes apart
        ListNode temp = new ListNode(0, head);
        ListNode currNode = temp;
        ListNode advancedNode = temp;

        //currNode and advancedNode are n apart from each other
        for(int i = 0; i < n + 1; i++){
            advancedNode = advancedNode.next;
        }

        //move both curr and advanced nodes forward until advancedNode has reached the end
        //of the ListNode and currNode has reached the node just before the one to be removed
        while(advancedNode != null){
            currNode = currNode.next;
            advancedNode = advancedNode.next;
        }

        currNode.next = currNode.next.next;
        return temp.next;
    }
}
