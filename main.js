// linked list. data structure. lets say we have train (LinkedList) and passengers (Node).
// structure of that train is like : node(data,next)->node(data,next)... and so on...
// next is pointing to next node and data has the data that we added to that node.
var ListNode = /** @class */ (function () {
    function ListNode(data) {
        this.next = null;
        this.data = data;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    };
    return LinkedList;
}());
var numData = new LinkedList();
numData.add(1);
numData.add(2);
numData.add(3);
numData.add(4);
numData.add(5);
console.log(numData.head);
