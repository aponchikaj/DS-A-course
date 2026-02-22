// so in doubly linked lists nodes has previous string too
class DoublyListNode<T> {
    data:T;
    next: DoublyListNode<T> | null = null;
    prev: DoublyListNode<T> | null = null;

    constructor(data:T){
        this.data = data;
    }
}

// doubly linked lists have tail - last node and size - sizeof linkedlist 
class DoublyLinkedList<T> {
    head: DoublyListNode<T> | null = null
    tail: DoublyListNode<T> | null = null
    size: number = 0

    // so add to end function and has parameter named data
    // first we make newNode with doublyListNode
    // then check if we already have tail
    // if we dont then head = newNode and tail = newNode
    // else if we have tail then newNode.prev = tail
    // tail.next = newNode
    // and tail = newNode
    // and then size is increased
    addToEnd(data:T){

        const newNode = new DoublyListNode(data);

        if(!this.tail){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }

        this.size++
    }

    // add to start function.
    // data is getting as head with this function
    // we make variable newNode 
    // check if !head if !head then head and tail = newNode
    // else if there is valid head
    // newNode.next = this.head
    // and head and head.prev = newNode
    // and size++
    addToStart(data:T){
        const newNode = new DoublyListNode(data);
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode;
        }else{
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }

        this.size++
    }

    // display forward function from head to tail
    // we mae current variable and assign this.head to it
    // after we make array with T[] type and its blank
    // then we use while loop and check while current is valid 
    // we push current.data to result and get to next node 
    // after we return result
    displayForward(){
        let current = this.head;
        const result: T[] = []

        while(current){
            result.push(current.data)
            current = current.next
        }

        console.log(result)
    }

    // display backward function from tail to head
    // we make current variable assign tail to it
    // then result array which is blank
    // after we make while loop and while current is valid and isnot null
    // we push current.data to result and get to PERVIOUS node
    // and last we return result
    displayBackward(){
        let current = this.tail;
        const result: T[] = []

        while(current){
            result.push(current.data)
            current = current.prev
        }

        console.log(result)
    }

    // remove from front function.
    // gets this.head to next node and if head is valid after and isnt null then in if statement we make 
    // head.perv to null to delete that node
    // if this.head is not valid then tail = null and list is empty then.
    removeFromFront(){
        if(!this.head) return null;
        this.head = this.head.next
        if(this.head){
            this.head.prev = null
        }else{
            this.tail = null
        }
        this.size--
        this.displayForward();
    }

    //remove from back is same as removefromfront but instead of head we use tail
    // tail goes to its back node and if  that can be done then tail.next = null to delete
    // if that is invalid operation then head=null because list is empty then
    // and size --
    removeFromBack(){
        if(!this.tail) return null;
        this.tail = this.tail.prev
        if(this.tail){
            this.tail.next = null
        }else{
            this.head = null
        }
        this.size--
        this.displayForward()
    }

    // get node with index.
    // if index is more than or equals to list or index is less then 0 size then return null
    // create variable current = head and after we have for loop
    // while i is less then index i ++
    // and current = current.next
    // and return current
    getAtIndex(index:number){
        if(index <0 || index >= this.size) return null;
        let current = this.head
        for(let i=0;i<index;i++){
            current = current!.next;
        }

        console.log(current)
        return current;
    }

    // insertAt function takes index:number and data:T parameters
    // check index if its valid > size or less thn 0 return null
    // check index if it is 0 then we can use addToStart function 
    // check index if it is sizeof list then we use addToEnd function
    // then we make newNode 
    // and we get before node where we use getAtIndex function index-1
    // and after node is beforenode.next
    // then newNode.prev = beforeNode
    // newNode.next = afterNode
    // and beforeNode.next = newNode
    // afterNode.perv = newNode
    // and size++ 
    insertAt(index:number, data:T){
        if(index <0 || index > this.size) return null;
        if(index == 0) this.addToStart(data);
        if(index == this.size) this.addToEnd(data);

        const newNode = new DoublyListNode(data)
        const beforeNode = this.getAtIndex(index-1)
        const afterNode = beforeNode!.next;

        newNode.prev = beforeNode
        newNode.next = afterNode
        beforeNode!.next = newNode;
        afterNode!.prev = newNode;

        this.size++
        return true;
    }
}