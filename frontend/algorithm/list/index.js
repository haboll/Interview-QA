/*

数组优点： 语言内置， 结构简单方便。
数组缺点： 数组大小固定， 从数组的起点或者中间或插入移除项的成本高。因为数组在内存中是一段连续放置的， 操作需要移动元素。

链表： 在内存中不连续放置。每个元素有一个存储元素本身的节点和一个指向下一个元素的应用组成，
优点： 添加或移除元素的时候不需要移动其他元素


*/

class LinkListNode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.current = null;
        this._length = 0;
    }
    // 向链表最后添加新元素
    append(element) {
        const ele = new LinkListNode(element);
        // 空链表
        if (this.head === null) {
            this.head = ele;
        } else {
            // 找到最后一个节点
            this.current = this.head;
            while (this.current.next) {
                this.current = this.current.next;
            }
            this.current.next = ele;
        }
        this._length++;
    }
    // 向任意位置插入元素, 返回是否插入成功 bollean
    insert(position, element) {
        // 处理边界情况
        if (position >= 0 && position <= this._length) {
            const ele = new LinkListNode(element);
            if (position === 0) {
                ele.next = this.head;
                this.head = ele;
            } else {
                let index = 0;
                this.current = this.head;
                let pre = null;
                while (index < position) {
                    pre = this.current;
                    this.current = this.current.next;
                    index++;
                }
                pre.next = ele;
                ele.next = this.current;
            }
            this._length++;
            return true;
        } else {
            return false;
        }
    }
    // 移除指定位置项
    removeAt(position) {
        if (this._length && position >= 0 && position <= this._length) {
            if (position === 0) {
                this.head = this.head.next;
            } else {
                let index = 0;
                let pre = null;
                this.current = this.head;
                while (index < position) {
                    pre = this.current;
                    this.current = this.current.next;
                    index++;
                }
                pre.next = this.current.next;
            }
            this._length--;
            return true;
        }
        return false;
    }
    indexOf(element) {
        let index = 0;
        this.current = this.head;
        while(this.current) {
            if(this.current.element === element) {
                return index;
            }
            this.current = this.current.next;
            index++;
        }
        return -1;
    }
    toString() {
        let result = [];
        if (this.head) {
            result = [this.head.element];
            this.current = this.head;
            while (this.current.next) {
                this.current = this.current.next;
                result.push(this.current.element);
            }
        }
        return result;
    }
    size() {
        return this._length;
    }
    isEmpty() {
        return this.size === 0;
    }
    getHead() {
        return this.head;
    }
}

let list = new LinkList();
list.append(22);
list.append({
    name: 11
});
list.append([1, 2]);
console.log(list.toString());
list.insert(3, 'test');
console.log(list.toString());
list.removeAt(1);
console.log(list.toString());

console.log(list.indexOf('test'));