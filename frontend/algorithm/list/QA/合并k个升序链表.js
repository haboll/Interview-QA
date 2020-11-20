

const { ListNode, LinkList } = require('../index.js');

const l1 = new LinkList().init([1,4,5]);

const l2 = new LinkList().init([1,3,4]);

const l3 = new LinkList().init([2,6]);

var mergeKLists = function(lists) {
    if(!lists.length || !lists.some(item => !!item)){
        return null;
    }
    let minIndex = 0;
    let minVal = Infinity;
    lists.forEach((item, index) => {
        if(item && item.val < minVal){
            minVal = item.val;
            minIndex = index;
        }
    });
    let linkList = lists[minIndex];
    linkList = linkList.next;
    lists[minIndex] = linkList;
    lists = lists.filter(item => item);
    let res = mergeKLists(lists);
    let curNode = new ListNode(minVal);
    curNode.next = res;
    return curNode;
};

const lists = [null]
const res = mergeKLists(lists);
console.log(res)