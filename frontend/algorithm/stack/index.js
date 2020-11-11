// 栈
// 后进先出，新添加的元素或者待删除的元素呆在栈顶，另一端叫栈底。
// 数组items保存数据
// 入栈方法push
// 出栈方法pop
// 获取栈顶元素
// 清除栈元素clear
// 判断是否空栈
// 返回栈长度

class Stack {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element);
    }
    pop() {
        if(this.isEmpty())return
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty())return
        return this.items[this.size() - 1];
    }
    clear(){
        this.items = [];
    }
    isEmpty(){
        return this.size() === 0;
    }
    size() {
        return this.items.length;
    }
}

//let stack = new Stack();

// console.log(stack.isEmpty());

// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log(stack);
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack);
// stack.clear();
// console.log(stack);

module.exports = Stack