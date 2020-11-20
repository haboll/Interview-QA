

 // 解析字符串中的特定字符串

var entityParser = function(text) {
    let textArr = [...text];
    let map = {
        quot: "\"",
        apos: "'",
        amp: "&",
        gt: ">",
        lt: "<",
        frasl: "/"
    }
    let stack = [];
    let isStack = false;
    let resultText = "";
    for(let i = 0; i< textArr.length; i++){
        let value = textArr[i];
        if(value === "&") {
            isStack = true;
            stack.push(value);
        }
        else if(isStack && value === ";") {
            isStack = false;
            let arr = [];
            while(stack.length && stack[stack.length - 1] !== "&"){
                arr.unshift(stack.pop()) 
            }
            stack.pop();
            let quot = map[arr.join("")];
            if(quot){
                resultText += quot;
            } else {
                resultText += "&" +  arr.join("") + ";";
            }
            
        } else if(isStack) {
            stack.push(value);
        } else {
            resultText += value;
        }
    }
    console.log(resultText);
    return resultText;
};
const text = "&amp;amp;"

entityParser(text);



//  


var isValid = function(s) {
    if(!s)return;
    let stack = [];
    for(let i=0; i< s.length; i++){
        stack.push(s[i]);
        let length = stack.length;
        if(length >= 3){
            let lastThreeStr = stack[length - 3] + stack[length -2] + stack[length - 1];
            if(lastThreeStr === "abc"){
                stack.splice(length - 3, 3);
            }
        }
    }
    return !stack.length
};

isValid("aabcbc")