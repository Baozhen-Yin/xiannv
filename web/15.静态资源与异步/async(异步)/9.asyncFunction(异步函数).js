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

async function p1() {
    return 'p1';
}

async function p2() {
    return 'p2';
}

async function p3() {
    return 'p3';
}

async function run() {
    //保证顺序执行 等待promise对象""返回结果后再向下执行函数"""
    let r1 = await p1()
    let r2 = await p2()
    let r3 = await p3()
    console.log(r1) //p1
    console.log(r2) //p2
    console.log(r3) //p3
}

run();