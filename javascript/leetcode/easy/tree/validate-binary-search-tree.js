/*
  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

  @param {TreeNode} root
  @return {boolean}

https://leetcode.com/problems/validate-binary-search-tree/
*/ 

const isValidBST= function(root){
    return isValidBSTHelper(root, null, null);
}

const isValidBSTHelper = function(root, low, high){
    if(root === null){
        return true;
    }

    if((low !== null && root.val >= low) || (high !== null && root.val <= high)){
        return false;
    }

    //left subtree with vals < node key && right subtree with vals > node key
    return isValidBSTHelper(root.left, root.val, high) && isValidBSTHelper(root.right, low, root.val);
}