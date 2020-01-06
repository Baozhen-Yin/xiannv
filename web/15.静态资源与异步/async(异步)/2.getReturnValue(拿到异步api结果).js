//例子
function getMsg1(callback) {
    setTimeout(function() {
        callback({
            msg: 'ybz'
        })
    }, 1000)
}
getMsg1(function(data) {
    console.log(data); //{ msg: 'ybz' }  这样就拿到了异步api执行的结果
})

//同步api
function sum(n1, n2) {
    return n1 + n2
}
const result = sum(10, 20) //直接通过返回值的方式计算相加的结果
console.log(result);



setTimeout(function count(n1, n2) {
        return n1 + n2
    }, 1000)
    // const result1 = count(25, 22) 报错 不可以
    //console.log(result1);

function getMsg() {
    setTimeout(function() {
            return { msg: '尹宝祯大美女' } //拿不到返回值
        }, 1000)
        //return undefined 
        //因为异步api不会阻塞后续代码的执行 所以在函数底部直接返回undefined
        //过了一秒后 我们执行里面的定时器 return尹宝祯大美女 但是在之前我们早已经拿到了undefined 直接进行了输出
}
const msg = getMsg()
console.log(msg); //undefined