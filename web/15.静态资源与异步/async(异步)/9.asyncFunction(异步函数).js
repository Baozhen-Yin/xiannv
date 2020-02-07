// 异步函数是异步编程语法的终极解决方案,它让我们将异步代码写成同步的形式,让代码不再有回调函数嵌套,使代码变得更加清晰明了

// async关键字
// 1.在普通函数定义的前面加上async关键字 普通函数就变成了异步函数
// 2.异步函数默认的返回值是""promise对象"""
// 3.在异步函数内部使用throw关键字进行错误的抛出
// 4.在异步函数内部使用return关键字将结果进行返回,结果会被包裹在promise对象中 return关键字代替了resolve方法

// async function fn() {
//     throw '发生了一些错误'
//     return 123 //Promise { 123 }
// }
// console.log(fn()); //Promise { undefined } 异步函数默认返回值
// fn().then(function(data) {
//     console.log(data); //123
// }).catch(function(err) {
//     console.log(err);
// })


// await关键字
// 1.它只能出现在异步函数中
// 2.await promise 它可以""暂停""异步函数的""执行"""  等待promise对象""返回结果后再向下执行函数"""

// async function p1() {
//     return 'p1';
// }

// async function p2() {
//     return 'p2';
// }

// async function p3() {
//     return 'p3';
// }

// async function run() {
//     //保证顺序执行 等待promise对象""返回结果后再向下执行函数"""
//     let r1 = await p1()
//     let r2 = await p2()
//     let r3 = await p3()
//         // console.log(r1) //p1
//         // console.log(r2) //p2
//         // console.log(r3) //p3
// }

// run();
// 二、Promise 的优势
// 链式调用
// Promise 使用 then 方法后还会返回一个新的 Promise 对象，便于我们传递状态数据，同时链式写法接近于同步写法，更符合线性思维。

// 错误捕捉
// 相比回调函数的错误无法在外部捕捉的问题，Promise 能够为一连串的异步调用提供错误处理。

// 控制反转再反转
// 由于第三方提供的异步函数，无法保证回调函数如何被执行，但是 Promise 的特点，能够保证异步函数只能被 resolve 一次，以及始终以异步的形式执行代码。

// 可以利用 Promise.all 和 Promise.race 来解决 Promise 始终未决议和并行 Promise 嵌套的问题
// 三、Promise 的不足
// 每个 .then() 都是一个独立的作用域
// 加入有很多个 .then() 方法，就会创建很多个独立的作用域，那么将只能通过外面包裹一层函数作用域的闭包来共享状态数据

// 无法取消单个 .then()
// 当 Promise 链中任意一个 .then() 方法中有语句执行错误后，尽管经过 catch 方法的错误处理，还是并不会中断整个 Promise 链的执行。

// 无法得知进度
// 由于 Promise 只能从 pending 到 fullfilled 或 rejected 状态，无法得知 pending 阶段的进度。

//Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。


let p4 = new Promise((resolve, reject) => {
    resolve('成功了')
})

let p5 = new Promise((resolve, reject) => {
    resolve('success')
})

let p6 = Promise.reject('失败')

Promise.all([p4, p5]).then((result) => {
    console.log(result) //['成功了', 'success']
}).catch((error) => {
    console.log(error)
})

Promise.all([p4, p5, p6]).then((result) => {
    console.log(result)
}).catch((error) => {

    console.log(error) // 失败了，打出 '失败'
})



let wake = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${time / 1000}秒后醒来`)
        }, time)
    })
}

// let p1 = wake(3000)
// let p2 = wake(2000)

// Promise.all([p1, p2]).then((result) => {
//         console.log(result) // [ '3秒后醒来', '2秒后醒来' ]
//     }).catch((error) => {
//         console.log(error)
//     })
// Promise.all获得的成功结果的数组里面的数据顺序和Promise.all接收到的数组顺序是一致的，即p1的结果在前，即便p1的结果获取的比p2要晚。这带来了一个绝大的好处：在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题。

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('success')
    }, 1000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('failed')
    }, 500)
})

Promise.race([p1, p2]).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error) // 打开的是 'failed'
})