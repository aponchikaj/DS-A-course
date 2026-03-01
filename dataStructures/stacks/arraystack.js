var ArrayStack = /** @class */ (function () {
    function ArrayStack() {
        this.data = [];
    }
    ArrayStack.prototype.push = function (data) {
        this.data.push(data);
    };
    ArrayStack.prototype.pop = function () {
        return this.data.pop();
    };
    ArrayStack.prototype.peek = function () {
        return this.data[this.data.length - 1];
    };
    ArrayStack.prototype.isEmpty = function () {
        return this.data.length === 0 ? true : false;
    };
    return ArrayStack;
}());
