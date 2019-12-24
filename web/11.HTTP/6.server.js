const http = require('http')
    //引入系统模块fs
const fs = require('fs')

http.createServer(function(req, res) {

    console.log('request come', req.url);
    //利用node里面的fs.readFileSync读取文件内容 读取8.text.html
    //系统模块fs 文件操作 (file system系统，文件操作系统)
    const html = fs.readFileSync('8.test.html', 'utf-8')
    response.writeHead(200, {
            'Content-Type': 'text/html'
        })
        //response.end 发送
    response.end(html)
}).listen(8888);
console.log('server listening on 8888');

//node server.js