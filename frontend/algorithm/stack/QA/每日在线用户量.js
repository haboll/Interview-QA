function dailyTemperatures(T) {
    if(!T.length)return T;
    const stack = [];
    const res = [];
    const len = T.length;
    let index = 0;
    while(index<len){
      const val = T[index];
      while(stack.length && stack[stack.length - 1].val < val) {
         let top = stack.pop();
         res[top.index] = index - top.index;
      }
      stack.push({index: index, val: val});
      index++;
    }
    // 遍历结束， 栈不为空
    while(stack.length){
      let top = stack.pop();
      res[top.index] = 0;
    }
    return res;
  }

  const arr = [13, 14, 15, 11, 9, 12, 16, 13];
  const res = dailyTemperatures(arr);
  console.log(res)