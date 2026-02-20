// linked list. data structure. lets say we have train (LinkedList) and passengers (Node).
// structure of that train is like : node(data,next)->node(data,next)... and so on...
// next is pointing to next node and data has the data that we added to that node.

class ListNode<T> {
    data: T 
    next: ListNode<T> | null = null;

    constructor(data:T){
        this.data = data
    }
}

class LinkedList<T> {
    head: ListNode<T> | null = null
    
    add(data:T){
        const newNode = new ListNode(data)
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
    }
}

const numData = new LinkedList<number>()

numData.add(1)
numData.add(2)
numData.add(3)
numData.add(4)
numData.add(5)

console.log(numData.head);