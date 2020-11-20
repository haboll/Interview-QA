//  已知链表 a->b->c->d->e->f

//

const { ListNode, LinkList } = require('../index.js');

let l1 = new LinkList().init(['a', 'b', 'c', 'd', 'e', 'f']);

//  1 删除指定节点。只能访问节点 *************************************

// 取非头非尾节点

// let index = 3;
// let delNode = l1;
// while(index--) {
//     delNode = delNode.next;
// }
// console.log(delNode)



// // 坚决不能对节点直接赋值， 会破坏链表
// function delListNode(node) {
//     node.val = node.next.val;
//     node.next = node.next.next;
// }

// delListNode(delNode);









// 2. 取链表倒数 第k个值


// 方法1 遍历完整个链表，保存在树， 栈等

// function kthToLast(l1, k) {
//     let res = [];
//     while(l1) {
//         res.push(l1.val);
//         l1 = l1.next;
//     }
//     return res[res.length - k];
// }



// 方法2 双指针

// function kthToLast(l1, k) {
//     let first = l1;
//     let second = l1;
//     while(k--) {
//         first = first.next;
//     }
//     while(first){
//         first = first.next;
//         second = second.next;
//     }
//     return second.val
// }



// 方法3  递归。 递归的回归过程第k次节点值

let size = 0;
// l1 = new LinkList().init(['a']);
function kthToLast(head, k) {
    if (head) {
        let value = kthToLast(head.next, k);
        if (size++ < k) {
            return head.val;
        }
        return value;
    }
}

console.log(kthToLast(l1, 3));






// 链表顺序遍历


while (l1) {
    console.log(l1.val);
    l1 = l1.next;
}


//  链表逆递归,   ***********************

function backRecursive(head){
    if(!head){
        return 0;
    }
    backRecursive(head.next);
    console.log(head.val);
    return ;
}
backRecursive(l1);








// 尾插法 ： 从链表头部一个一个节点生成                   ***********************
function tailInsert() {
    let head = new ListNode(-1);
    let prevHead = head;
    let num = 5;
    while (num) {
        prevHead.next = new ListNode(num);
        prevHead = prevHead.next;
        num--;
    }
    console.log(head);
}
tailInsert();









// 头插法： 要从链表尾部一个一个节点生成            *********************** 重点

function headInsert() {
    let head = null;
    let num = 5;
    while (num--) {
        let curNode = new ListNode(num);
        curNode.next = head;
        head = curNode;
    }
    console.log(head);
}
headInsert();

