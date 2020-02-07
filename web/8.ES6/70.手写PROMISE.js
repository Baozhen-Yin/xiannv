//类默认遵循严格模式
class HD {
    //状态的值是固定的 可以定义成静态属性
    static PENDING = 'pending';
    static FUFILLED = 'fulfilled'
    static REJECTED = 'rejected'

    //类里面有个constructor 函数，可以接收传递过来的参数，同时返回实例对象
    //cnstrustor函数 只要new生成实例时就会自动调用这个函数，如果我们不写这个函数 类也会自动生成这个函数
    constructor(executor) {
        //promise的状态 初始准备状态
        this.status = HD.PENDING;
        //值 处理promise时 值改变交给then处理
        this.value = null;
        this.reason = null;
        //定义一个数组 把以后要执行的函数放在里面 等状态改变之后从里面拿出来执行 异步效果
        this.callbacks = []

        //executor 相当于promise里面第一个参数 (resolve,reject)=>{}
        //传递类方法
        //constructor里面的this指向实例对象,方法里面的this指向这个方法的调用者 
        //因为promise里面的方法直接使用 没有调用者 例如里面直接reject() 所以方法手动回来指向实例对象HD{}
        try {
            executor(this.resolve.bind(this), this.reject.bind(this))
        } catch (error) {
            this.reject(error)
        }
    }

    //把需要传递进executor里面的参数resolve,reject 定义为类方法
    resolve(value) {
        //promise里面规定了属性一旦确定不可改变 如果现在状态为准备状态可以修改 否则不
        if (this.status == HD.PENDING) {
            this.status = HD.FUFILLED
                //值就是获取到的这个值
            this.value = value
                //map() 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果。
            setTimeout(() => {
                this.callbacks.map(callbacks => {
                    //找到callback 下面push进去
                    callbacks.onFulfilled(this.value)
                })
            });
        }
    }

    //拒绝的原因
    reject(reason) {
        if (this.status == HD.PENDING) {
            this.status = HD.REJECTED
                //值就是获取到的这个值
            this.reason = reason
            setTimeout(() => {
                this.callbacks.map(callbacks => {
                    callbacks.onRejected(this.reason)
                })
            });
        }
    }

    //then模块 （我们现在需要清楚 then是一个异步的微任务）
    then(onFulfilled, onRejected) {
        //promise规定这两个函数是可以不传的 思路：在它不是函数的时候默认让他是一个函数即可
        if (typeof onFulfilled != 'function') {
            onFulfilled = () => {
                //then的穿透性
                return this.value
            }
        }
        if (typeof onRejected != 'function') {
            onRejected = () => {
                return this.value
            }
        }
        //THEN的链式编程 返回新的promise
        let promise = new HD((resolve, reject) => {
            if (this.status == HD.PENDING) {
                //准备状态需要考虑的问题是 如果我们改变状态是异步的 比如一秒之后
                //等待状态改变 先把要执行的任务放入 callbacks队列 等待依次执行
                this.callbacks.push({
                    //准备状态错误处理 集中放入拒绝方法统一完成
                    //往callbacks队列里面压了then传进来的函数参数 等着下一次轮询执行
                    onFulfilled: value => {
                        this.parse(promise, onFulfilled(value), resolve, reject)
                    },
                    onRejected: reason => {
                        this.parse(promise, onRejected(reason), resolve, reject)
                    },
                })
            }
            //promise状态改变之后才会执行 获取这个值/原因
            if (this.status == HD.FUFILLED) {
                //then是一个微任务 不让他立刻执行 做成异步
                //异步执行是可以读到promise这个变量的
                setTimeout(() => {
                    this.parse(promise, onFulfilled(this.value), resolve, reject)
                });
            }
            if (this.status == HD.REJECTED) {
                setTimeout(() => {
                    this.parse(promise, onRejected(this.reason), resolve, reject)
                });
            }
        })
        return promise
    }

    parse(promise, result, resolve, reject) {
        //不可以在当前promise处理当中返回本身的promise
        if (promise == result) {
            throw new TypeError('chaining cycle detected')
        }
        try {
            //新的promise默认就是成功的 所以要用成功的
            if (result instanceof HD) {
                //第一个promise执行这个onFulfilled函数 取到它的值result 用这个值传递给下一个then
                //判断一下 如果返回值是一个新的return promise 不要把整个类return回来 而是提取里面的值
                result.then(value => {
                    resolve(value)
                }, reason => {
                    reject(reason)
                })
            } else {
                resolve(result)
            }
        } catch (error) {
            reject(error)
        }
    }
    static resolve(value) {
        return new HD((resolve, reject) => {
            //如果传进来的也是promise 需要将状态返回给then
            if (value instanceof HD) {
                value.then(resolve, reject);
            } else {
                resolve(value);
            }
        })
    }

    static reject(reason) {
        return new HD((resolve, reject) => {
            if (reason instanceof HD) {
                reason.then(resolve, reject);
            } else {
                reject(reason)
            }
        })
    }

    static all(ALLpromises) {
        //记录一下成功的数组
        const successValues = []
            //all返回的也是一个promise
        return new HD((resolve, reject) => {
            //在循环的过程中 任何一个promise失败了 就返回失败的状态
            ALLpromises.forEach(promise => {
                promise.then(value => {
                    successValues.push(value)
                        //如果resolves的数量等于全部ALLpromises的数量 则全是成功的
                    if (successValues.length == ALLpromises.length) {
                        resolve(successValues)
                    }
                }, reason => {
                    reject(reason)
                })
            })
        })
    }

    static race(ALLpromises) {
        //race 谁快用谁 也返回一个promise
        return new HD((resolve, reject) => {
            ALLpromises.forEach(promise => {
                promise.then(value => {
                    resolve(value)
                }, reason => {
                    reject(reason)
                })
            })
        })
    }
}