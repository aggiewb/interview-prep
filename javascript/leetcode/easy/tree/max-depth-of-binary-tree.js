/*
  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

  @param {TreeNode} root
  @return {number}

  https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/
*/ 

const maxDepth = function(root){
    if(root === null){
        return 0;
    } else {
        return Math.max((maxDepth(root.left) + 1), (maxDepth(root.right) + 1));
    }
}