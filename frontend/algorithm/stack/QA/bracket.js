const Stack = require("../index.js");

const input = "()(){}{}[]";
const obj = {
    "{": "}",
    "[": "]",
    "(": ")"
}
const inputArr = input.split("");
const stack = new Stack();
inputArr.forEach(item => {
    
    const stackTopEle = stack.peek();
    if(stackTopEle && obj[stackTopEle] && obj[stackTopEle] === item) {
        stack.pop();
    } else {
        stack.push(item)
    }
    console.log(stack)
})
console.log(!stack.size())
