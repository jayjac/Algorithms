
function shallowCopyList(head: Node | null): Node | null {
  const headCopy = new Node(head.val);
  let currentNodeCopy = headCopy;
  let currentNode = head;
  while(currentNode) {
    const next = currentNode.next;
    if(next) {
      const node = new Node(next.val);
      currentNodeCopy.next = node;
      currentNodeCopy = node;
    }
    currentNode = next;
  }
  return headCopy;
}

function copyRandomList(head: Node | null): Node | null {
  if(!head) return null;
  const copiedList = shallowCopyList(head);
  let index = 0;
  let node = head;
  let copiedNode = copiedList;
  const nodeToIndexMap = new Map();
  const indexToNodeMap = new Map();
  while(node) {
    nodeToIndexMap.set(node, index);
    indexToNodeMap.set(index, copiedNode);
    node = node.next;
    copiedNode = copiedNode.next;
    index++;
  }
  node = head;
  copiedNode = copiedList;
  while(node) {
    const rNode = node.random;
    if(rNode) {
      const index = nodeToIndexMap.get(rNode);
      const copiedRNode = indexToNodeMap.get(index);
      copiedNode.random = copiedRNode;
    }

    node = node.next;
    copiedNode = copiedNode.next;
    index++;
  }
  return copiedList;
};