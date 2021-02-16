/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public var val: Int
 *     public var next: ListNode?
 *     public init() { self.val = 0; self.next = nil; }
 *     public init(_ val: Int) { self.val = val; self.next = nil; }
 *     public init(_ val: Int, _ next: ListNode?) { self.val = val; self.next = next; }
 * }
 */
class Solution {
    func addTwoNumbers(_ l1: ListNode?, _ l2: ListNode?) -> ListNode? {
        var l1 = l1
        var l2 = l2

        var resultListNode: ListNode? = nil
        var currentNode: ListNode? = nil
        var carryOver = 0
        while l1 != nil || l2 != nil {
            let n1 = l1?.val ?? 0
            let n2 = l2?.val ?? 0
            let sum = n1 + n2 + carryOver
            let digit = sum % 10
            carryOver = sum / 10
            let nextNode = ListNode(digit)
            if resultListNode == nil {
                resultListNode = nextNode
            }
            currentNode?.next = nextNode
            currentNode = nextNode
            l1 = l1?.next
            l2 = l2?.next
        }
        if carryOver > 0 {
            let nextNode = ListNode(carryOver)
            currentNode?.next = nextNode
        }
        return resultListNode
    }
}