// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// push(x) —— 将元素 x 推入栈中。
// pop() —— 删除栈顶的元素。
// top() —— 获取栈顶元素。
// getMin() —— 检索栈中的最小元素。

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.items=[];
    this.minItems=[];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.items.push(x);
    var length = this.minItems.length;
    if(length) {
        var top = this.minItems[length -1];
        if(x>=top){
            this.minItems.push(top);
        } else {
            this.minItems.push(x);
        }
    }else {
        this.minItems.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.items.length) {
        this.minItems.pop();
        return this.items.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    var length = this.items.length;
    return this.items[length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    var length = this.minItems.length;
    if(length)return this.minItems[length-1];
    
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */