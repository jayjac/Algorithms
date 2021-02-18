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
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

function isValid(node: TreeNode | null, min: number, max: number) {
  if(!node) return true;

  //Equal to makes it wrong too!
  if(node.val >= max || node.val <= min) return false;
  return isValid(node.left, min, node.val) && isValid(node.right, node.val, max);

}

function isValidBST(root: TreeNode | null): boolean {
  if(!root) return true;
  return isValid(root.left, -Infinity, root.val) && isValid(root.right, root.val, Infinity);
};