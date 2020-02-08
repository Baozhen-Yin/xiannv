function animate(obj, target, callback) {
    //调用animate函数的时候 如果是点击事情 这个函数会在点击多次时执行很多次 因为开启了太多定时器
    //解决方案就是 让我们元素只有一个定时器执行
    //从上到下执行 下面这句先把所有定时器清除
    clearInterval(obj.timer);
    obj.timer = setInterval(stop, 30);

    function stop() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer)
                //回调函数写的位置 ,定时器结束的位置
            if (callback) {
                callback() //调用函数
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }
}