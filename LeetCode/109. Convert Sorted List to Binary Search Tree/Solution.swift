class Solution {
    var list: [ListNode] = [ListNode]()
    var treeNode: TreeNode?

    private func buildTree(parent: TreeNode, start: Int, end: Int) {
        if start > end {
            return
        }
        let treeNode: TreeNode
        let half: Int
        if end - start < 2 {
            half = end
        } else {
            half = (start + end) / 2
        }
        let node = list[half]
        treeNode = TreeNode(node.val)
        if parent.val > node.val {
            parent.left = treeNode
        } else {
            parent.right = treeNode
        }
        buildTree(parent: treeNode, start: start, end: half - 1)
        buildTree(parent: treeNode, start: half + 1, end: end)
    }


    func sortedListToBST(_ head: ListNode?) -> TreeNode? {
        if head == nil { return nil }
        var node = head
        while node != nil {
            list.append(node!)
            node = node!.next
        }

        let halfNode = list[ list.count / 2 ]
        treeNode = TreeNode(halfNode.val)

        buildTree(parent: treeNode!, start: 0, end: list.count / 2 - 1)
        buildTree(parent: treeNode!, start: list.count / 2 + 1, end: list.count - 1)
        return treeNode
    }
}