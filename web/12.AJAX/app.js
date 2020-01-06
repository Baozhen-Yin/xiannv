// 引入express框架

const express = require('express');
// 路径处理模块
const path = require('path');
const bodyParser = require('body-parser')
const fs = require('fs');

// 创建web服务器
const app = express();

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 静态资源访问服务功能（静态资源访问功能）
//将静态文件目录设置为：项目根目录+/public  ""express.static""" 将静态文件定义到了public文件夹
app.use(express.static(path.join(__dirname, 'public')));

//对应1.应用场景.html文件
app.get('/first', (request, response) => {
    response.send('hello ajax');
});


app.get('/responseData', (request, response) => {
    response.send({ "name": "ybz" }); //接受一个JSON对象
});

app.get('/get', (request, response) => {
    response.send(request.query);
});

app.post('/post', (request, response) => {
    //接收post请求要依赖一个第三方模块 body-parser
    response.send(request.body);
});

app.post('/json', (request, response) => {
    //接收post请求要依赖一个第三方模块 body-parser
    response.send(request.body);
});


app.get('/readystate', (request, response) => {
    response.send('hello');
});


app.get('/error', (request, response) => {
    //console.log(abc); 500服务器端错误
    //status() 服务器端的方法用来设置http状态码
    response.status(404).send('not ok')
});

app.get('/cache', (request, response) => {
    fs.readFile('./test.txt', (error, result) => {
        response.send(result)
    })
});
// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');