var QNode = /** @class */ (function () {
    function QNode(data) {
        this.next = null;
        this.prev = null;
        this.data = data;
    }
    return QNode;
}());
var LinkedQueue = /** @class */ (function () {
    function LinkedQueue() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    LinkedQueue.prototype.enqueue = function (data) {
        var newNode = new QNode(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return;
    };
    LinkedQueue.prototype.dequeue = function () {
        if (!this.head)
            return null;
        var deletedData = this.head.data;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return deletedData;
    };
    LinkedQueue.prototype.peek = function () {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
    };
    LinkedQueue.prototype.size = function () {
        return this.length;
    };
    return LinkedQueue;
}());
