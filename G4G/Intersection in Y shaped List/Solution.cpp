/* Linked List Node
struct Node {
  int data;
  struct Node *next;
  Node(int x) {
    data = x;
    next = NULL;
  }
}; */

/* Should return data of intersection point of two linked
   lists head1 and head2.
   If there is no intersecting point, then return -1. */
int intersectPoint(Node* head1, Node* head2)
{
    if(!head1 || !head2) return -1;
    // Your Code Here
    Node *p1 = head1;
    Node *p2 = head2;
    int p1Length = 0;
    int p2Length = 0;
    while(p1 || p2) {
        if(p1) {
            p1Length++;
            p1 = p1->next;
        }
        if(p2) {
            p2Length++;
            p2 = p2->next;
        }
    }
    p1 = head1;
    p2 = head2;
    while(p1Length > p2Length) {
        p1 = p1->next;
        p1Length--;
    }
    while(p2Length > p1Length) {
        p2 = p2->next;
        p2Length--;
    }
    while(p1 && p2) {
        if(p1 == p2) return p1->data;
        p1 = p1->next;
        p2 = p2->next;
    }
    return -1;
}