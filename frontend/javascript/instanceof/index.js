

function myInstanceof(L, R) {
    L = L.__proto__;
    while(true) {
        if(!L){
            return false;
        }
        if(L === R.prototype) { // 注意这里是 ===
            return true;
        }
        L = L.__proto__;
    }

}

console.log(myInstanceof(Object, Object))

function Foo() {}

function Bar() {}

console.log(myInstanceof(new Foo(), Foo))

console.log(myInstanceof(new Foo(), Bar))

console.log(myInstanceof(Object, Function))


var a = {n: 1};
var b = a;
a.x = a = {n: 2};
console.log(a.x)