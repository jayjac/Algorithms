/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */
class Solution {
    func isValid(_ node: TreeNode?, min: Int, max: Int) -> Bool {
        guard let node = node else {
            return true
        }
        if node.val <= min || node.val >= max {
            return false
        }
        return isValid(node.left, min: min, max: node.val)  && isValid(node.right, min: node.val, max: max)
    }

    func isValidBST(_ root: TreeNode?) -> Bool {
        guard let root = root else {
            return true
        }
        return isValid(root.left, min: Int.min, max: root.val) && isValid(root.right, min: root.val, max: Int.max)
    }
}