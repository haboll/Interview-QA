// 给定任意的n(2<=n<=10), 输出n阶螺旋数
// 列入： 输入10
//输出:

// 1  2  3  4  5  6  7  8  9  10
// 27 28 29 30 31 32 33 34 11
// 26 45 46 47 48 49 35 12
// 25 44 54 55 50 36 13
// 24 43 53 51 37 14
// 23 42 52 38 15
// 22 41 39 16
// 21 40 17
// 20 18
// 19


// 记四边

// function getRes(n) {
//     // 构造二维数组
//     const res = Array(n).fill(0).map(x=>Array(n).fill('00'))
//     console.log(res);
//     let l = 0;
//     let t = 0;
//     let b = n;
//     let r = n;
//     let num = 1;
//     let cirle = 1;
//     while (n) {
//         if (cirle % 3 == 2) {
//             for (let i = 0; i < n; i++) {
//                 let numStr = num < 10 ? '0' + num : num;
//                 num++;
//                 res[t+i][r-i] = numStr;
//             }
//             b = b - 2;
//         } else if (cirle % 3 == 0) {
//             for (let i = 0; i<n ; i++) {
//                 let numStr = num < 10 ? '0' + num : num;
//                 num++;
//                 res[b-i][l] = numStr;  
//             }
            
//             l++;
//         } else {
//             for (let i = 0; i < n; i++) {
//                 let numStr = num < 10 ? '0' + num : num;
//                 num++;
//                 res[t][l+i] = numStr;  
//             }
//             t++;
//             r = r - 2;
//         }
//         n--;
//         cirle++;
        
//     }
//     return res;
// }



// 记两边

function getRes(n) {
    // 构造二维数组
    const res = Array(n).fill(0).map(x=>Array(n).fill('00'))
    let l = 0;
    let t = 0;
    let num = 1;
    let cirle = 1;
    while (n) {
        if (cirle % 3 == 2) {
            for (let i = 0; i < n; i++) {
                let numStr = num < 10 ? '0' + num : num;
                num++;
                res[t+i][n-1-i+l] = numStr;
            }
            
        } else if (cirle % 3 == 0) {
            for (let i = 0; i<n ; i++) {
                let numStr = num < 10 ? '0' + num : num;
                num++;
                res[n-1-i+t][l] = numStr;  
            }
            l++;
        } else {
            for (let i = 0; i < n; i++) {
                let numStr = num < 10 ? '0' + num : num;
                num++;
                res[t][l+i] = numStr;  
            }
            t++;
        }
        n--;
        cirle++;
        
    }
    return res;
}

const res = getRes(10);

for(let i = 0; i< res.length; i++) {
    //console.log(res[i].join(", "));
    console.log(res[i].filter(item=> item!=="00").join(", "));
}

