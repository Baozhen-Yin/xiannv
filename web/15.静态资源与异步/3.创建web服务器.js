// 引用系统模块
const http = require('http')

//用于处理url地址
const url = require('url')

//创建web服务器 服务器名称app
const app = http.createServer()

//当客户端发送请求的时候 app.on('事件名称'，事件处理函数 函数当请求来的时候就会处理这个函数)
app.on('request', (req, res) => {
    //获取请求的方式 req.method
    //获取请求的地址 req.url 根据请求的不同响应不同的内容
    //获取请求的报文 req.headers

    //res.writeHead() 书写响应报文
    //res.响应内容类型（css js html等） 'content-type': 'text/plain'

    console.log(req.url); ///index?name=zhangsan&age=20
    url.parse(req.url) //parse（解析地址，true转化成对象）
    let { query, pathname } = url.parse(req.url, true);
    console.log(query.name);
    console.log(query.age);

    res.writeHead(200, {
            //'content-type': 'text/plain' //纯文本 把h2也返回了
            'content-type': 'text/html;charset=utf8' //html格式而是中文没有乱码
        }) //显示服务器端错误

    // console.log(req.headers);

    // console.log(req.url);
    if (pathname == '/index' || req.url == '/') {
        res.end('<h2>welcome to homepage欢迎尹宝祯小仙女</h2>')
    } else if (pathname == '/list') {
        res.end('welcome to listpage')
    } else {
        res.end('not found')
    }
    console.log(req.method); //GET
    if (req.method == 'POST') {
        res.end('post')
    } else if (req.method == 'GET') {
        res.end('get')
    }
    //响应 res.end('响应内容')
    //res.end('<h1>web server</h1>')
})

//监听3000端口
app.listen(3000)
console.log('服务器已经启动，监听3000端口，请访问localhost:3000');