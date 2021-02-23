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

class BSTIterator {

    var allValues: [TreeNode] = [TreeNode]()
    let root: TreeNode?
    var currentPointer = -1

    init(_ root: TreeNode?) {
        self.root = root
        allValues.reserveCapacity(2048)
        self.initialize(node: root)
    }

    private func initialize(node: TreeNode? = nil) {
        guard let node = node else {
            return
        }
        initialize(node: node.left)
        allValues.append(node)
        initialize(node: node.right)
    }

    func next() -> Int {
       currentPointer += 1
       return allValues[currentPointer].val
    }

    func hasNext() -> Bool {
        return allValues.count > currentPointer + 1
    }
}