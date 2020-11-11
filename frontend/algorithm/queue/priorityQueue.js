// 优先队列
// 优先级高先出， 优先级相同 先进先出
// 数组items保存数据
// 入队方法enqueue
// 出队方法delqueue
// 获第一个元素front
// 清除队列元素clear
// 判断是否空队列
// 返回队列长度

// 优先队列不支持循环队列

// priority 为大于0的整数， 越小优先级越高

function QueueNode(element, priority) {
    this.element  = element;
    this.priority = priority || 0;
}

class PriorityQueue {
    constructor() {
        this.items = [];
    }
    enqueue(element, priority) {
        const queueNode = new QueueNode(element, priority);
        if(this.isEmpty()) {
            this.items.push(queueNode);
        } else {
            let isAdded = false;
            for(let i = 0; i<this.items.length; i++){
                if(queueNode.priority < this.items[i].priority) {
                    this.items.splice(i, 0, queueNode);
                    isAdded = true;
                    break;
                }
            }
            if(!isAdded) {
                this.items.push(queueNode);
            }
        }
        
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

let queue = new PriorityQueue();

console.log(queue.isEmpty());

queue.enqueue('john', 1);
queue.enqueue('stack', 2);
queue.print();
queue.enqueue('hy', 4);
queue.enqueue('mo', 3);
console.log(queue);
console.log(queue.size());
console.log(queue.front());

console.log(queue.dequeue().element);
console.log(queue.dequeue().element);
console.log(queue.dequeue().element);

queue.print();
queue.clear();
queue.print();

module.exports = PriorityQueue