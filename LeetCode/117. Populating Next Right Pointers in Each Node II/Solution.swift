class Solution {

    var nodes: [Node] = [Node]()

    func connect(_ root: Node?) -> Node? {
        guard let root = root else { return nil }
        nodes.append(root)
        while nodes.count > 0 {
            //print(nodes.map { $0.val })
            var newNodes: [Node] = [Node]()
            for i in 0..<nodes.count {
                if i < nodes.count - 1 {
                   nodes[i].next = nodes[i + 1]
                }
                if let ln = nodes[i].left {
                    newNodes.append(ln)
                }
                if let rn = nodes[i].right {
                    newNodes.append(rn)
                }
            }
            nodes = newNodes
        }
        return root
    }
}