function takeLongTime(n) {
    return new Promise(resolve => {
      setTimeout(() => resolve(n + 200), n);
    });
  }
  
  function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
  }
  
  function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
  }
  
  function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
  }
  
   function c() {
    return Promise.resolve(3000);
  }
  
  async function doIt() {
    console.time("doIt");
    const time1 = 300;
    let timeb = await c();
    console.log(0,timeb);
    
    const time2 = await step1(time1);
    console.log(1,time2);
    
    const time3 = await step2(time2);
    console.log(2,time3);
    
    const result = await step3(time3);
    console.log(3,result);
    
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
  }

//输出结果
// 0 3000
// step1 with 300
// 1 500
// step2 with 500
// 2 700
// step3 with 700
// 3 900
// result is 900
// doIt: 1505.812ms