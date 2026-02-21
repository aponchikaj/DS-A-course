// so in doubly linked lists nodes has previous string too
class DoublyListNode<T> {
    data:T;
    next: DoublyListNode<T> | null = null;
    prev: DoublyListNode<T> | null = null;

    constructor(data:T){
        this.data = data;
    }
}

// doubly linked lists have tail - last node and size - sizeof linkedlist 
class DoublyLinkedList<T> {
    head: DoublyListNode<T> | null = null
    tail: DoublyListNode<T> | null = null
    size: number = 0

    // so add to end function and has parameter named data
    // first we make newNode with doublyListNode
    // then check if we already have tail
    // if we dont then head = newNode and tail = newNode
    // else if we have tail then newNode.prev = tail
    // tail.next = newNode
    // and tail = newNode
    // and then size is increased
    addToEnd(data:T){

        const newNode = new DoublyListNode(data);

        if(!this.tail){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
    }

    // add to start function.
    // data is getting as head with this function
    // we make variable newNode 
    // check if !head if !head then head and tail = newNode
    // else if there is valid head
    // newNode.next = this.head
    // and head and head.prev = newNode
    // and size++
    addToStart(data:T){
        const newNode = new DoublyListNode(data);
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode;
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.size++
    }
}