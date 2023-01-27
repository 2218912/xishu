<template>
    <div id="ap">
      <!-- 导航头部组件 -->
      <MyHeader v-show="show"></MyHeader>
      <div id="banner">
        <!-- 字幕层 -->
        <div id="mask" :class="{mask:theme,theme_black:!theme}">
          <!-- <router-link to="/guanyu"> -->
            <h1>生活既是梦，梦亦是生活</h1>
        </div>
        <!-- 闪光层 -->
        <div id="begin"></div>
        <!-- timp page -->
        <div id="time" ref="time">
          <div></div>
        </div>
        <!-- 侧边工具 -->
        <Theme></Theme>

        <div id="banner1" @click="scroll">
          <i class="iconfont icon-xiangxia"></i>
        </div>
      </div>
      <!-- 主体 -->
      <div id="main">
        <div id="center_main_box">
            <LeftBox v-for="(item,index) in leftbox" :key="index">
              <font slot="title" v-text="item.title"></font>
              <font slot="MainText" v-text="item.text"></font>
              <img slot="img" :src="item.src"/>
            </LeftBox>
        </div>

        <div id="right_main_box">
            <div id="right_top_box" :class="{theme_white:theme,theme_black:!theme}">
                <div id="headshot">
                  <img src="../../assets/img/avatar.gif" alt="ss">
                </div>
            </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import MyHeader from '../my-header/MyHeader.vue';
  import LeftBox from '../my-box/Left_Box.vue';
  import Theme from '../theme-btn/Theme.vue'
  import {mapState} from 'vuex';
  
  export default {
    name: 'App',
    components: {
      MyHeader,LeftBox,Theme
    },
    data() {
      return {
        show:true,
        theme1:true,
        scrolltop:'0',
        leftbox:[
          {title:'每日励志',text:'人往高处走，水往低处流，加油少年，未来可期',src:require('../../assets/img/1.gif')},
          {title:'IE官网',text:'微软Edge浏览器官方微博5月16日消息，微软IE浏览器将于6月16日正式退役，IE浏览器退役后，将由Edge接力',src:require('../../assets/img/IE.png')},
          // {title:'',text:'',src:require('')},
        ]
        
      }
    },
    methods:{
      clickHandle(fn){
        return a(fn)
      },
      scroll(){
        this.$nextTick(()=>{
          const timer=setInterval(() => {
            var a=document.documentElement.scrollTop
            var b=document.documentElement.clientHeight
            // 初始值=(结束值-初始值)/缓动系数
            var step=(b-a)/10
            step=step>0?Math.ceil(step):Math.floor(step)
            a=a+step
            document.documentElement.scrollTop=a
            if(a>=b){
              clearInterval(timer)
             }
          }, 15);
        })
      },

      headerscroll(){
        
        var top=document.documentElement.scrollTop
        if(top>=this.scrolltop+10){
          this.show=false
          // console.log('1');
        }else if(top<=this.scrolltop-60){
          this.show=false
        }
        if(top<=30){
          this.show=true
        }
        this.scrolltop= top
        // console.log(this.scrolltop);
      },
    },
    computed:{
      ...mapState('theme',{theme:'theme'})
    },
    watch:{
    },
    mounted(){
      window.addEventListener('scroll',this.headerscroll)
      
    },
    unmounted() {
      window.addEventListener('scroll',this.headerscroll)
    },
    beforeDestroy(){
    console.log('被销毁了');
  }
  }
  </script>
  
  <style lang="less" scoped>
  @media screen and (min-width:320px) and (max-width:480px){
    // #ap{
    //   position: relative;
    //     #mask{
    //     position: absolute;
    //     top:-50px;
    //     width: 100%;
    //     height: 100vh;
    //     z-index: 50;
    //     animation: begin_action 1s forwards;
        h1{
          color: white;
          text-align: center;
          line-height: 100vh;
          font-size: 20px;
      //   }
      // }
    }
  }
    #ap{
      position: relative;
      #tim{
        position: fixed;
        top:0;
        width: 100%;
        height: 100vh;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 101;
        div{
          width: 500px;
          height: 500px;
          border: 1px solid red;
          margin: 0 auto;
        }
      }
      #banner{
        position: absolute;
        top: 0px;
        width: 100%;
        height: 100vh;
        #banner1{
          position: absolute;
          bottom: 10px;
          width: 100%;
          height: 50px;
          // background: rgba(255, 255, 255, 0.2);
          z-index: 100;
          display: flex;
          flex-direction: column;
          // justify-content: center;
          text-align: center;
          i{
            font-size: 23px;
            animation: banner1 1s infinite alternate;
          }
        }
        @keyframes banner1{
          from{
            transform: translateY(0px);
            // transform: scale(1.2);
            opacity: 1;
          }
          to{
            transform: translateY(20px);
            opacity: .6;
          }
        }
      }
      #mask{
        position: absolute;
        top:-50px;
        width: 100%;
        height: 100vh;
        z-index: 50;
        animation: begin_action 1s forwards;
        h1{
          color: white;
          text-align: center;
          line-height: 100vh;
        }
        }
        .mask{
          background: none;
          transition: background 2s;
        }

    #begin{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      background: white;
      z-index: 101;
      animation: begin 2s forwards;
    }
    
    #main{
      position: absolute;
      top:100vh;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      height: 100vh;
      background:rgba(0, 0, 0, 0);
      display: flex;
      justify-content: space-evenly;
      #center_main_box{
        margin: 20px 10px 20px 40px;
        width: 60%;
        ul{
          width: 100%;
          overflow: auto;
        }
      }
      #right_main_box{
        margin: 20px 40px 20px 10px;
        width: 25%;
        #right_top_box{
          position: relative;
          width: 100%;
          height: 400px;
          border-radius: 30px;
          #headshot{
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            width:120px;
            height:120px;
            border-radius: 50%;
            overflow: hidden;
            border: 1px solid black;
            
          }
          #headshot:hover img{
            transform:rotate(360deg);
            transition: transform .5s;
          }
          img{
            width: 100%;
            height: 100%;
            transition: transform .5s;
          }
        }
      }
    }
     
  }
  
  </style>
  