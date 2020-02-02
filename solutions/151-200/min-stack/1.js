/**
 * initialize your data structure here.
 */
const MinStack = function () {
    this.stack = [];
    this.min = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x);
    this.min.push(Math.min(this.min.length === 0 ? Infinity : this.min[this.min.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.min.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min[this.min.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
