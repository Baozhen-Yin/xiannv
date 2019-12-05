(function flexible(window, document) {
    //获取html根元素 因为rem布局首先是html文字大小 所以先根元素获取过来
    var docEl = document.documentElement
        //dpr:物理像素比 pc端物理像素比为1,移动端是2
    var dpr = window.devicePixelRatio || 1

    // 设置body字体大小
    function setBodyFontSize() {
        //如果页面中有body这个元素
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px' //pc是12px 移动端24px
        } else {
            //如果没有body head引入js DOMContentLoaded主要的DOM元素加载完毕 再去设置字体大小
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize(); //调用

    // 设置屏幕划成10等份 设置html元素的字体大小 
    // set 1rem = viewWidth / 10
    function setRemUnit() {
        // clientWidth 包含内容和padding的宽度 不含边框
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize 当我们页面尺寸大小发生变化 要重新设置rem大小
    window.addEventListener('resize', setRemUnit)
        // pageshow 是我们重新加载页面触发的事件 不管点了什么都可以重新加载链接
    window.addEventListener('pageshow', function(e) {
        //e.persisted返回的是true就是说 如果这个页面是从缓存取过来的页面也需要重新计算一下rem大小
        if (e.persisted) {
            setRemUnit() //重新计算一下rem大小
        }
    })

    // detect 0.5px supports 有些浏览器不支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    }
}(window, document))