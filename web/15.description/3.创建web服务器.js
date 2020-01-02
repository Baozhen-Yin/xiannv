// 引用系统模块
const http = require('http')

//创建web服务器 服务器名称app
const app = http.createServer()

//当客户端发送请求的时候 app.on('事件名称'，事件处理函数 函数当请求来的时候就会处理这个函数)
app.on('requist', (req, res) => {

    //响应 res.end('响应内容')
    res.end('<h1>啊！我创建了web服务器</h1>')
})

//监听3000端口
app.listen(3000)
console.log('服务器已经启动，监听3000端口，请访问localhost:3000');