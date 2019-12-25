const http = require('http')
http.createServer(function(req, res) {
    console.log('request come', req.url);

    //改了下面一步操作就可以跨域请求被server接受
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    })
    res.end('123')
}).listen(8887);
console.log('server listening on 8887');

//node server.js