const fs = require('fs');
//promise解决异步编程中回调地狱的问题

//promise 是构造函数 需要用new构造符创建promise实例对象
let promise = new Promise((resolve, reject) => {
    //resolve 是一个函数 当异步api有返回结果时成功 可以去调用这个函数 并且把异步api结果通过参数传递出去
    //reject 是一个函数 当异步api执行失败 调用 把失败的结果传递到promise外面
    fs.readFile('./1.txt', "utf8", (error, result) => {
        //做到异步api的执行和结果做出分离
        if (error != null) {
            //文件读取失败
            reject(error)
        } else {
            resolve(result)
        }
    })
})

//拿到异步api执行结果 执行与错误处理进行了分离
promise.then(result => console.log(result)) //1是尹宝祯
    .catch((error) => {
        console.log(error);
    })