class QNode<T>{
    data:T
    next: QNode<T> | null = null
    perv: QNode<T> | null = null

    constructor(data:T){
        this.data = data
    }
}

class LinkedQueue<T>{
    private head:QNode<T> | null = null;
    private tail:QNode<T> | null = null;
    private length: number = 0;

    
}