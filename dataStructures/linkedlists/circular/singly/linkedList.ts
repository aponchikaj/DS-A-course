class SinglyCircularNode<T>{
    data:T
    next: SinglyCircularNode<T> | null = null

    constructor(data:T){
        this.data = data
    }
}

class SinglyCircularLinkedList<T>{
    head:SinglyCircularNode<T> | null = null;

    // so traverse function is displaying data of nodes
    // first check if head is valid
    // then make current variable and starting point is head.
    // then we use while loop we can use while true or while current !== this.head
    // in loop we can log the current.data and get to next node
    // and last in loop if we use while true loop then we must write if current = this.head and break
    traverse(){
        if(!this.head || this.head === null){
            console.log("Invalid List.")
            return;
        }

        let current = this.head;
        while(true){
            console.log(`${current.data} -> `)
            current = current.next!
            if(current == this.head ) break;
        }

        console.log(" Done ! ");
    }

    // insert at start function. takes data:T as parameter.
    // we make new node 
    // check if we have head if we dont then newNode.next = newNode and head is newNode and return;
    // then we create variable named current and assign it this.head.
    // then while current.next is valid and isnot null we get to last node 
    // lastly newnode.next is head then current.next = newNode
    // and head is newnode
    insertAtStart(data:T){
        const newNode = new SinglyCircularNode(data);

        if(!this.head){
            newNode.next = newNode
            this.head = newNode
            return;
        }

        let current = this.head;
        while(current.next !== null){
            current = current.next!
        }

        newNode.next = this.head;
        current.next = newNode
        this.head = newNode
    }

    // we get data parameter 
    // then we make new node 
    // and check if head is null 
    // if it is then newNode.next = newNode and head is newNode
    // after we create variable current that equals head the nodes starting point.
    // while current doesnt equal to head so it starts and goes till tail current gets to next node
    // after we change last node next to newNode and newNode next is head 
    insertAtEnd(data:T){
        const newNode = new SinglyCircularNode(data);

        if(this.head === null){
            newNode.next = newNode;
            this.head = newNode
            return;
        }

        let current = this.head
        while(current !== this.head){
            current = current.next!;
        }

        current.next = newNode
        newNode.next = this.head
    }

    // insert at position takes data and index parameters
    // if index = 0 then we insert data at start
    // then we create new node and we make current variable
    // then we use for loop while i is less then index
    // then in loop current equals current.next
    // if current equals to head then we return error
    // then we change newNode.next to current.next
    // and current.next to newNode
    insertAtPos(data:T,index:number){
        if(index === 0){
            this.insertAtStart(data);
            return;
        }

        const newNode = new SinglyCircularNode(data)
        let current = this.head

        for(let i=0;i<index;i++){
            current = current?.next!;
            if(current == this.head){
                console.log("Out of bounds.")
                return;
            }
        }

        newNode.next = current!.next;
        current!.next = newNode;
    }

    
}