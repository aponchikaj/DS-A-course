class ListNode<T> {
    data:T;
    next: ListNode<T> | null = null;
    prev: ListNode<T> | null = null;

    constructor(data:T){
        this.data = data;
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null
    tail: ListNode<T> | null = null
    size: number = 0

    
}