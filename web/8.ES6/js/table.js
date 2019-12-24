//1.点击tab栏实现切换效果
//2.点击加号,可以添加tab项和内容项
//3.点击x号可以删除当前的tab项和内容项
//4.双击tab项文字或者内容项文字,可以修改里面的文字内容

//抽取对象Tab对象 
//1.该对象具有切换功能
//2.该对象具有添加功能
//3.该对象具有删除功能
//4.该对象具有修改功能
var that;
class Tab {
    constructor(id) {
        //获取元素
        that = this;
        this.main = document.querySelector(id);
        this.lis = this.main.querySelectorAll('li');
        this.sections = this.main.querySelectorAll('section');
        this.add = this.main.querySelector('.tabadd'); //加号按钮
        //li的父元素 
        this.ul = this.main.querySelector('.firstnav ul:first-child') //匹配父元素中第一个ul元素
            //section 父元素
        this.fsection = this.main.querySelector('.tabscon');

        this.init(); //立即调用

    }
    init() { //所以绑定事件都放在init里面
            this.updateNode();
            this.add.onclick = this.addTab;
            // init初始化操作 让相关元素绑定事件 (点击事件)
            for (var i = 0; i < this.lis.length; i++) {
                this.lis[i].index = i;
                this.lis[i].onclick = this.toggleTab; //toggleTab在li点击完执行 指向li
                this.remove[i].onclick = this.removeTab;
                this.spans[i].ondblclick = this.editTab;
                this.sections[i].ondblclick = this.editTab;

            }
        }
        //获取所有li和section 页面一加载就会实行constructor 就会调用init方法 init调用update就会获取li
        //但是点击添加按钮的时候 创造了li和section 调用init就会获取所有li (包括添加的)就会把点击事件补上
        //每次点击重新格式化
        //因为我们动态添加元素 就需要 重新获取 对应的元素 
    updateNode() {
            this.lis = this.main.querySelectorAll('li');
            this.sections = this.main.querySelectorAll('section');
            this.remove = this.main.querySelectorAll('.icon-guanbi');
            this.spans = this.main.querySelectorAll('.firstnav li span:first-child')
        }
        //1.切换功能
    toggleTab() {
        //这里的this指着li
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = 'conactive'

    }
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';

        }
    }
    addTab() {
        //语法:element.insertAdjacentHTML(position,text); position是相对于元素的位置 
        that.clearClass();
        var li = ' <li class="liactive"><span>新选项卡</span></span><span class="inconfont icon-guanbi">x</span></li>';
        var section = '<section class="conactive">测试1</section>';
        //2.把两个元素追加到对应的父元素里面
        //addTab是add按钮调用 指向add按钮 但是add按钮里面没有ul 所以要用全局变量that
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init(); //格式化获取最新元素 就不会有落下的情况了
    }
    removeTab(e) {
        e.stopPropagation(); //阻止冒泡到li 防止触发li的切换点击事件
        var index = this.parentNode.index;
        //根据索引号删除对应的li 和section remove()方法可以直接删除指定元素
        that.lis[index].remove();
        that.sections[index].remove();
        that.init();
        //当我们删除了选中状态的li的时候 让他的前一个li处于选定状态
        if (document.querySelector('.liactive')) {
            //当我们删除的不是选定状态的时候 原来选定状态的不变 因为有了类名说明处于选定状态
            return;
        }
        index--;
        //逻辑中断 console.log(123 && 456); 456 因为123为真 所以返回456
        that.lis[index] && that.lis[index].click();
    }
    editTab() {
        var str = this.innerHTML;
        //1.双击选项卡li或者section里面的文字,可以实现修改功能
        //2.双击事件是 ondblclick
        //3.如果是双击文字会默认选定文字,此时需要双击禁止选中文字 
        //代码 双击禁止选中文字 window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();
        //核心思路:双击文字的时候,在里面生成一个文本框,当失去焦点或者按下回车然后把文本框输入的值给原先元素即可
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type"text" /> '
        var input = this.children[0];
        input.value = str;
        input.select(); //让文本框文字处于选定状态
        //当我们离开文本框 就把文本框值给span
        input.onblur = function() {
                //onblur失去焦点
                this.parentNode.innerHTML = this.value; //this指向input
            }
            //按下回车
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur();
            }
        }

    }
}
new Tab('#tab');