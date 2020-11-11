// 二叉树： 最多只能有两个子节点：一个是左侧子节点，另一个是右侧子节点

// 二叉搜索树  左侧节点存储（比父节点）小的值，右侧节点存储（比父节点）大（或者等于）的值

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // 插入元素
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            BinarySearchTree.insertNode(this.root, newNode);
        }
    }
    // 递归插入
    static insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                BinarySearchTree.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                BinarySearchTree.insertNode(node.right, newNode);
            }
        }
    }
   
    getPreOrderTraverseNode() {
        const res = [];
        const callBack = function (value) {
            res.push(value);
        };
        BinarySearchTree.preOrderTraverseNode(this.root, callBack);
        return res;
    }
    getInOrderTraverseNode() {
        const res = [];
        const callBack = function (value) {
            res.push(value);
        };
        BinarySearchTree.inOrderTraverseNode(this.root, callBack);
        return res;
    }
    getNextOrderTraverseNode() {
        const res = [];
        const callBack = function (value) {
            res.push(value);
        };
        BinarySearchTree.nextOrderTraverseNode(this.root, callBack);
        return res;
    }
    
    // 先序遍历
    static preOrderTraverseNode(node, callBack) {
        if (node !== null) {
            callBack && callBack(node.value);
            BinarySearchTree.preOrderTraverseNode(node.left, callBack);
            BinarySearchTree.preOrderTraverseNode(node.right, callBack);
        }
    }
    // 中序遍历
    static inOrderTraverseNode(node, callBack) {
        if (node !== null) {
            BinarySearchTree.inOrderTraverseNode(node.left, callBack);
            callBack && callBack(node.value);
            BinarySearchTree.inOrderTraverseNode(node.right, callBack);
        }
    }
    // 后序遍历
    static nextOrderTraverseNode(node, callBack) {
        if (node !== null) {
            BinarySearchTree.nextOrderTraverseNode(node.left, callBack);
            BinarySearchTree.nextOrderTraverseNode(node.right, callBack);
            callBack && callBack(node.value);
        }
    }
}

const tree = new BinarySearchTree();

tree.insert(20);
tree.insert(16);
tree.insert(18);
tree.insert(8);
tree.insert(4);
tree.insert(22);
tree.insert(30);
tree.insert(24);
tree.insert(26);

console.log(tree.getPreOrderTraverseNode());
console.log(tree.getInOrderTraverseNode());
console.log(tree.getNextOrderTraverseNode());
