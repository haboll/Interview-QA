
//  已知链表 a->b->c->d->e->f

//

const { LinkListNode, LinkList } = require('../index.js');

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
// function delLinkListNode(node) {
//     node.val = node.next.val;
//     node.next = node.next.next;
// }

// delLinkListNode(delNode);

// while (l1) {
//     console.log(l1.val);
//     l1 = l1.next;
// }


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
 
// let  size = 0;

// function kthToLast(head, k) {
//    if(!head){
//        return 0;
//    }
//    let value = kthToLast(head.next, k);
//    if(size++<k) {
//        return head.val
//    }
//    return value;
// }

//console.log(kthToLast(l1, 2))

// 顺便写一下, 链表的逆递归

let res = [];

function backRecursive(head){
    if(!head){
        return 0;
    }
    backRecursive(head.next);
    console.log(head.val);
    return ;
}

backRecursive(l1);




