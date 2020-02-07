function Promise(executor) {
    this.state = 'pending'; //状态
    this.value = undefined; //成功结果
    this.reason = undefined; //失败原因
    this.onFulfilledFunc = []; //保存成功回调
    this.onRejectedFunc = []; //保存失败回调

    executor(resolve, reject); //马上执行

    function resolve(value) {
        //当状态为pending时再做更新
        if (_this.state === 'pending') {
            _this.value = value; //保存成功结果
            //依次执行成功回调
            _this.onFulfilledFunc.forEach(fn => fn(value));
            _this.state = 'resolved';
        }

    }

    function reject(reason) {
        //当状态为pending时再做更新
        if (_this.state === 'pending') {
            _this.reason = reason; //保存失败原因
            //依次执行失败回调
            _this.onRejectedFunc.forEach(fn => fn(reason));
            _this.state = 'rejected';
        }
    }

}
Promise.prototype.then = function(onFulfilled, onRejected) {

    //等待态，此时异步代码还没有走完
    if (this.state === 'pending') {
        if (typeof onFulfilled === 'function') {
            this.onFulfilledFunc.push(onFulfilled); //保存回调
        }
        if (typeof onRejected === 'function') {
            this.onRejectedFunc.push(onRejected); //保存回调
        }
    }
    if (this.state === 'resolved') {
        //判断参数类型，是函数执行之
        if (typeof onFulfilled === 'function') {
            onFulfilled(this.value);
        }

    }
    if (this.state === 'rejected') {
        if (typeof onRejected === 'function') {
            onRejected(this.reason);
        }
    }

};

module.exports = Promise;