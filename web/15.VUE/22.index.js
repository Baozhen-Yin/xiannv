var title = ['序号', '名称', '单价', '数量', '操作'];
var context = [
    [
        { name: 'hair冰箱', price: 5600, amount: 2, check: false },
        { name: 'DELl电视机', price: 3400, amount: 1, check: false },
        { name: '格力空调', price: 3100, amount: 1, check: false }
    ],
    [
        { name: 'apple手机', price: 5600, amount: 2, check: false },
        { name: 'huawei手机', price: 3400, amount: 1, check: false },
        { name: '小米手机', price: 3100, amount: 1, check: false }
    ],
    [
        { name: '青菜', price: 5600, amount: 2, check: false },
        { name: '黄瓜', price: 3400, amount: 1, check: false },
        { name: '西红柿', price: 3100, amount: 1, check: false }
    ],
    [
        { name: '青菜', price: 5600, amount: 2, check: false },
        { name: '黄瓜', price: 3400, amount: 1, check: false },
        { name: '西红柿', price: 3100, amount: 1, check: false },
        { name: '西红柿', price: 3100, amount: 1, check: false }
    ],
]

var app = new Vue({
        el: '#app',
        data: {
            title: title,
            context: context,
            checked: false,
            num: 0,

        },
        computed: {
            totals: function() {
                var info = this.context;
                var total = 0;
                for (var i = 0; i < info.length; i++) {
                    for (var j = 0; j < info[i].length; j++) {
                        if (info[i][j]['check']) {
                            total += info[i][j]['price'] * info[i][j]['amount'];
                        }
                    }
                }
                return total;
            },


        },
        methods: {
            nums: function(index, indexs) {

                if (indexs == 0) {
                    num = index + 1;
                    return index + 1;
                } else {
                    num += 1
                    return num
                }
            },
            del: function(index, indexs) {
                //删除当前索引下的数据

                return this.context[indexs].splice(index, 1);
            },
            add: function(index, indexs) {
                return this.context[indexs][index].amount++;
            },
            checks: function(index, indexs) {
                this.context[indexs][index].check = true
                return this.context[indexs][index].check
            },
            reduce: function(index, indexs) {
                //再判断一遍数量，如果为1，就不让减了
                if (this.context[indexs][index].amount === 1) return;
                return this.context[indexs][index].amount--;
            },
            handlall: function() {
                if (this.checked) {
                    console.log("全没选中")
                    var arr = this.context;
                    for (var i = 0; i < arr.length; i++) {
                        for (var j = 0; j < arr[i].length; j++) {
                            arr[i][j]['check'] = false
                        }

                    }

                } else {
                    console.log("全选中了")
                    var arr = this.context;
                    for (var i = 0; i < arr.length; i++) {
                        for (var j = 0; j < arr[i].length; j++) {
                            arr[i][j]['check'] = true
                        }

                    }

                }
            }


        }
    })
    //添加新的list