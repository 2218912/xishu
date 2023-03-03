<template>
    <div id="paging">
        <MyHeader/>
        <div id="main" :class="{theme_white:theme,theme_black:!theme}">
            <div id="body">
                <!-- <About/> -->
                <Theme />
                <slot>
                    <slot name="guidang"></slot>
                    <slot name="link"></slot>
                    <slot name="about">
                        <slot></slot>
                    </slot>
                </slot>
                <!-- <slot></slot> -->
                <!-- <slot name="login"></slot> -->
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '../my-header/MyHeader.vue'
import {mapState} from 'vuex'
import Theme from '../theme-btn/Theme.vue'
export default {
    name:'Paging',
 components:{
    MyHeader,Theme
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
    // bottom: 0px;
    // margin-bottom: 1px;

    width: 100%;
    // bottom: 0px;
    // flex: ;
    // height: 100%;
    #body{
      margin: 0 auto;
      margin-top: 20px;
      margin-bottom: 320px;
      width: 1000px;
      // border: 1px solid red;
      
    }
  }
</style>