/* Link list Node
struct Node {
    int data;
    Node* next;

    Node(int x){
        data = x;
        next = NULL;
    }

}; */

/* Should return data of middle node. If linked list is empty, then  -1*/
int getMiddle(Node *head)
{
   // Your code here
   if(!head) return -1;


   int length = 0;
   Node *current = head;
   while(current) {
       length++;
       current = current->next;
   }

   current = head;
   length /= 2;
   int i = 0;
   while(i++ < length) {
       current = current->next;

   }
   return current->data;
}