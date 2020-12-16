// 什么是尾调用？

// 尾调用是在一个函数的最后一步是调用另一个函数；
// 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用记录，因为调用位置、内部变量等信息都不会再用到了;

function f(x) {
    return g(x);
}
function f(x, y) {
    if (y) {
        return g(x);
    }
    return g1(x);
}

// 这些不是

function f1(x) {
    return g(x) + 1;
}
function f2(x) {
    let y = g(x);
    return y;
}

//递归调用会在存在调用栈， 递归深度过大会容易造成栈溢出。
//尾递归，由于只存在一个调用记录，所以永远不会发生"栈溢出"错误。
//空间复杂度 O(1), 时间复杂度O(n)

// 递归函数改写尾递归重点： 中间所用到的参数都变成参数来传递。

// 改写实例

// 1. n 的阶乘

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}

// 改写1, 从低到高
function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}

// 改写2

function factorial(n, total = 1, start = 1) {
    if (start > n) return total;
    return factorial(n, start * total, start + 1);
}

console.log(factorial(5));

// 2. 斐波拉契数列

function fibonacci(n) {
    if (n < 2) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


// 时间复杂度O(n), 控件复杂度O(1)

//  从小到大, 不能从大到小, 因为不知道第n个是多大。
function fibonacci(n, first=0, second=1) {
    if (n<1) return second;
    return fibonacci(n-1, second, first+second);
}

console.log(fibonacci(4));

// 按道理来说， 递归都能改成尾递归




