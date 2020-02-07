/**
 * 1. new Promise时，需要传递一个 executor 执行器，执行器立刻执行
 * 2. executor 接受两个参数，分别是 resolve 和 reject
 * 3. promise 只能从 pending 到 rejected, 或者从 pending 到 fulfilled
 * 4. promise 的状态一旦确认，就不会再改变
 * 5. promise 都有 then 方法，then 接收两个参数，分别是 promise 成功的回调 onFulfilled, 
 *      和 promise 失败的回调 onRejected
 * 6. 如果调用 then 时，promise已经成功，则执行 onFulfilled，并将promise的值作为参数传递进去。
 *      如果promise已经失败，那么执行 onRejected, 并将 promise 失败的原因作为参数传递进去。
 *      如果promise的状态是pending，需要将onFulfilled和onRejected函数存放起来，等待状态确定后，再依次将对应的函数执行(发布订阅)
 * 7. then 的参数 onFulfilled 和 onRejected 可以缺省
 * 8. promise 可以then多次，promise 的then 方法返回一个 promise
 * 9. 如果 then 返回的是一个结果，那么就会把这个结果作为参数，传递给下一个then的成功的回调(onFulfilled)
 * 10. 如果 then 中抛出了异常，那么就会把这个异常作为参数，传递给下一个then的失败的回调(onRejected)
 * 11.如果 then 返回的是一个promise,那么需要等这个promise，那么会等这个promise执行完，promise如果成功，
 *   就走下一个then的成功，如果失败，就走下一个then的失败
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise(executor) {
    var _this = this;
    this.value = undefined;
    this.reason = undefined;
    //其中status属性保存了Promise对象的状态，规范中指明，一个Promise对象只有三种状态：
    //等待态（pending）成功态（resolved）和失败态（rejected）。
    //当一个Promise对象执行成功了要有一个结果，它使用value属性保存；也有可能由于某种原因失败了，这个失败原因放在reason属性中保存。
    this.status = PENDING;
    //让Promise支持异步
    //在执行then方法时如果还在等待态（pending），就把回调函数临时寄存到一个数组里，
    //当状态发生改变时依次从数组中取出执行就好了，清楚这个思路我们实现它，首先在类上新增两个Array类型的数组，用于存放回调函数：
    this.onFulfilled = []; //成功的回调
    this.onRejected = []; //失败的回调
    //当Promise对象已经由pending状态改变为了成功态（resolved）或是失败态（rejected）就不能再次更改状态了。
    //因此我们在更新状态时要判断，如果当前状态是pending（等待态）才可更新：
    //在resolve和reject函数中分别加入了判断，只有当前状态是pending才可进行操作，
    //同时将成功的结果和失败的原因都保存到对应的属性上。之后将state属性置为更新后的状态。
    function resolve(value) {
        if (_this.status === PENDING) {
            _this.status = FULFILLED;
            _this.value = value;
            //这样当then方法执行时，若状态还在等待态（pending），将回调函数依次放入数组中：
            _this.onFulfilled.forEach(fn => fn()); //PromiseA+ 2.2.6.1
        }
    }

    function reject(reason) {
        if (_this.status === PENDING) {
            _this.status = REJECTED;
            _this.reason = reason;
            //这样当then方法执行时，若状态还在等待态（pending），将回调函数依次放入数组中：
            _this.onRejected.forEach(fn => fn()); //PromiseA+ 2.2.6.2
        }
    }

    try {
        //当我们自己实例化一个Promise时，其执行器函数（executor）会立即执行，这是一定的
        //因此，当实例化Promise时，构造函数中就要马上调用传入的executor函数执行
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
//每一个Promise实例都有一个then方法，它用来处理异步返回的结果，它是定义在原型上的方法
Promise.prototype.then = function(onFulfilled, onRejected) {
    // then方法的实现也很简单，根据status状态来调用不同的回调函数即可：
    //onFulfilled 和 onRejected 都是可选参数，也就是说可以传也可以不传。
    //传入的回调函数也不是一个函数类型，那怎么办？规范中说忽略它就好了。
    //因此需要判断一下回调函数的类型，如果明确是个函数再执行它。
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    let _this = this;
    //当我们自己实例化一个Promise时，其执行器函数（executor）会立即执行，这是一定的
    let promise2 = new Promise((resolve, reject) => {
        if (_this.status === FULFILLED) {
            //PromiseA+ 2.2.2
            //PromiseA+ 2.2.4 --- setTimeout
            setTimeout(() => {
                try {
                    //PromiseA+ 2.2.7.1
                    let x = onFulfilled(_this.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    //PromiseA+ 2.2.7.2
                    reject(e);
                }
            });
        } else if (_this.status === REJECTED) {
            //PromiseA+ 2.2.3
            setTimeout(() => {
                try {
                    let x = onRejected(_this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            });
        } else if (_this.status === PENDING) {
            _this.onFulfilled.push(() => {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(_this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
            _this.onRejected.push(() => {
                setTimeout(() => {
                    try {
                        let x = onRejected(_this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        reject(e);
                    }
                });
            });
        }
    });
    return promise2;
}

// Promise处理异步代码最强大的地方就是支持链式调用，这块也是最复杂的，我们先梳理一下规范中是怎么定义的：
// 每个then方法都返回一个新的Promise对象（原理的核心）
// 如果then方法中显示地返回了一个Promise对象就以此对象为准，返回它的结果
// 如果then方法中返回的是一个普通值（如Number、String等）就使用此值包装成一个新的Promise对象返回。
// 如果then方法中没有return语句，就视为返回一个用Undefined包装的Promise对象
// 若then方法中出现异常，则调用失败态方法（reject）跳转到下一个then的onRejected
// 如果then方法没有传入任何回调，则继续向下传递（值的传递特性）。

function resolvePromise(promise2, x, resolve, reject) {
    let _this = this;
    //接下来就是分各种情况处理。当x就是一个Promise，
    //那么就执行它，成功即成功，失败即失败。若x是一个对象或是函数，再进一步处理它，否则就是一个普通值：
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used; //只能调用一次
        //可能是个对象或是函数
        try {
            let then = x.then; //取出then方法引用
            if (typeof then === 'function') {
                //then是function，那么执行Promise
                then.call(x, (y) => {
                    if (used) return;
                    used = true;
                    //递归调用，传入y若是Promise对象，继续循环
                    resolvePromise(promise2, y, resolve, reject);
                }, (r) => {
                    if (used) return;
                    used = true;
                    reject(r);
                });
            } else {
                if (used) return;
                used = true;
                resolve(x);
            }
        } catch (e) {
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        //是个普通值，最终结束递归
        resolve(x);
    }
}

module.exports = Promise;