class SNode<T>{
    data:T
    next: SNode<T> | null = null;

    constructor(data:T){
        this.data=data;
    }
}

class LinkedStack<T>{
    head: SNode<T> | null = null;
    length: number = 0;

    push(data:T){
        const newNode = new SNode(data)

        if(this.head){
            newNode.next = this.head
        }
        this.head = newNode
        this.length++
    }

    pop(){
        if(!this.head) return null;

        const poppedData = this.head.data

        this.head = this.head.next

        this.length--
        return poppedData
    }

    peek(){
        return this.head?.data
    }

    size(){
        return this.length
    }

    isEmpty(){
        if(!this.head) return true
    }
}