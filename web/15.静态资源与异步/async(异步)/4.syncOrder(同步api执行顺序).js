//②.同步api执行顺序和异步api不同
for (var i = 0; i < 10; i++) {
    console.log(i);
}
console.log('for循环后面的代码'); //0 1 2 3 4 5 6 7 8 9 for循环后面的代码 从上到下依次执行