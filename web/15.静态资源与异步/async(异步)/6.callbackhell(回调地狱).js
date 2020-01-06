//导入读取文件系统模块
const fs = require('fs');

//依次读取文件
fs.readFile('./1.txt', 'utf8', (err, result1) => {
    console.log(result1)
    fs.readFile('./2.txt', 'utf8', (err, result2) => {
        console.log(result2)
        fs.readFile('./3.txt', 'utf8', (err, result3) => {
            console.log(result3)
        })
    })
});

//1是尹宝祯
//2是大美女
//3是可爱多
//嵌套了三层回调 不可维护的代码