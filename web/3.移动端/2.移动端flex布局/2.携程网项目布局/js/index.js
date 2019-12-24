window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var ol = focus.children[1];
    //获得focus宽度
    var w = focus.offsetWidth;
    //2.利用定时器自动轮播图片
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        //3.想要图片优雅的移动 可以添加css3方法过渡
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px )'
    }, 2000);
    //4.自动播放功能，无缝滚动，要等到图片滚动完毕再去判断，就是过渡完之后再判断
    //（1）此时需要添加过渡完成事件 transitionend
    ul.addEventListener('transitionend', function() {
        //（2）如果我的索引号为 ul.children.length 那么就是最后一张 需要跳回索引号0
        if (index >= 3) {
            index = 0;
            //（3）去掉过渡效果 ul快速跳到目标位置
            ul.style.transition = 'none';
            //（4）图片还是要滚动 利用最新的索引号乘以宽度取滚动图片 实现无缝滚动
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px )'
                //（5）如果索引号小于0 说明倒着走 索引号等于ul.children.length-1
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px )'
        }
        //5.小圆点跟随变化效果
        //（1）把ol里面li带有current的类名选出来去掉类名；
        ol.querySelector('.current').classList.remove('current')
            //（2）让当前索引号的小li加上current add
        ol.children[index].classList.add('current')
            //（3）但是是等着过渡结束后变化 所以这个写到transitionend事件里面

    });
    //6.手指滑动轮播图
    //（1）本质就是ul跟随手指移动，简单说就是移动端拖动元素
    //（2）触摸元素touchstart：获取手指初始坐标;
    var startX = 0; //只左右滑动 不需要y
    var moveX = 0;
    var flag = false;
    ul.addEventListener('touchstart', function(e) {
            startX = e.targetTouches[0].pageX;
            //手指触摸停止定时器
            clearInterval(timer)
        })
        //（3）移动手指 touchmove：计算手指滑动距离，并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * w + moveX;
        //手指拖动不需要动画效果 所以取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px )'
        flag = true; //如果手指没有移动就没有必要触发了
    })
    ul.addEventListener('touchend', function(e) {
            if (flag) { //如果手指没有移动就没有必要触发了
                //（4）手指离开 根据移动距离判断是回弹还是播放下一站
                //1. 如果大于某个像素就上一张下一张的滑动
                if (Math.abs(moveX) > 50) { //绝对值
                    if (moveX > 0) {
                        //如果右滑播放上一张 moveX正值
                        index--;
                    } else {
                        //如果左滑播放上一张 moveX负值
                        index++;
                    }
                    var translatex = -index * w;
                    ul.style.transition = 'all .3s';
                    ul.style.transform = 'translateX(' + translatex + 'px )'
                } else { //2.如果移动距离小于某个像素就弹回原来位置
                    var translatex = -index * w;
                    ul.style.transition = 'all .1s';
                    ul.style.transform = 'translateX(' + translatex + 'px )'
                }
            }
            //当我们手指离开重新开启定时器 
            clearInterval(timer);
            timer = setInterval(function() {
                index++;
                var translatex = -index * w;
                //3.想要图片优雅的移动 可以添加css3方法过渡
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px )'
            }, 2000);

        })
        //（5）返回顶部模块制作
    var goback = document.querySelector('.goback');
    var nav = document.querySelector('nav'); //被卷去的头部
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goback.style.display = 'block';
        } else {
            goback.style.display = 'none';
        }
    });
    goback.addEventListener('click', function() {
        window.scroll(0, 0)
    })
})