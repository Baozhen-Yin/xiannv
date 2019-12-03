window.addEventListener('load', function() {
    var arrowleft = document.querySelector('.arrow-l');
    var arrowright = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focuswidth = focus.offsetWidth;
    var num = 0;
    var circle = 0;
    var flag = true;
    focus.addEventListener('mouseenter', function() {
        arrowleft.style.display = 'block';
        arrowright.style.display = 'block';
        clearInterval(timer)
        timer = null;
    })
    focus.addEventListener('mouseleave', function() {
        arrowleft.style.display = 'none';
        arrowright.style.display = 'none';
        timer = setInterval(function() {
            arrowright.click();
        }, 2000)
    })
    var ul = focus.querySelector('ul');
    var ol = document.querySelector('.circle')
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li')
        li.setAttribute('index', i);
        ol.appendChild(li);

        ol.children[0].className = 'current';
        li.addEventListener('click', function() {
            for (var j = 0; j < ol.children.length; j++) {
                ol.children[j].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            num = index;
            circle = index;
            animate(ul, -index * focuswidth)
        })
    }


    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first)

    arrowright.addEventListener('click', function() {
        if (flag) {
            flag = false;

            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;

            }
            num++;
            animate(ul, -num * focuswidth, function() {
                flag = true;
            });

            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }

            circleChange()
        }

    })

    arrowleft.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * focuswidth + 'px';
            }
            num--;
            animate(ul, -num * focuswidth, function() {
                flag = true
            });
            circle--;
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange()
        }
    })

    function circleChange() {
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    var timer = setInterval(function() {
        arrowright.click();
    }, 2000)
})