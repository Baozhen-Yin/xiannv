//回调函数获取异步api
function getData(callback) { //callback这个形参对应的实参实际是一个匿名函数
    callback('尹宝祯小可爱') //可以这样调用匿名函数
}

getData(function(n) {
    console.log('callback函数被调用啦');
    console.log(n); //尹宝祯小可爱
})