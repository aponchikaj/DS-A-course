class DoublyCircularNode<T>{
    data:T
    next: DoublyCircularNode<T> | null = null
    perv: DoublyCircularNode<T> | null = null

    constructor(data:T){
        this.data = data;
    }
}

class DoublyCircularLinkedList<T>{
    head:DoublyCircularNode<T> | null = null;
    tail:DoublyCircularNode<T> | null = null;
    count: number = 0;

    // display forward function displays from head to tail
    // we create while loop whil ecurrent doesnt equal head we console log data and get to next node
    displayForward(){
        if(!this.head || this.count == 0) return null;

        let current = this.head;
        while(current !== this.head){
            console.log(` ${current.data} ->`)
            current = current.next!
        }

        console.log(" Finished.")
    }

    // display backward function displays from tail to head
    // we create while loop while current doesnt equal tail then console log data and get to next node
    displayBackward(){
        if(!this.head || this.count == 0) return null;

        let current = this.tail;
        while(current !== this.tail){
            console.log(`${current?.data} -> `)
            current = current?.perv!
        }

        console.log(" Finished.")
    }

    // we create new node and check if list is empty
    // if list is empty tail and head is newNode and we assign newNode next and perv equals newNode
    // else if list isnt empty we change tail as newNode
    // so newNode perv is tail
    // newNode next is head
    // tail.next = newNode
    // head.perv = newNode
    // tail is newNode
    // and count ++
    addToEnd(data:T){
        const newNode = new DoublyCircularNode(data);

        if(!this.tail || !this.head){
            this.head = newNode
            this.tail = newNode
            newNode.next = newNode
            newNode.perv = newNode
            return;
        }else{
            newNode.perv = this.tail
            newNode.next = this.head

            this.tail.next = newNode
            this.head.perv = newNode

            this.tail = newNode
            // return;
        }
        this.count++
    }

    // add to start function which has parameter data
    // create new Node then check if this is first node in list
    // if it is then head and tail is this node
    // else we make this node as head
    // and count ++
    addToStart(data:T){
        const newNode = new DoublyCircularNode(data)

        if(!this.head || !this.tail){
            this.head = newNode
            this.tail = newNode

            newNode.perv = newNode
            newNode.next = newNode

            return;
        }else{
            newNode.next = this.head
            newNode.perv = this.tail

            this.head.perv = newNode
            this.tail.next = newNode

            this.head = newNode
        }

        this.count++
    }
}