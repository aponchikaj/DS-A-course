class QNode<T>{
    data:T;
    next: QNode<T> | null = null;
    prev: QNode<T> | null = null;

    constructor(data:T){
        this.data = data;
    }
}

class LinkedQueue<T> {
    private head: QNode<T> | null = null;
    private tail: QNode<T> | null = null;
    private length: number = 0;

    enqueue(data:T){
        const newNode = new QNode(data);

        if(!this.head){

            this.head = newNode
            this.tail = newNode
        }else{
            this.tail!.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
        return;
    }

    dequeue(){
        if(!this.head) return null;
        const deletedData = this.head.data
        if(this.head === this.tail){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next
            this.head!.prev = null
        }

        this.length--
        return deletedData
    }

    peek(){
        return this.head?.data
    }

    size(){
        return this.length
    }
}