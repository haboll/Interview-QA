
const { ListNode, LinkList } = require('../index.js');

const l1 = new LinkList().init([1, 2, 3, 4, 5]);


// var reverseBetween = function(head, m, n) {
//     let index = 1;
//     let current = head;
//     let start = null;
//     let end = null;
//     let reverseLinkList = null;
//     while(current){
//         if(index>n+1)break;
//         if(index === m-1) {
//             start = current;
//         }
//         if(index === n+1){
//             end = current;
//         }
//         if(index>= m && index<=n){
//             let curNode = new ListNode(current.val);
//             curNode.next = reverseLinkList;
//             reverseLinkList = curNode;
//         }
//         index++;
//         current = current.next;
//     }
//     if(start){
//         start.next = reverseLinkList;
//     } else{
//         head = reverseLinkList;
//     }
    
//     while(reverseLinkList.next) {
//         reverseLinkList = reverseLinkList.next;
//     }
//     reverseLinkList.next = end;
//     return head;
// };

// const res = reverseBetween(l1, 2, 4);
// console.log(res)


// var reverseKGroup = function(head, k) {
//     if(!head || !head.next){
//         return head;
//     }
//     // 先把前K个取出来
//     let current = head;
//     let reverseNode = new ListNode(-1);
//     let prevHead = reverseNode;
//     let kCopy = k;
//     while(current && k--){
//         prevHead.next = new ListNode(current.val);
//         prevHead = prevHead.next;
//         current = current.next;
//     }

//     if(!current || k>0){
//         return reverseNode.next;
//     }
//     let end = reverseKGroup(current, kCopy);

//     reverseNode = reverseNode.next;

//     while(reverseNode){
//         let curNode = new ListNode(reverseNode.val);
//         curNode.next = end;
//         end = curNode;
//         reverseNode = reverseNode.next;
//     }
//     return end;
// };


// const res = reverseKGroup(l1, 3);

// console.log(res)

var reverseBetween = function(head, m, n) {
    if(!head || !head.next){
        return head;
    }
    let index = 1;
    let current = head;
    let startNode = null;
    let endNode = null;
    let reverseList= null;
    while(current){
        if(index === m-1) {
            startNode = current;
            current = current.next;
            index++;
            startNode.next = null;
            continue;
        }
        if(index > n){
            break;
        }
        if(index>=m && index <=n) {
            let curNode = new ListNode(current.val);
            endNode = endNode || curNode;
           if(startNode) {
               //从中间开始
               curNode.next = startNode.next;
               startNode.next = curNode;
               
           } else {
               // 从头开始
               if(!reverseList) {
                   reverseList = curNode;
               } else {
                   curNode.next = reverseList;
                   reverseList = curNode;
               }
           }
        }
        index++;
        current = current.next;
    }
    if(current) {
        endNode.next = current;
    }
    if(reverseList) {
        head = reverseList;
    }
  
    return head;
};

const res = reverseBetween(l1,2, 4);

console.log(res)