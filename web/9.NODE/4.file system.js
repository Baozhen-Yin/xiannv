// node运行环境模块提供的API，因为这些API都是以模块化的方式进行开发的，所以我们又称Node运行环境提供的API为系统模块 

/* 1.系统模块fs 文件操作 (file system系统，文件操作系统) */

const fs = require('fs');
//读取文件内容
//   fs.reaFile('文件路径' ['文件编码'], callback); //中括号 可选参数 callback糊掉函数

//语法实例
//读取上一级css目录下的base.css
fs.readFile('../css/base.css', 'utf-8', (err, doc) => {
    //如果文件读取发生错误 参数err的值为错误对象 否则err的值为null （err = error 错误）
    //doc参数为文件内容
    if (err == null) {
        console.log(doc);
    }
});