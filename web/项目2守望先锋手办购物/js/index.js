window.addEventListener('load', function() {
    //(1)鼠标经过轮播图模块,左右按钮显示,离开隐藏左右按钮
    var arrowleft = document.querySelector('.arrow-l');
    var arrowright = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focuswidth = focus.offsetWidth;
    focus.addEventListener('mouseenter', function() {
        arrowleft.style.display = 'block';
        arrowright.style.display = 'block';
        //鼠标经过就停止定时器
        clearInterval(timer)
        timer = null //清除定时器变量
    })
    focus.addEventListener('mouseleave', function() {
            arrowleft.style.display = 'none';
            arrowright.style.display = 'none';
            timer = setInterval(function() {
                arrowright.click(); //手动调用点击事件
            }, 2000)
        })
        //(2)动态生成小圆圈 
        //1.小圆圈个数要与图片张数一致 
        //2.所以首先得到ul里面的小li数量(图片放入li里面,所以就是li的个数)
        //3.利用for循环动态生成小圆圈 (放入ol里面)
        //4.创造节点 createElement('li')
        //5.插入节点 ol.appendChild(li)
    var ul = focus.querySelector('ul');
    var ol = document.querySelector('.circle')
    for (var i = 0; i < ul.children.length; i++) {
        //创建一个小li
        //把小li插入ul中
        var li = document.createElement('li')
            //记录当前小圆圈索引号 element.setAttribute('属性','值');  主要针对自定义属性 为了方便下面的动画
        li.setAttribute('index', i) //创建自定义属性
        ol.appendChild(li);
        //6.把ol里面的第一个li设置为类current   变成白色 显示当前点击
        //(1)小圆圈排他思想
        //(2)点击当前小圆圈 就添加current类 其余小圆圈移除current类
        // ol.children[0].className = 'current';
        ol.children[0].className = 'current';
        li.addEventListener('click', function() {
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
            }
            this.className = 'current';

            //点小圆圈滚动图片
            //1.此时用到animate动画滚动函数 将js文件引入 因为index也要有animate函数 所以要写在index上方
            //2.使用动画函数的前提是必须要有定位
            //3.注意是ul移动 而不是小li
            //4.滚动图片核心算法:点击某个小圆圈,就让图片滚动,小圆圈的索引号乘以图片的宽度作为ul移动距离
            //5.当我们点击了某个小li就拿到当前的索引号
            var index = this.getAttribute('index');
            num = index //当我们点击了某个小li  就把索引号给num num控制图片下一张的播放 
            circle = index; //当我们点击了某个小li 也要把索引号给circle 控制小圆圈的播放 他们两个需要保持同步
            animate(ul, -index * focuswidth)
        })
    }

    //1.点击右侧按钮一次,就让图片滚动一张
    //2.声明一个变量num,点击一次自增1,这个变量乘以图片的宽度就是ul的滚动距离.
    //3.图片无缝滚动原理
    //4.把ul第一个复制一份 放到ul最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first)
        // （1）克隆ul第一个li cloneNode()  加true深克隆复制里面的子节点 false浅克隆
        // （2）appendChild 添加到ul最后面
        //5.当图片滚动到克隆的最后一张图片时，让ul快速的，不做动画跳到最左侧：left=0；
        //6.同时num赋值为0 就又可以重新开始了
    var num = 0; //控制图片的播放
    var circle = 0; //控制小圆圈的播放
    arrowright.addEventListener('click', function() {
        //如果走到了最后复制的一张图片
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;

        }
        num++;
        animate(ul, -num * focuswidth)
            //1.点击右侧按钮 小圆圈跟着变化
            //2.声明一个变量 circle 每次点击自增1，左侧按钮也需要这个变量 声明的为全局变量
        circle++;
        if (circle == ol.children.length) {
            circle = 0;
        }

        circleChange()
    })

    arrowleft.addEventListener('click', function() {
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focuswidth + 'px';
            }
            num--;
            animate(ul, -num * focuswidth);
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange()
        })
        //3.清除其余的小圆圈current类名
        //4.留下当前小圆圈的current类名
        //但是图片有li+1张 我们圈圈总是少一个，必须加一个判断条件 如果ol.children.length 复原为0
    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    //自动播放功能
    //1.添加一个定时器
    //2.自动播放轮播图，就类似于点击了右侧按钮
    //3.此时我们手动调用右侧按钮点击事件 arrowright.click()
    var timer = setInterval(function() {
            arrowright.click(); //手动调用点击事件
        }, 2000)
        //鼠标经过就停止定时器

})