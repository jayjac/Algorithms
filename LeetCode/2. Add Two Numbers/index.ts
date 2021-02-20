class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  // if(!l1) return l2;
  // if(!l2) return l1;

  let carryOver = 0;
  let result = null;
  let currentTail = null;
  while(l1 || l2) {
    const d1 = l1?.val || 0;
    const d2 = l2?.val || 0;
    const a = d1 + d2 + carryOver;
    const d3 = a % 10;
    const node = new ListNode(d3);
    carryOver = Math.floor(a / 10);

    if(!result) {
      result = node;
    }

    if(currentTail) {
      currentTail.next = node;
    }
    currentTail = node;
    l1 = l1?.next;
    l2 = l2?.next;
  }

  if(carryOver) {
    currentTail.next = new ListNode(carryOver);
  }


  return result;
};