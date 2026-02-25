class SNode<T>{
    data:T
    next: SNode<T> | null = null;

    constructor(data:T){
        this.data = data;
    }
}

class LinkedStack<T>{
    private head:SNode<T> | null = null;
    private size:number = 0

    push(data:T){
        const newNode = new SNode(data)

        newNode.next = this.head
        this.head = newNode
        this.size++
    }

    pop(){
        if(!this.head){
            return "Stack Underflowed!"
        }

        const poppedData = this.head.data

        this.head = this.head.next

        this.size--
        return poppedData;
    }

    peek(){
        return this.head === null;
    }

    sizeOfNodes(){
        return this.size;
    }
}

