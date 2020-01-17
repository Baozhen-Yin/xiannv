// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');
// 导入bodyParser模块
const bodyParser = require('body-parser');
// 创建web服务器
const app = express();
// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));
// 处理post请求参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/a1', (req, res) => {
    setTimeout(function() {
        res.send('Hello TOM!')
    }, 1000);
})

app.get('/a2', (req, res) => {
    setTimeout(function() {
        res.send('Hello JERRY!')
    }, 2000);
})

app.get('/a3', (req, res) => {
    setTimeout(function() {
        res.send('Hello SPIKE!')
    }, 3000);
})

app.get('/data', (req, res) => {
    res.send('Hello World!')
})

app.get('/data1', (req, res) => {
    setTimeout(function() {
        res.send('Hello TOM!')
    }, 1000);
})

app.get('/data2', (req, res) => {
    res.send('Hello JERRY!')
})

app.get('/fdata', (req, res) => {
    res.send('Hello FETCH')
})

app.get('/books', (req, res) => {
    res.send('传统的URL传递参数' + req.query.id)
})

app.get('/books/:ybz', (req, res) => {
    res.send('restful形式的URL传递参数' + req.params.ybz)
})

//delete方式传参
app.delete('/books/:ybz', (req, res) => {
    res.send('delete请求的URL传递参数' + req.params.ybz)
})

app.post('/books', (req, res) => {
    res.send('POST请求的URL传递参数' + req.body.uname + '---' + req.body.age)
})


app.put('/books/:id', (req, res) => {
    res.send('PUT请求的URL传递参数' + 'id=' + req.params.id + "---" + req.body.uname + '---' + req.body.age)
})

app.get('/json', (req, res) => {
    res.json({
        uname: 'ybz',
        age: 11,
        gender: 'famale'
    })
})

app.get('/adata', (req, res) => {
    res.send('hello axios!!')
})

app.get('/axios', (req, res) => {
    res.send('通过axios get传递参数' + req.query.id)
})

app.get('/axioss/:uname', (req, res) => {
    res.send('通过axios get(Restful)传递参数' + req.params.uname)
})

app.get('/axiosybz', (req, res) => {
    res.send('通过axios get传递参数' + 'id=' + req.query.id + "name=" + req.query.uname)
})

app.delete('/deletedata', (req, res) => {
    res.send('通过axios delete传递参数' + 'id=' + req.query.id + "name=" + req.query.uname)
})

app.post('/axios', (req, res) => {
    res.send('通过axios post传递参数 JSON形式' + req.body.uname + req.body.pwd)
})

app.post('/axiosxyk', (req, res) => {
    res.send('通过axios post传递参数字符串形式' + req.body.uname + req.body.pwd)
})


app.put('/axios/:id', (req, res) => {
    res.send('通过axios put 传递参数 ' + 'id=' + req.params.id + 'name=' + req.body.uname + 'pwd=' + req.body.pwd)
})

app.get('/axios-json', (req, res) => {
    res.json({
        uname: 'ybz',
        age: 12
    })
})

app.get('/async1', (req, res) => {
    res.send('hello')
})

app.get('/async2', (req, res) => {
    if (req.query.info == 'hello') {
        res.send('ybzybzybz')
    } else {
        res.send('xykxykxyk')
    }
})



app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');