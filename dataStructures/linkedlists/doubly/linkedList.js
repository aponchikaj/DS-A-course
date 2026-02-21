// so in doubly linked lists nodes has previous string too
var DoublyListNode = /** @class */ (function () {
    function DoublyListNode(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
    return DoublyListNode;
}());
// doubly linked lists have tail - last node and size - sizeof linkedlist 
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    // so add to end function and has parameter named data
    // first we make newNode with doublyListNode
    // then check if we already have tail
    // if we dont then head = newNode and tail = newNode
    // else if we have tail then newNode.prev = tail
    // tail.next = newNode
    // and tail = newNode
    // and then size is increased
    DoublyLinkedList.prototype.addToEnd = function (data) {
        var newNode = new DoublyListNode(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    };
    // add to start function.
    // data is getting as head with this function
    // we make variable newNode 
    // check if !head if !head then head and tail = newNode
    // else if there is valid head
    // newNode.next = this.head
    // and head and head.prev = newNode
    // and size++
    DoublyLinkedList.prototype.addToStart = function (data) {
        var newNode = new DoublyListNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    };
    // display forward function from head to tail
    // we mae current variable and assign this.head to it
    // after we make array with T[] type and its blank
    // then we use while loop and check while current is valid 
    // we push current.data to result and get to next node 
    // after we return result
    DoublyLinkedList.prototype.displayForward = function () {
        var current = this.head;
        var result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result);
    };
    // display backward function from tail to head
    // we make current variable assign tail to it
    // then result array which is blank
    // after we make while loop and while current is valid and isnot null
    // we push current.data to result and get to PERVIOUS node
    // and last we return result
    DoublyLinkedList.prototype.displayBackward = function () {
        var current = this.tail;
        var result = [];
        while (current) {
            result.push(current.data);
            current = current.prev;
        }
        console.log(result);
    };
    return DoublyLinkedList;
}());
