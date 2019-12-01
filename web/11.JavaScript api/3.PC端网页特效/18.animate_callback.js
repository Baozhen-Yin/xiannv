function animate(obj, target, callback) {
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