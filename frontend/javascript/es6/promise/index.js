(function (window, undefined) {
    const _PENDING = 'pending';
    const _FULFILLED = 'fulfilled';
    const _REJECTED = 'rejected';
    class Promise {
        constructor(executor) {
            this.state = _PENDING;
            this.value = undefined;
            this.error = undefined;
            this.resolveFn = [];
            this.rejectFn = [];
            this._init(executor);
        }
        _init(executor) {
            // 用户输入executor, executor 可能报错
            try {
                executor && executor( this._resolve.bind(this), this._reject.bind(this));
            } catch (err) {
                this._reject(err);
            }
        }
        //只执行一次， promise状态改变后就不再改变
        _resolve(res) {
            if(res instanceof Promise){
                return res.then(this._resolve, this._reject)
            }
            //异步执行
            setTimeout(() => {
                if (this.state === _PENDING) {
                    this.state = _FULFILLED;
                    this.value = res;
                    for(let i = 0; i<this.resolveFn.length; i++){
                        const fn = this.resolveFn[i];
                         fn && fn(res);
                    }
                }
            })
            
        }
        _reject(err) {
            // err 不可能是promise
            if (this.state === _PENDING) {
                this.state = _REJECTED;
                this.error = err;
                for(let i = 0; i< this.rejectFn.length; i++) {
                    const fn = this.rejectFn[i];
                    fn && fn(err);
                }
            }
        }
        //统一处理promise, 类promise对象
        _resolvePromise(promise, x, resolve, reject){
            if(promise === x) {
                return reject('xxx err')
            }
            if(x instanceof Promise) {
                x.then(function(data) {
                    resolve(data);
                }, function(err) {
                    reject(err);
                });
                return;
            }
            // x不为空， 要判断x是否是类promise 对象
            if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
                try {
                    const then = x.then;
                    if(typeof then === 'function') {
                        then.call(x, fn1 => {
                            return _resolvePromise(promise, fn1, resolve, reject)
                        }, err => {
                            return reject(err);
                        })
                    } else {
                        resolve(x);
                    }
                } catch(err) {
                    reject(err)
                }
            } else {
                // 普通值
                resolve(x);
            }

        }

        // then 方法返回一个 **新的** promise 对象， 用户输入也放在try catch中
        then(resolveFn, rejectFn) {
            let promise2;
            const fn1 = typeof resolveFn === 'function' ? resolveFn : null;
            const fn2 = typeof rejectFn === 'function' ? rejectFn : null;
            const _self = this;
           
            if (this.state === _FULFILLED) {
                promise2 = new Promise(function (resolve, reject) {
                    setTimeout(() => {
                        try {
                            const x = fn1 && fn1(_self.value);
                            _self._resolvePromise(promise2, x, resolve, reject)
                        } catch (err) {
                            reject(err);
                        }
                    }, 0)
                   
                });
            }
            if (this.state === _REJECTED) {
                promise2 = new Promise(function (resolve, reject) {
                    setTimeout(() => {
                        try {
                            const x = fn2 && fn2(_self.error);
                            _self._resolvePromise(promise2, x, resolve, reject)
                        } catch (err) {
                            reject(err);
                        }
                    }, 0)
                    
                });
            }
            if (this.state === _PENDING) {
                promise2 = new Promise(function (resolve, reject) {
                    _self.resolveFn.push(function (value) {
                        try {
                            const x = fn1 && fn1(value);
                            _self._resolvePromise(promise2, x, resolve, reject)
                        } catch (err) {
                            reject(err);
                        }
                    });
                    _self.rejectFn.push(function (error) {
                        try {
                            const x = fn2 && fn2(error);
                            _self._resolvePromise(promise2, x, resolve, reject)
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
            }
            return promise2;
        }
        catch(rejectFn) {
            this.then(null, rejectFn);
        }
    }
   
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 1000)
    }).then(data => {
        console.log(data);
        return promise;
    })

})();





