var SinglyCircularNode = /** @class */ (function () {
    function SinglyCircularNode(data) {
        this.next = null;
        this.data = data;
    }
    return SinglyCircularNode;
}());
var SinglyCircularLinkedList = /** @class */ (function () {
    function SinglyCircularLinkedList() {
        this.head = null;
    }
    SinglyCircularLinkedList.prototype.traverse = function () {
        if (!this.head || this.head === null) {
            console.log("Invalid List.");
            return;
        }
        var current = this.head;
        while (true) {
            console.log("".concat(current, " -> "));
            current = current.next;
            if (current == this.head)
                break;
        }
        console.log(" Done ! ");
    };
    return SinglyCircularLinkedList;
}());
