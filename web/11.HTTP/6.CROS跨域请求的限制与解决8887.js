const http = require('http')
    // 当一个资源从与该资源本身所在的服务器不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。
http.createServer(function(req, res) {
    console.log('request come', req.url);

    //改了下面一步操作就可以跨域请求被server接受
    res.writeHead(200, {
        //允许跨域头 需要服务器同意跨域才可以返回 *任何服务（任何域名到的页面）都可以访问这个服务 非常不安全
        // 'Access-Control-Allow-Origin': '*'

        //允许8888访问
        // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8888'

        'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
        'Access-Control-Allow-Headers': 'X-Test-Cors',
        //默认允许 GET HEAD POST
        'Access-Control-Allow-Methods': 'PUT,POST,Delete',

        //默认允许的Content-Type   1.text/plain  2.multipart/from-data 3.application/x-www-form-urlencoded

        //上面请求以这种方式发送请求的跨域的最长时间 1000毫秒之内 不需要再发送预请求来验证 直接发起正式请求即可 Request Method: OPTIONS
        'Access-Control-Max-Age': '1000',
    })
    res.end('123')
}).listen(8887);
console.log('server listening on 8887');

//node server.js

//跨域资源共享(CORS) 是一种机制，它使用额外的 HTTP 头来告诉浏览器 
// 让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。