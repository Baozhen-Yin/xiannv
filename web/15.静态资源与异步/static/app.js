//静态资源访问

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const app = http.createServer();

app.on('request', (req, res) => {
    //1. 获取用户的请求路径
    let pathname = url.parse(req.url).pathname;

    pathname = pathname == '/' ? '/default.html' : pathname;

    //2. 将用户的请求路径转换为实际的服务器硬盘路径
    let realPath = path.join(__dirname, 'public' + pathname);

    let type = mime.getType(realPath) // mime.getType通过路径返回这个资源的类型
        //  console.log(type);

    //3. 读取文件
    fs.readFile(realPath, (error, result) => { //因为异步api所以函数读取文件操作一般都是在回调函数中进行的
        // 如果文件读取失败
        if (error != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('文件读取失败');
            return;
        }

        //使用新的浏览器可能不会出问题 但老的可能会 所以一定要返回静态资源访问类型
        res.writeHead(200, {
            'content-type': type
        })

        //4.响应给客户端
        res.end(result);
    });
});

app.listen(3000);
console.log('服务器启动成功')