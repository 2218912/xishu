<template>
  <div id="app">
    <!-- <keep-alive> -->
      <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods: {
    
  },
  mounted(){
    // console.log(this);
    window.addEventListener('selectstart',function(e){
      e.preventDefault()
    })
  },
  unmounted() {
    window.addEventListener('selectstart',function(e){
      e.preventDefault()
    })
  },
  
}
</script>

<style lang="less">
*{margin:0; padding: 0;}
li{list-style: none;}
input{outline: none;}
a{text-decoration: none;}
@media screen and (min-width:320px) and (max-width:480px){
  body{
      background: url(../public/background/banner.jpg) no-repeat fixed;
      background-position: center center;
      background-size: cover;
      // max-width: 100%;
      // min-width: 600px;
    }

}

html,
body{
  width: 100%;
  height: 100%;
  background: url(../public/background/banner.jpg) no-repeat fixed;
  background-size: 100% 100vh;
  background-color: black;
  // font-size: 10px;
  // max-width: 100%;
  // min-width: 600px;
    }
  .bordercolor{
    border:1px solid rgba(0, 255, 251, 0.7)
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
    background: rgba(0, 0, 0, 0.8);
    transition: background 2s, color 2s;
    span,i{
      color: white;
      transition: background 2s, color 2s;
    }
  }
  .theme_white{
    color: #4c4948;
    background: rgba(255, 255, 255, 0.8);
    transition: background 2s,color 2s;
  }
  .theme_main_white{
    color: black;
    background: white;
    transition: background 2s,color 2s;
  }
  .theme_main_black{
    color: white;
    background: black;
    transition: background 2s,color 2s;
  }
</style>
