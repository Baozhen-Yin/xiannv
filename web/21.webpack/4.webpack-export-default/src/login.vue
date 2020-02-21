
<template>
<!-- 写html代码 -->
<div><h1>这个login.vue就是一个纯粹的组件--{{msg}}+1</h1></div>
</template>

<script>
// 写业务逻辑
export default {
    data(){
        return{
            msg:'尹宝祯'
        }
    },
    methods: {
        show(){
            console.log('调用了login.vue里面的show方法')
        }
    },
}
</script>

<style lang="">
/* 写样式 */
/* h1 {
color: aquamarine
} */
    
</style>