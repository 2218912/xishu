<template>
  <div id="app">
        <router-view></router-view>
        <!-- <router-view name="about"></router-view> -->
  </div>
</template>

<script>
// import { log } from 'console'

export default {
  name: 'App',
  components: {
  },
  methods: {
    
  },
}
</script>

<style lang="less">
*{margin:0; padding: 0;}
li{list-style: none;}
a{text-decoration: none;}
body{
      background: url(../public/background/banner.jpg) no-repeat fixed;
      background-size: 100% 100vh;
      // max-width: 100%;
      // min-width: 600px;
    }

@keyframes begin{
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
      display: none;
      z-index: 1;
    }
    }
    @keyframes begin_action{
      from{
        top:-50px;
      }
      to{
        top: 0;
      }
    }

    
  .theme_black{
    color: white;
    background: rgba(0, 0, 0, 0.7);
  }
  .theme_white{
    color: #4c4948;
    background: rgba(255, 255, 255, 0.7);
  }
</style>
