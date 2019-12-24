//写入文件内容
// fs.writeFile('文件路径/名称', '即将要写入的内容', callback) 文件路径不存在的话他会自己创作一个

//写入情景
//1.在网站运行中是否有报错
//2.希望在程序报错的时候 能将报错写道错误日志里面 写入文件 方便

//1.引入模块
const fs = require('fs');

const content = '<h3>正在使用fs.writeFile写入文件内容</h3>'
fs.writeFile('./demo.txt', content, err => {
    if (err != null) {
        console.log(err);
        //阻止代码向下运行
        return
    }
    console.log('文件写入成功');

})