//1.通过模块的名字对模块进行引用
//读取文件内容
const fs = require('fs')

//2.通过模块内部的readFile方法“”读取文件“”内容
fs.readFile('./1.nodejs.js', 'utf-8', (err, doc) => {
    if (err == null) {
        //1.如果文件读取出错err 是一个对象 包含错误信息
        //2.如果文件读取正确 err是null
        //3.doc是文件读取的结果
        console.log(err);
        console.log(doc);
    }
});