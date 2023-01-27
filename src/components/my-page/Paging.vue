<template>
    <div id="paging">
        <MyHeader/>
        <div id="main" :class="{theme_white:theme,theme_black:!theme}">
            <div id="body">
                <!-- <About/> -->
                <slot name="guidang"></slot>
                <slot name="about"></slot>
                <slot name="login"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '../my-header/MyHeader.vue'
import About from '../about-page/About.vue'
import {mapState} from 'vuex'
export default {
 components:{
    MyHeader,About
 },
 computed:{
    ...mapState('theme',{theme:'theme'})
 }
}
</script>

<style lang="less" scoped>
#main{
    position: absolute;
    top:50vh;
    width: 100%;
    height: 100%;
    #body{
      margin: 0 auto;
      margin-top: 20px;
      width: 1000px;
      // border: 1px solid red;
      
    }
  }
</style>