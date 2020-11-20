

const { ListNode, LinkList } = require('../index.js');

const l1 = new LinkList().init([7, 3, 6, 4]);

const l2 = new LinkList().init([3, 5, 8, 2]);

//方法1： 翻转链表， 相加， 再翻转

function reverse(list) {
    if(!list || !list.next) {
        return list;
    }
    let prev = list;
    let current = list.next;
    prev.next = null;
    while(current){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

// let l1Reverse = reverse(l1);
// let l2Reverse = reverse(l2);


// console.log(l1Reverse);
// console.log(l2Reverse);

// var addTwoNumbers = function(l1, l2) {
//     let l1Reverse = reverse(l1);
//     let l2Reverse = reverse(l2);
//     let resultList = new LinkList().init([-1]);
//     let prevHead = resultList;
//     let isStep = false;
//     while(l1Reverse || l2Reverse || isStep){ // [5] [5], 有进位也继续计算
//         let l1Val = l1Reverse ? l1Reverse.val : 0;
//         let l2Val = l2Reverse ? l2Reverse.val: 0;

//         let value = l1Val + l2Val;
//         // 有进位
//         if(isStep) {
//             value ++;
//             isStep = false;
//         }
//         if(value >= 10){
//             isStep = true;
//             value = value - 10;
//         }
//         prevHead.next = new ListNode(value);
//         prevHead = prevHead.next;
//         l1Reverse = l1Reverse && l1Reverse.next;
//         l2Reverse = l2Reverse && l2Reverse.next;
//     }
//     let res = resultList.next;
//     return reverse(res);
// };

// 翻转相加， 但从尾部节点开始构建
// var addTwoNumbers = function(l1, l2) {
//     let l1Reverse = reverse(l1);
//     let l2Reverse = reverse(l2);
//     let head = null;
//     let isStep = false;
//     while(l1Reverse || l2Reverse || isStep){ // [5] [5], 有进位也继续计算
//         let l1Val = l1Reverse ? l1Reverse.val : 0;
//         let l2Val = l2Reverse ? l2Reverse.val: 0;

//         let value = l1Val + l2Val;
//         // 有进位
//         if(isStep) {
//             value ++;
//             isStep = false;
//         }
//         if(value >= 10){
//             isStep = true;
//             value = value - 10;
//         }
//         let curNode = new ListNode(value);
//         curNode.next = head;
//         head = curNode;
//         l1Reverse = l1Reverse && l1Reverse.next;
//         l2Reverse = l2Reverse && l2Reverse.next;
//     }
//     return head;
// };




//方法2： 不翻转链表：

// 遍历链表， 先把节点数据存在栈里边。然后从栈里边拿数据出来相加。 放数组不行吗？放链表不行吗？哦，再放链表就相当于翻转链表了。
// 都遍历完了， 拿出值拼成数字， 加起来， 再拆成链表不行吗？反正都是O(m+n)



// 方法3 链表补0， 对齐然后相加, 

// 递归， 归过程相加

var recurAdd = function(l1, l2) {
    if(l1 && l2) {
        let {isStep, node} = recurAdd(l1.next, l2.next);
        node = node || null;
        isStep = isStep || false;
        let value = l1.val + l2.val;
        if(isStep){
            value ++;
            isStep = false;
        }
        if(value >= 10) {
            value -= 10;
            isStep = true;
        }
        let curNode = new ListNode(value);
        curNode.next = node;
        return {
            isStep,
            node: curNode
        }
        
    } else {
        return {}
    }
}

var addTwoNumbers = function(l1, l2) {
    let l1Copy = l1;
    let l2Copy = l2;
    // 补齐0
    while(l1Copy || l2Copy){
        if(!l1Copy){
            let node = new ListNode(0);
            node.next = l1;
            l1 = node;
        }
        if(!l2Copy){
            let node = new ListNode(0);
            node.next = l2;
            l2 = node;
        }
        l1Copy = l1Copy ? l1Copy.next : null;
        l2Copy = l2Copy ? l2Copy.next : null;
    }
    console.log(l1, l2)
    // 补齐了， 还不是想怎么加就怎么加

    // 递归相加， 但得处理最后一次相加有进位情况
    let {isStep, node} = recurAdd(l1, l2);
    if(isStep){
        let head = new ListNode(1);
        head.next = node;
        node = head;
    }
    console.log(node);
    return node;
}

console.log(addTwoNumbers(l1, l2))








