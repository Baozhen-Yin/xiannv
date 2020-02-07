const http = require('http')
const fs = require('fs')

http.createServer(function(req, res) {
    const host = req.headers.host
        // console.log('request come', req.url);
    if (req.url === '/') {
        const html = fs.readFileSync('test.html', 'utf8')
        if (host === 'a.test.com') {
            res.writeHead(200, {
                'Content-Type': 'text/html',
                // 2s 过期  HttpOnly禁止js访问cookie 如果涉及安全性可以用这种方法
                // 'Set-Cookie': ["id=123;max-age=2", "abc=456;HttpOnly"]
                'Set-Cookie': ["id=123;max-age=2", "abc=456"]
            })
        }
        //response.end 发送
        res.end(html)
    }

}).listen(8888);
console.log('server listening on 8888');

//node server.js