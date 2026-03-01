var SNode = /** @class */ (function () {
    function SNode(data) {
        this.next = null;
        this.data = data;
    }
    return SNode;
}());
var LinkedStack = /** @class */ (function () {
    function LinkedStack() {
        this.head = null;
        this.length = 0;
    }
    // push method in stack using linked list
    // we create new node
    // then check if we already have head
    // if we dont have head we assign newNode to head
    // if we have head then newNode next is head and head becomes newnode after
    LinkedStack.prototype.push = function (data) {
        var newNode = new SNode(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return;
    };
    // pop function
    // so we check if we have head if we dont then we return null
    // then we create poppedData variable and assign this.head.data to it
    // then our head becomes head.next 
    // the next node from head
    // and return poppedData variable
    LinkedStack.prototype.pop = function () {
        if (!this.head)
            return null;
        var poppedData = this.head.data;
        this.head = this.head.next;
        this.length--;
        return poppedData;
    };
    // peek function
    // first check if we have head
    // then return head.data
    LinkedStack.prototype.peek = function () {
        var _a;
        if (!this.head)
            return null;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
    };
    LinkedStack.prototype.isEmpty = function () {
        return !this.head ? true : false;
    };
    return LinkedStack;
}());
