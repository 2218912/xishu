<template>
    <div id="paging">
        <MyHeader/>
        <div id="main">
            <div id="body">
                <!-- <About/> -->
                <slot name="guidang"></slot>
                <slot name="about"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './MyHeader.vue'
import About from './About.vue'
export default {
 components:{
    MyHeader,About
 }
}
</script>

<style lang="less" scoped>
#main{
    position: absolute;
    top:50vh;
    width: 100%;
    height: 100vh;
    background: rgb(255, 255, 255);
    #body{
      margin: 0 auto;
      margin-top: 20px;
      width: 1000px;
      // border: 1px solid red;
      
    }
  }
</style>