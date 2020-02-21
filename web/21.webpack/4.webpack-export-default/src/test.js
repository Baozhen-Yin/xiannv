//这是node中向外暴露成员的方式

//在ES6中也通过 规范的形式 规定了ES6中如何导入和导出模块
//ES6中导入模块 使用(import 模块名称 fron '模块标识符') 或者 import '表示路径'
//在es6使用export default 和 export 向外暴露成员
// export default {
//     name: 'ybz',
//     age: 16
// }

//在node中使用 var 名称 = require('模块标识符)
//module.exports 和 exports 来暴露成员
module.exports = {
    name: 'ybz',
    age: 16
}