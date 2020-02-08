$(function() {
    //节流阀 互斥锁 当我们点击了小li 此时不需要执行 页面滚动事件里面的 li的背景选择 添加current
    var flag = true;
    //页面滚动导航栏需求
    var toolTop = $('.recom').offset().top;
    toggleTool();

    function toggleTool() {
        //封装函数 只要$(document).scrollTop() >= toolTop 就一定会出现导航栏 刷新也会在
        if ($(document).scrollTop() >= toolTop) {
            $('.fixedtool').fadeIn();
        } else {
            $('.fixedtool').fadeOut();
        }
    }
    $(window).scroll(function() {
        //当页面滚动 导航栏显示或隐藏 如果不滚动但是刷新会消失
        toggleTool();
        //3.页面滚动到某个区域 电梯li相应的添加和删除类名
        // 被卷去的头部大于等于内容区域每个模块的offset().top
        if (flag) {
            $('.floor .w').each(function(i, ele) {
                if ($(document).scrollTop() >= $(ele).offset().top) { //因为这里也有滚动事件
                    console.log(i);
                    $('.fixedtool li').eq(i).addClass('current_tool').siblings().removeClass();

                }
            })
        }
    })


    //2.点击电梯页面滚动相应内容区域
    $('.fixedtool li').click(function() {
        flag = false; //如果点击了小li 就不再执行上面那段代码
        // $(this).index() 点击的li的索引号
        //每次点击li就需要计算页面去往的位置 选出对应索引号的内容区的盒子计算他的offsetTop 就是要去往的位置
        var current = $('.floor .w').eq($(this).index()).offset().top;
        //页面动画滚动效果
        $('body,html').stop().animate({
            scrollTop: current //这里也有滚动事件
        }, function() {
            flag = true; //回调函数 
        })

        //3.点击当前小li 添加current_tool类
        $(this).addClass('current_tool').siblings().removeClass();

    })

})