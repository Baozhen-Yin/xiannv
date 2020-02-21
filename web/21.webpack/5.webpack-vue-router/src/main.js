import Vue from 'vue'

//1.导入vue-router的包
import VueRouter from 'vue-router'
//2.手动安装 VueRouter
Vue.use(VueRouter)

//导入ybz组件
import ybz from './ybz.vue'

//导入account组件
import account from './main/Account.vue'

//导入goodslist组件
import goodslist from './main/Goodslist.vue'


//3.创建路由对象
var router = new VueRouter({
    routes: [
        //account goodslist 组件
        { path: '/account', component: account },
        { path: '/goodslist', component: goodslist }
    ]
})

var vm = new Vue({
    el: "#app",
    // render会把el指定的容器中，所有的内容都清空覆盖，所以不要把路由的router-view和router-link直接写到el所控制的元素中
    render: c => c(ybz),

    router //4.将路由对象挂载到vm上
})