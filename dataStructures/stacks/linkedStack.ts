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

    // pop function
    // so we check if we have head if we dont then we return null
    // then we create poppedData variable and assign this.head.data to it
    // then our head becomes head.next 
    // the next node from head
    // and return poppedData variable
    pop(){
        if(!this.head) return null;

        const poppedData = this.head.data
        this.head = this.head.next;

        this.length--

        return poppedData
    }

    // peek function
    // first check if we have head
    // then return head.data
    peek(){
        if(!this.head) return null;
        return this.head?.data
    }

    isEmpty(){
        return !this.head ?true :false
    }
}