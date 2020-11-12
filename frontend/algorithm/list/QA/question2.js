// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

// function ListNode(val, next) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
// }

const { LinkListNode, LinkList } = require('../index.js');

const l1 = new LinkList().init([1, 2, 4]);

const l2 = new LinkList().init([1, 3, 4]);

/// 1. 递归
// var mergeTwoLists = function(l1, l2) {
//     if(!l1) {
//         return l2;
//     }
//     else if(!l2) {
//         return l1;
//     } else {
//         if(l1.val<=l2.val) {
//             l1.next = mergeTwoLists(l1.next, l2);
//             return l1;
//         } else {
//             l2.next = mergeTwoLists(l1, l2.next);
//             return l2;
//         }
//     }
// }

//  2.迭代,用前一个节点找下一个节点。
// 要用指针一个一个生成链表节点， 得保证指针始终指向结果链表。 不能直接向指针赋值。

var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2;
    } else if (!l2) {
        return l1;
    } else {
        let resultLinkList = new LinkList().init([-1]); // 要构造一个链表， 先初始化有一个节点的链表， 返回值再取next， 扣掉第一个
        let preHead = resultLinkList;
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                preHead.next = l1;
                l1 = l1.next;
            } else {
                preHead.next= l2;
                l2 = l2.next;
            }
            preHead = preHead.next;
        }
        preHead.next = l1 == null ? l2 : l1;
        return resultLinkList.next;
    }
};

// 迭代2，为什么不能 赋值给 当前节点 ??? 

// var mergeTwoLists = function (l1, l2) {
//     if (!l1) {
//         return l2;
//     } else if (!l2) {
//         return l1;
//     } else {
//         let resultLinkList = new LinkList().init([-1]);
//         let current = resultLinkList.next;
//         while (l1 && l2) {
//             if (l1.val <= l2.val) {
//                 current = l1;        // 直接赋值， 取消了 current 与resultLinkList 的关联关系
//                 l1 = l1.next;
//             } else {
//                 current = l2;
//                 l2 = l2.next;
//             }
//             current = current.next;
//         }
//         current = l1 == null ? l2 : l1;
//         return resultLinkList.next;
//     }
// };


let res = mergeTwoLists(l1, l2);
while (res) {
    console.log(res.val);
    res = res.next;
}
