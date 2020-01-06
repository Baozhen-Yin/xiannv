const fs = require('fs');
const path = require('path')
console.log(__dirname);

//1.大多数情况下使用绝对路径，因为相对路径有时候相对的是命令行工具的当前工作目录
//2.在读取文件或者设置文件路径都会选择绝对路径
//3.可以使用_dirname获取当前文件所在的绝对路径
console.log(path.join(__dirname, './1.nodejs.js'));

fs.readFile(path.join(__dirname, './1.nodejs.js'), 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);
    //读取成功
})