/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if(!root) return;
  if(!root.right && !root.left) return;

  if(!root.left) {
    flatten(root.right);
    return;
  }

  if(root.left) {
    flatten(root.left);
    const flatLeftNode = root.left;
    root.left = null;
    flatten(root.right);
    const flatRightNode = root.right;
    root.right = flatLeftNode;
    let currentNode = flatLeftNode;
    while(currentNode && currentNode.right) {
      currentNode = currentNode.right;
    }
    currentNode.right = flatRightNode;
  }
};