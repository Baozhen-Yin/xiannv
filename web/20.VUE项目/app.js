//导入http内置模块
const http = require('http')
    //这个核心模块能帮我们解析 URL地址 从而拿到 pathname query
const urlModule = require('url')
    //创建一个http服务器
const server = http.createServer()

//监听http服务器的 request 请求
server.on('request', function(req, res) {
    // const url = req.url
    ////url.parse()第二个参数为true，query属性会生成一个对象，
    //如果为false,则返回url对象上的query属性会是一个未解析，未解码的字符串，默认为false

    //url.parse(urlStr, [parseQueryString], [slashesDenoteHost]);
    //接收参数：
    //urlStr                                       url字符串
    //parseQueryString                   为true时将使用查询模块分析查询字符串，默认为false
    //slashesDenoteHost               
    //默认为false，//foo/bar 形式的字符串将被解释成 { pathname: ‘//foo/bar' }
    //如果设置成true，//foo/bar 形式的字符串将被解释成  { host: ‘foo', pathname: ‘/bar' }
    const { pathname: url, query } = urlModule.parse(req.url, true)
        // Url {
        //     protocol: null,
        //     slashes: null,
        //     auth: null,
        //     host: null,
        //     port: null,
        //     hostname: null,
        //     hash: null,
        //     search: '?callback=showInfo',
        //     query: { callback: 'showInfo' },
        //     pathname: '/getScript',
        //     path: '/getScript?callback=showInfo',
        //     href: '/getScript?callback=showInfo'
        // }
        // 2.再把这个回调方法的名称，通过URL传参的形式，提交到服务器的数据接口；
    if (url === '/getscript') {
        var data = {
                name: 'ybz',
                age: 18,
                gender: '仙女'
            }
            // `${expression}`
            // 字符串占位符
            //在一个模板字面量中，你可以把任何合法的JavaScript表达式嵌入到占位符中将其作为字符串的一部分输出到结果中。
            //占位符${expression}中间可以包含任意的JavaScript表达式

        // 3. 服务器数据接口组织好要发送给客户端的数据，再拿着客户端传递过来的回调方法名称，
        //拼接出一个调用这个方法的字符串，发送给客户端去解析执行；
        var scriptStr = `${query.callback}(${JSON.stringify(data)})`
        res.end(scriptStr) //请求成功+http调用
    } else {
        res.end('404')
    }
})

server.listen(3000, function() {
    console.log('服务器启动成功');

});
// 控制台提示输出