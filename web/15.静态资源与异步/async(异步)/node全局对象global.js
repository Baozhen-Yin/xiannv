var first = 'hello ybz'
console.log(first);

function fn() {
    console.log('fn函数被调用了');
}
fn()
for (var i = 0; i < 5; i++) {
    console.log(i);
}

// hello ybz
// fn函数被调用了
// 0
// 1
// 2
// 3
// 4

// Node全局对象有以下方法 可以在任何地方使用 global可以省略
// console.log();
// setTimeout()
// clearTimeout()
// setInterval();
// clearInterval()

global.console.log('我是global全局对象下面的console.log方法输出的内容')
global.setTimeout(function() {
    console.log('123');
}, 2000)

console.log('我是global全局对象下面的console.log方法输出的内容')
setTimeout(function() {
    console.log('123');
}, 2000)