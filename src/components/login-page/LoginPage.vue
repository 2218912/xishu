<template>
    <div>
      <myheader></myheader>
      <Theme/>
      <div id="main">
          <div id="login-box" :class="{theme_white:theme,theme_black:!theme}">
            <!-- <h1>{{ this.theme }}</h1> -->
            <router-view></router-view>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  import myheader from '../my-header/MyHeader.vue'
  import Theme from '../theme-btn/Theme.vue'
  export default {
  data(){
      return{
      }
  },
  components:{
      myheader,Theme
  },
  computed:{
    ...mapState('theme',{theme:'theme'})
  },

  mounted(){
  }
  }
  </script>
  
  <style scoped>
  .aa{
    background: red;
  }
  #main{
      /* position: relative; */
      margin:0;
      width: 100%;
      height:100vh;
      /* background: white; */
      display: flex;
      flex-direction:column;
      justify-content: center;
  }
  #login-box{
      /* position: absolute; */
      /* top:50%; */
      margin: 0 auto;
      padding: 80px;
      width: 250px;
      height: 250px;
      /* background: rgba(255, 255, 255, .6); */
      box-shadow: 0px 0px 20px rgba(0, 0, 0, .5);
      border-radius: 50%;
      animation: login-page 2s;
  }
  @keyframes login-page{
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
  }
  
  </style>