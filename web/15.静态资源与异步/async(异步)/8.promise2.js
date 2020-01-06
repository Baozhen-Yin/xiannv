//导入读取文件系统模块
const fs = require('fs');

//依次读取文件
// fs.readFile('./1.txt', 'utf8', (err, result1) => {
//     console.log(result1)
//     fs.readFile('./2.txt', 'utf8', (err, result2) => {
//         console.log(result2)
//         fs.readFile('./3.txt', 'utf8', (err, result3) => {
//             console.log(result3)
//         })
//     })
// });

function p1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf8', (err, result) => {
            resolve(result)
        });
    })
}

function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.txt', 'utf8', (err, result2) => {
            resolve(result2)
        });
    })
}

function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.txt', 'utf8', (err, result3) => {
            resolve(result3)
        });
    })
}


p1().then((result1) => {
    console.log(result1); //1是尹宝祯
    return p2()
}).then((result2) => {
    console.log(result2); //2是大美女
    return p3()
}).then((result3) => {
    console.log(result3); //3是可爱多
})