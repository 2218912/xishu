<template>
  <div id="essaybox" :class="{theme_white:!theme,theme_black:theme}">
    <h3>
      <slot name="title"></slot>

    </h3>
    <hr>
    <div class="content">
      <p>
        <slot name="content"></slot>
  
      </p>
    </div>
    <div id="bottom">
      <div id="right">
        <p>
          <slot name="date"></slot>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState('theme',{theme:'theme'})
  },

}
</script>

<style scoped>
#essaybox{
  position: relative;
  margin-top: 5px;
  width: 380px;
  margin-bottom: 10px;
  /* height: 150px; */
  /* overflow: auto; */
}
h3{
  text-align: center;
}
.content{
  width: 100%;
  margin-bottom: 10px;
  /* background: red; */
}
p{
  display: block;
  text-indent: 2em;
  margin-bottom: 10px;
}
#bottom{
  /* position: absolute;
  bottom: 0px; */
  display: none;
  margin-top: 30px;
  width: 100%;
  height: 20px;
  /* border: 1px solid black; */
}
#right{
  position: absolute;
  right: 0px;
  text-align: left;
  font-size: 10px;
  width: 50%;
  height: 100%;
  /* border: 1px solid red; */
}
</style>