/*

数组优点： 语言内置， 结构简单方便。
数组缺点： 数组大小固定， 从数组的起点或者中间或插入移除项的成本高。因为数组在内存中是一段连续放置的， 操作需要移动元素。

链表： 在内存中不连续放置。每个元素有一个存储元素本身的节点和一个指向下一个元素的应用组成，
优点： 添加或移除元素的时候不需要移动其他元素


*/

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.current = null;
        this._length = 0;
    }
    init(data) {
        if(Array.isArray(data)) {
            data.forEach(item => {
                this.push(item);
            })
        }
        return this.head;
    }
    // 向链表最后添加新元素
    push(val) {
        // const ele = new ListNode(val);
        // // 空链表
        // if (this.head === null) {
        //     this.head = ele;
        // } else {
        //     // 找到最后一个节点
        //     this.current = this.head;
        //     while (this.current.next) {
        //         this.current = this.current.next;
        //     }
        //     this.current.next = ele;
        // }
        // this._length++;
        this.insert(this._length, val);
    }
    // 删除链表最后一个
    pop() {
        this.removeAt(this._length);
    }
    // 插入第一个元素
    unshift() {
        this.insert(0, val);
    }
    // 删除第一个元素
    shift() {
        this.removeAt(0);
    }
    // 向任意位置插入元素, 返回是否插入成功 bollean
    insert(position, val) {
        // 处理边界情况
        if (position >= 0 && position <= this._length) {
            const ele = new ListNode(val);
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
                // 或者 不用pre
                //  this.current.val = this.current.next.val;
                //  this.current.next = this.current.next.next;
            }
            this._length--;
            return true;
        }
        return false;
    }
    // 翻转链表
    reverse() {
        if(!this.head || !this.head.next){
            return this.head;
        }
        this.prev = this.head;
        this.current = this.head.next;
        this.prev.next = null;
        while(this.current){
            let next = this.current.next;
            this.current.next = this.prev;
            this.prev = this.current;
            this.current = next;
        }
        this.head = this.prev;
        return this.head;
    }

    indexOf(val) {
        let index = 0;
        this.current = this.head;
        while (this.current) {
            if (this.current.val === val) {
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
            result = [this.head.val];
            this.current = this.head;
            while (this.current.next) {
                this.current = this.current.next;
                result.push(this.current.val);
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
    // 这些方法与数组的区别：  根本在于遍历方式的不同。
    // 遍历链表:
    forEach(callBack) {
        this.current = this.head; // 遍历指针指向表头。
        while (this.current) {
            // while循环直到遍历指针为空。
            callBack && callBack(this.current.val); // 操作元素
            this.current = this.current.next; // 指向，跳转至下一个元素
        }
    }
    find(callBack) {
        let res;
        this.current = this.head;
        while (this.current) {
            if (callBack && callBack(this.current.val)) {
                res = this.current.val;
                break;
            }
            this.current = this.current.next;
        }
        return res;
    }
}

// let list = new LinkList();
// list.push(22);
// list.push({
//     name: 11
// });
// list.push([1, 2]);
// console.log(list.toString());
// list.insert(3, 'test');
// console.log(list.toString());
// //list.removeAt(1);
// list.reverse();
// console.log(list.toString());

// console.log(list.indexOf('test'));

// list.forEach(item => {
//     console.log(item);
// });

// console.log(list.find(item => {
//     return !Array.isArray(item);
// }));

module.exports = { LinkList, ListNode };
