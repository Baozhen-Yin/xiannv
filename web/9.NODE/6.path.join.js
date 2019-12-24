//1.系统模块的path路径操作

//为什么要进行路径拼接？
//1.不同的操作系统路径分隔符不统一
// windows\ /都可
// linux 上是/
//语法  path.join('路径','路径','路径'，。。。 )

//1.导入path模块
const path = require('path');
//路径拼接
let finialPath = path.join('itcast', 'a', 'b', 'c.css');
//输出结果
console.log(finialPath); //itcast\a\b\c.css