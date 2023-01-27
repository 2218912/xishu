<template>
  <div>
    <div id="aa">
      <div id="mask" :class="{mask_black:theme,mask_white:!theme}">
        <h2>
          <slot name="title"></slot>
        </h2>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {

  computed:{
    ...mapState('theme',{theme:'theme'})
  }
}
</script>

<style scoped>
#mask{
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 1s;
}
.mask_white{
  color: black;
  background: rgba(255, 255, 255, 0.5);
}
.mask_black{
  color: white;
  background: rgba(0, 0, 0, .7);
}
h2{
  text-align: center;
  line-height: 200px;
  /* color: white; */
  opacity: 1;
  transition: opacity 1s;
}
#aa{
    position: relative;
    margin-bottom: 10px;
    width: 300px;
    height: 200px;
    border-radius: 5px;
    /* border: 1px solid black; */
    transition:all .5s
}
#aa:hover{
    transform: scale(1.05);
    transition:all .5s
}
#aa:hover h2,#aa:hover #mask{
  opacity: 0;
  transition: all 1s;
}
img{
  width: 100%;
  height: 100%;
}
</style>