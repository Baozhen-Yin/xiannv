function Promise(executor) {
    let self = this;
    self.status = 'pending'; //等待态
    self.value = undefined; //成功的返回值
    self.reason = undefined; //失败的原因

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolved';
            self.value = value;
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected';
            self.reason = reason;
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e); // 捕获时发生异常，就直接失败
    }
}
//onFufiled 成功的回调
//onRejected 失败的回调
Promise.prototype.then = function(onFufiled, onRejected) {
    let self = this;
    if (self.status === 'resolved') {
        onFufiled(self.value);
    }
    if (self.status === 'rejected') {
        onRejected(self.reason);
    }
}
module.exports = Promise;
// Promise的状态不受外界影响，只由Promise内的异步操作结果决定。

// Promise的状态一旦改变就不会再变。

// pending 👉 fulfilled
// pending 👉 rejected
// Promise的构造函数是同步的，then()方法中的函数是异步的。

// then()方法或者catch()方法的参数期望是函数，传入非函数则会发生值穿透

// Promise属于microtask，同一次事件循环中，microtask永远在macrotask之前执行