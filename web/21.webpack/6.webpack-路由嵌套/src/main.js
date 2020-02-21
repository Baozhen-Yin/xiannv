import Vue from 'vue'

//1.导入vue-router的包
import VueRouter from 'vue-router'
//2.手动安装 VueRouter
Vue.use(VueRouter)

//导入路由自定义模块
import router from './router.js'

//导入mint-Ui  这一步把所有的组件都导入进来了
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

//导入ybz组件
import ybz from './ybz.vue'

//2.手动安装 mint -UI 这一步把所有的组件都注册为全局组件了
Vue.use(MintUI)


var vm = new Vue({
    el: "#app",
    // render会把el指定的容器中，所有的内容都清空覆盖，所以不要把路由的router-view和router-link直接写到el所控制的元素中
    render: c => c(ybz),

    router //4.将路由对象挂载到vm上
})