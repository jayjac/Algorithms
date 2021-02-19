/* Linked List Node structure: */

struct Node
{
    int data;
    struct Node *next;
}



struct Node* reverseList(struct Node *head)
{
    // code here
    // return head of reversed list
    if(!head) return head;

    Node *previous = NULL;
    Node *current = head;

    while(current) {
        Node *next = current->next;
        current->next = previous;
        previous = current;
        current = next;
    }
    return previous;
}