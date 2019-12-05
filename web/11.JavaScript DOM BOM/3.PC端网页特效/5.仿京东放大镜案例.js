window.addEventListener('load', function() {
    var previewimg = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');

    //1.当我们鼠标经过previewimg 就显示和隐藏我们的遮罩层和大图片
    previewimg.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    previewimg.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })
        //2.让黄色的盒子跟着鼠标走 应该把盒子内的鼠标坐标给盒子 而不是全局的坐标
        //3.先获取鼠标在盒子内的坐标 之后把数值给遮罩层作为left 和 top 的值
        //4.此时用到鼠标移动事件,但是还是在小图片盒子内移动
    previewimg.addEventListener('mousemove', function(e) {
        //(1).先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // 5.让鼠标居中 盒子高度宽度一半都是150
        //6.遮挡层不能超出小图片的盒子范围
        // (2)如果mask移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        //7.如果小于零,就把坐标设置为0 如果大于遮罩层最大的移动距离,就把坐标设置为最大的移动距离
        //遮挡层的最大移动距离 (水平)
        var maskMax = previewimg.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            //8.遮挡层最大移动距离 是大盒子宽度减去小盒子宽度
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= previewimg.offsetHeight - mask.offsetHeight) {
            maskY = previewimg.offsetHeight - mask.offsetHeight
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        //9.当我们移动小盒子 大盒子跟着一起移动. 按照某种比例来移动 
        //(3)因为我们遮罩层盒子是300*300 big图片是800*800 按照比例 公式

        var bigimg = document.querySelector('.bigimg');
        var bigMax = bigimg.offsetWidth - big.offsetWidth;
        //(4) 公式 遮罩层移动距离/遮挡层最大移动距离 = 大图片移动距离/大图片最大移动距离 

        // 求大图片移动距离? X Y 因为是正方形算一个宽就行了
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        // 10.现在让大图片跟着一起走
        //11.如果没有动说明大图没有定位 去css定位 然后可以赋值top left
        //12.大图和遮罩层反方向走的
        bigimg.style.left = -bigX + 'px';
        bigimg.style.top = -bigY + 'px';
    })
})