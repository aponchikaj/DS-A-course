var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.data = [];
    }
    ArrayQueue.prototype.enqueue = function (data) {
        this.data.push(data);
    };
    ArrayQueue.prototype.dequeue = function () {
        this.data.shift();
    };
    ArrayQueue.prototype.peek = function () {
        return this.data[0];
    };
    ArrayQueue.prototype.size = function () {
        return this.data.length;
    };
    return ArrayQueue;
}());
