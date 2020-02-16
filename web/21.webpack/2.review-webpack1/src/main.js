console.log('okk');

import '../src/css/index.css'

import 'bootstrap/dist/css/bootstrap.css'

class person {
    //使用static关键词可以定义静态属性
    //所谓静态属性就是可以直接通过类名 直接访问的属性 比如Person.info
    //实例属性是相反静态属性  只能通过类的实例来访问的属性  p1.name
    static info = { name: 'ybz', age: 20 }
}

var p1 = new person()
console.log(p1.name);

//在webpack中只能处理一部分ES6语法，一些更高级的ES6语法或者ES7语法，webpack是处理不了的；这时候 就需要借助第三方的loader来帮助webpack处理这些高级的语法，当第三方loader把高级语法转为 低级的语法之后 会把结果交给webpack打包到bundle.js中,通过Babel可以帮我们转化将高级的语法转化低级的语法，在webpack中可以运行如下两套命令，安装两套包去安装Babel相关的loader功能
//1.第一套包 ：npm install babel-core babel-loader babel-plugin-transform-runtime -D
//2.第二套包：npm install babel-preset-env babel-preset-stage-0 -D

function Animal(name) {
    this.name = name
}
Animal.info = '123'

var a1 = new Animal('xyk')

//这是静态属性 Animal.info
a1.name //这是实例属性