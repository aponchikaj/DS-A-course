var DoublyCircularNode = /** @class */ (function () {
    function DoublyCircularNode(data) {
        this.next = null;
        this.perv = null;
        this.data = data;
    }
    return DoublyCircularNode;
}());
var DoublyCircularLinkedList = /** @class */ (function () {
    function DoublyCircularLinkedList() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    // display forward function displays from head to tail
    // we create while loop whil ecurrent doesnt equal head we console log data and get to next node
    DoublyCircularLinkedList.prototype.displayForward = function () {
        if (!this.head || this.count == 0)
            return null;
        var current = this.head;
        while (current !== this.head) {
            console.log(" ".concat(current.data, " ->"));
            current = current.next;
        }
        console.log(" Finished.");
    };
    // display backward function displays from tail to head
    // we create while loop while current doesnt equal tail then console log data and get to next node
    DoublyCircularLinkedList.prototype.displayBackward = function () {
        if (!this.head || this.count == 0)
            return null;
        var current = this.tail;
        while (current !== this.tail) {
            console.log("".concat(current === null || current === void 0 ? void 0 : current.data, " -> "));
            current = current === null || current === void 0 ? void 0 : current.perv;
        }
        console.log(" Finished.");
    };
    // we create new node and check if list is empty
    // if list is empty tail and head is newNode and we assign newNode next and perv equals newNode
    // else if list isnt empty we change tail as newNode
    // so newNode perv is tail
    // newNode next is head
    // tail.next = newNode
    // head.perv = newNode
    // tail is newNode
    // and count ++
    DoublyCircularLinkedList.prototype.addToEnd = function (data) {
        var newNode = new DoublyCircularNode(data);
        if (!this.tail || !this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = newNode;
            newNode.perv = newNode;
            return;
        }
        else {
            newNode.perv = this.tail;
            newNode.next = this.head;
            this.tail.next = newNode;
            this.head.perv = newNode;
            this.tail = newNode;
            // return;
        }
        this.count++;
    };
    // add to start function which has parameter data
    // create new Node then check if this is first node in list
    // if it is then head and tail is this node
    // else we make this node as head
    // and count ++
    DoublyCircularLinkedList.prototype.addToStart = function (data) {
        var newNode = new DoublyCircularNode(data);
        if (!this.head || !this.tail) {
            this.head = newNode;
            this.tail = newNode;
            newNode.perv = newNode;
            newNode.next = newNode;
            return;
        }
        else {
            newNode.next = this.head;
            newNode.perv = this.tail;
            this.head.perv = newNode;
            this.tail.next = newNode;
            this.head = newNode;
        }
        this.count++;
    };
    return DoublyCircularLinkedList;
}());
