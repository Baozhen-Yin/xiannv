// 引入express框架

const express = require('express');
// 路径处理模块
const path = require('path');

// 创建web服务器
const app = express();


// 静态资源访问服务功能（静态资源访问功能）
app.use(express.static(path.join(__dirname, 'public')));

//对应1.应用场景.html文件
app.get('/first', (request, response) => {
    response.send('hello ajax');
});


app.get('/responseData', (request, response) => {
    response.send({ "name": "B" }); //接受一个JSON对象
});

app.get('/get', (request, response) => {
    response.send(request.query); //接受一个JSON对象
});

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');