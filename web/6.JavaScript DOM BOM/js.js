function createStreamingClient(url, progress, finished) {
    //要连接的url 在接收到数据时调用的函数以及关闭时调用的函数
    var xhr = new XMLHttpRequest();
    received = 0;
    xhr.open('get', url, true);
    xhr.onreadystatechange = function() {
        //只要onreadystatechange事件发生,而且readyState值为3
        //就对responseText进行分割取得最新数据
        var result;
        if (xhr.readyState == 3) {
            //只取得最新的数据并调整计算器
            result = xhr.responseText.substring(received);
            received += result.length

            //progress函数会在浏览器接收新数据期间周期性的触发
            progress(result)
        } else if (xhr.readyState == 4) {
            //当readyState为4 执行finished回调函数 传入响应返回的全部内容
            finished(xhr.responseText)
        }
    }
    xhr.send(null);
    return xhr
}
var client = createStreamingClient('server.js', function(data) {
    alert('received:' + data);
}, function(data) {
    alert('done!');
})


var source = new EventSource('server.js')
source.onmessage = function(event) {
    //服务器发回的数据以字符串形式保存在event.data中
    var data = event.data
        //处理数据
}