package java_lang.leetcode.trees;

/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/

 Definition for a binary tree node.
  public class TreeNode {
      int val;
      TreeNode left;
      TreeNode right;
      TreeNode() {}
      TreeNode(int val) { this.val = val; }
      TreeNode(int val, TreeNode left, TreeNode right) {
          this.val = val;
          this.left = left;
          this.right = right;
      }
  }
*/ 

public class MaxDepthBinaryTree {
    public int maxDepth(TreeNode root){
        if(root == null){
            return 0;
        } else {
            return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1);
        }
    }
}
