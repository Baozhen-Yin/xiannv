//这是项目入口文件


//如何在webpack 构建的项目中使用vue进行开发
//1.如何在普通网页中使用vue
//1.script标签引入vue包
//2.创建一个容器 #app 在index页面中
//3.通过new Vue 得到一个vm 的实例

//在webpack中尝试使用vue
//注意：在webpack中，使用import Vue from 'vue' 导入的vue构造函数，功能不完整，只提供了runtime-only方式，并没有提供
//      向网页那样的使用方式

//包的查找规则 
//1.找 项目根目录里面有没有node_modules文件夹
//2.在node_modules 中根据包名 找对应的vue文件夹
//3.在vue文件夹中 找一个package.json的包配置文件
//4.在package.json 文件中 查找一个main属性 指定了这个包在被加载的时候的入口文件

import Vue from 'vue'
// import Vue from '../node_modules/vue/dist/vue.js'

//导入login组件
import login from './login.vue'


// var login = {
//     template: `<h1>这是login组件,是使用网页中的形式创建的模板</h1>`
// }
var vm = new Vue({
    el: "#app",
    data: {
        msg: "123"
    },
    // components: {
    //     login
    // }
    render: createElements => createElements(login)
})

// import m1 from './test.js'
var m1 = require('./test.js')
console.log(m1); //{name: "ybz", age: 16}