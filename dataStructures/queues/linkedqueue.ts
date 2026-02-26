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
    
    enqueue(data:T){
        const newNode = new QNode(data)

        if(this.tail){
            this.tail.next = newNode
        }

        this.tail =newNode

        if(!this.head){
            this.head = newNode
        }

        this.length++
    }

    dequeue(){
        if(!this.head) return null;

        const deletedValue = this.head.data
        this.head = this.head.next

        if(!this.head){
            this.tail = null;
        }

        this.length--

        return deletedValue
    }

    peek(){
        return this.head?.data
    }

    size(){
        return this.length;
    }
}