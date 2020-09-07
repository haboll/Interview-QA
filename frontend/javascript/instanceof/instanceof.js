function myInstanceof(L, R) {
    const prototype = R.prototype;
    L = L.__proto__;
    while(true){
        if(!L){
            return false;
        }
        if(L === prototype){
            return true;
        }
        L = L.__proto__;
    }
}
