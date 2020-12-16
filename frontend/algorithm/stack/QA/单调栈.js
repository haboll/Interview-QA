// 给定两个 没有重复元素 的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。找到 nums1 中每个元素在 nums2 中的下一个比其大的值。

// 先找nums2的单调栈， 使用obj缓存，再遍历nums1构造结果

const nums1 = [4, 1, 2];

const nums2 = [1, 3, 4, 2];

// 方法1： 从数组正向遍历  当栈顶元素比 值 小时，证明后当前值，大于前一个元素， 则栈顶出栈， 构造栈顶元素与值的对象。 比较下一个， 直到找到比当前值大的数， 或者栈为空。

// 当while循环结束， 栈顶保存的一定是前一个比当前值大的数， 或者空。

// 构造对象

// 把当前值入栈

// var nextGreaterElement = function(nums1, nums2) {
//     if(!nums1.length)return nums1;
//     let stack = [];
//     let res = new Array(nums1.length);
//     let obj = {};
//     for(let i = 0; i<nums2.length; i++) {
//         let value = nums2[i];
//         while(stack.length && stack[stack.length - 1] < value){
//             obj[stack[stack.length - 1]] = value;
//             stack.pop();
//         }
//         stack.push(value);
//     }

//     for(let i = 0; i<nums1.length; i++) {
//         let value = nums1[i];
//         let greaterValue = obj[value] || -1;
//         res[i] = greaterValue;
//     }
//     console.log(res)
//     return res;
// };

// 方法2： 从数组逆向遍历，当栈顶元素比 值小时，证明后一个元素小于当前值，则栈顶出栈， 比较下一个。直到找到比当前值大的数， 或者栈为空。

// 当while循环结束， 栈顶保存的一定是比当前值大的数， 或者空。

// 构造对象

// 把当前值入栈

// var nextGreaterElement = function (nums1, nums2) {
//     if (!nums1.length) return nums1;
//     let stack = [];
//     let res = new Array(nums1.length);
//     let obj = {};
//     for (let i = nums2.length - 1; i >= 0; i--) {
//         let value = nums2[i];
//         while (stack.length && stack[stack.length - 1] < value) {
//             stack.pop();
//         }
//         obj[value] = stack.length ? stack[stack.length - 1] : -1;
//         stack.push(value);
//     }

//     for (let i = 0; i < nums1.length; i++) {
//         let value = nums1[i];
//         let greaterValue = obj[value];
//         res[i] = greaterValue;
//     }
//     return res;
// };

//nextGreaterElement(nums1, nums2);

// 给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。求在该柱状图中，能够勾勒出来的矩形的最大面积。

// 矩形面积 = 长 * 宽; 2种方法： 1.确定高，找宽， 求最大值。 2. 确定宽，找高， 求最大值。

// 暴力求解：确定宽。2轮遍历 时间复杂度O(n^2),  ans 保存每一个n的最大值，空间复杂度 O(n).

// var largestRectangleArea = function(heights) {
//     let len = heights.length;
//     let ans = [];
//     // 遍历宽
//     for(let i = 0; i < len; i++) {
//         let minHeight = Infinity;
//         for(let j = 0; j <= i; j++){
//             minHeight = Math.min(minHeight, heights[i - j]) ;
//             console.log(minHeight)
//             ans.push(minHeight * (j + 1));
//         }
//     }
//     return Math.max.call(null, ans)
// };

// ans 保存当前最大值 空间复杂度O(1)

//  var largestRectangleArea = function(heights) {
//     let len = heights.length;
//     let ans = 0;
//     // 遍历宽
//     for(let i = 0; i < len; i++) {
//         let minHeight = Infinity;
//         for(let j = 0; j <= i; j++){
//             minHeight = Math.min(minHeight, heights[i - j]) ;
//             console.log(minHeight)
//             ans = Math.max(ans, minHeight * (j + 1));
//         }
//     }
//     return ans
// };

// 暴力解法： 确定高， 找宽. 时间复杂度O(n^2),  空间复杂度 O(1).

// var largestRectangleArea = function(heights) {
//     let len = heights.length;
//     let ans = 0;
//     // 遍历高
//     for(let i = 0; i < len; i++) {
//         let height = heights[i];
//         let startIndex = i;
//         let endIndex = i;
//         while( startIndex >= 0 && heights[startIndex] >= height) {
//             startIndex--;
//         }
//         while(endIndex < len &&  heights[endIndex] >= height) {
//             endIndex ++;
//         }
//         let num = endIndex - startIndex - 2 + 1
//         ans = Math.max(ans, height * num);
//     }
//     return ans
// };

// 单调栈。 单调栈入栈操作时能找到前一个大于或者小于本身的数， 那么出栈时就能找到后一个大于或者小于本身的数。出栈的时候计算当前index 值

// 写时，一定要先明确出栈, 入栈的条件

// var largestRectangleArea = function (heights) {
//     let len = heights.length;
//     if (len <= 1) {
//         return heights[0];
//     }
//     let stack = [];
//     let ans = 0;
//     for (let i = 0; i < len; i++) {
//         let value = heights[i];
//         while (stack.length && heights[stack[stack.length - 1]] > value) {
//             let nowIndex = stack.pop();
//             let preMinIndex = stack.length ? stack[stack.length - 1] : nowIndex;
//             let height = heights[nowIndex];
//             ans = Math.max(ans, (i - preMinIndex - 1) * height);
//         }
//         stack.push(i);
//     }
//     while (stack.length) {
//         let nowIndex = stack.pop();
//         let preMinIndex = stack.length ? stack[stack.length - 1] : nowIndex;
//         let height = heights[nowIndex];
//         ans = Math.max(ans, (len - preMinIndex - 1) * height);
//     }
//     return ans;
// };



// 增加哨兵， 简化代码

var largestRectangleArea = function (heights) {
    let len = heights.length;
    if (len <= 1) {
        return heights[0];
    }
    
    heights.unshift(0);
    heights.push(0);
    len = heights.length;
    let stack = [];
    let ans = 0;
    for (let i = 0; i < len; i++) {
        let value = heights[i];
        while (heights[stack[stack.length - 1]] > value) {
            let nowIndex = stack.pop();
            let preMinIndex = stack[stack.length - 1] ;
            let height = heights[nowIndex];
            ans = Math.max(ans, (i - preMinIndex - 1) * height);
            // 为什么是 i - preMinIndex - 1？     (i - 1) - (preMinIndex + 1) + 1;
        }
        stack.push(i);
    }
    return ans;
};



const heights = [2, 1, 5, 6, 2, 3];

console.log(largestRectangleArea(heights));



/// 接雨水 *********************************************************************************************************************


var trap = function(height) {
    if(!height || height.lengt < 3){
        return 0;
    }
    let len = height.length;

    for(let i = 0; i< len; i++) {

    }

};


var calPoints = function(ops) {
    let stack = [];
    let res = 0;
    for(let i = 0; i< ops.length; i++) {
        let opsVal = ops[i];
        if(opsVal === "+") {
            let value = stack[stack.length -2] + stack[stack.length -1];
            stack.push(value);
            res += value;
        } else if(opsVal === "D"){
            let value = stack[stack.length -1] * 2;
            stack.push(value);
            res += value;
        } else if(opsVal ==="C") {
            res -= stack.pop();
        } else {
            stack.push(Number(opsVal));
            res += Number(opsVal);
        }
    }
    return res;
};

const  a = ["5","2","C","D","+"];
console.log(calPoints(a))


