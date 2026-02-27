class SNode<T> {
    data:T
    next: SNode<T> | null = null;

    constructor(data:T){
        this.data = data;
    }
}

class LinkedStack<T>{
    private head: SNode<T> | null = null;
    private length: number = 0;

    // push method in stack using linked list
    // we create new node
    // then check if we already have head
    // if we dont have head we assign newNode to head
    // if we have head then newNode next is head and head becomes newnode after
    push(data:T){
        const newNode = new SNode(data)

        if(!this.head){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return;
    }


}