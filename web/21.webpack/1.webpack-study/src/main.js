//项目的入口文件

//import *** from *** 是ES6中导入模块的方式
import $ from 'jquery'
//或者 const $ = require('jquery')

//使用import语法导入css样式表
import './css/index.css'
import './css/index.less'
import './css/index.scss'


$(function() {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', function() {
        return '#' + 'D97634'
    })
})