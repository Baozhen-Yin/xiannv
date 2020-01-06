// 引用系统模块
const http = require('http')
    //处理请求参数模块
const querystring = require('querystring');
//创建web服务器 服务器名称app
const app = http.createServer()

//当客户端发送请求的时候 app.on('事件名称'，事件处理函数 函数当请求来的时候就会处理这个函数)
app.on('request', (req, res) => {
    //接受post参数 是通过事件的方式接受 理论上数据量可以无限 post接收不是一次就接收完的
    //data 当请求参数传递时
    //end  当参数传递完成
    var postParams = ''

    req.on('data', (params) => {
        postParams += params //因为不是一次就传完需要拼接
    });
    req.on('end', () => {
            // querystring.parse(postParams)
            // console.log(postParams);
            console.log(querystring.parse(postParams));
        })
        //username=ybz&password=1234565
        //每一个请求必须有响应
    res.end('ok')
})

//监听3000端口
app.listen(3000)
console.log('服务器已经启动，监听3000端口，请访问localhost:3000');