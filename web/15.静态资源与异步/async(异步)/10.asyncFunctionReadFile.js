const fs = require('fs');
// util 模块 里面的 promisify方法
// 改造现有异步函数api 让其返回promise对象 从而支持异步函数语法
const promisify = require('util').promisify;
// 调用""promisify方法""改造现有异步API 让其返回""promise对象""" 可以用await
// 返回一个新的读取文件的方法
const readFile = promisify(fs.readFile);

async function run() {
    let r1 = await readFile('./1.txt', 'utf8')
    let r2 = await readFile('./2.txt', 'utf8')
    let r3 = await readFile('./3.txt', 'utf8')
    console.log(r1) //1是尹宝祯
    console.log(r2) //2是大美女
    console.log(r3) //3是可爱多
}

run();