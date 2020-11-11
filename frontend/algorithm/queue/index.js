// 队列
// 先进先出
// 数组items保存数据
// 入队方法enqueue
// 出队方法delqueue
// 获第一个元素front
// 清除队列元素clear
// 判断是否空队列
// 返回队列长度

// 循环队列， 遍历循环次数。 遍历一次， 把出队元素再入队

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if(this.isEmpty())return
        return this.items.shift();
    }
    front(){
        if(this.isEmpty())return
        return this.items[0];
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
    print() {
        console.log(this.items.join(","))
    }
}

let queue = new Queue();

console.log(queue.isEmpty());

queue.enqueue(1);
queue.enqueue(2);
queue.print();
queue.enqueue(3);
queue.enqueue(4);
console.log(queue);
console.log(queue.size());
console.log(queue.front());

console.log(queue.dequeue());

queue.print();
queue.clear();
queue.print();

module.exports = Queue