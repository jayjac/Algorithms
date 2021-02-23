

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


function findPath(node: TreeNode | null, p: TreeNode): TreeNode[] | null {
  if(!node) return [];
  if(node === p) return [p];
  const left = findPath(node.left, p);
  const right = findPath(node.right, p);
  if(left.length) return [node, ...left];
  if(right.length) return [node, ...right];
  return [];
}

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // if(!root || !p || !q) {
  // return null;
  // }
  if(p === q) return p;

  const pPath = findPath(root, p);
  const qPath = findPath(root, q);
  let common = root;
  const max = Math.max(qPath.length, pPath.length);
  for(let i = 0; i < max; i++) {
    if(qPath[i] === pPath[i]) {
      common = qPath[i];
    } else {
      break;
    }
  }
  return common;

};