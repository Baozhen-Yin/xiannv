//异步api执行顺序
console.log('异步api代码开始执行');

setTimeout(() => {
    console.log('2秒之后执行的代码');
}, 2000)

setTimeout(() => {
    console.log('0秒之后执行的代码');
}, 0)

console.log('异步代码结束执行');
//异步api代码开始执行
//异步代码结束执行
//0秒之后执行的代码
//2秒之后执行的代码