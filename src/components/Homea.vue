<template>
    <div id="ap">
      <!-- 导航头部组件 -->
      <MyHeader v-show="show"></MyHeader>
      <div id="banner">
        <!-- 字幕层 -->
        <div id="mask">
          <!-- <router-link to="/guanyu"> -->
            <h1>生活既是梦，梦亦是生活</h1>
          <!-- </router-link> -->
        </div>
        <!-- 闪光层 -->
        <div id="begin"></div>
        <!-- 侧边工具 -->
        <div id="side-tool" @click="top">
        <i class="iconfont icon-arrowupshangjiantou"></i>
        </div>

        <div id="banner1" @click="scroll">
          <i class="iconfont icon-xiangxia"></i>
        </div>
      </div>
      <!-- 主体 -->
      <div id="main">
        <div id="left_main_box">
          <ul>
            <li v-for="(item,index) in list" :key='index'>{{item}}</li>
          </ul>
        </div>

        <div id="center_main_box">
          <ul class="center_main">
            <LeftBox>
              <font slot="title">每日励志</font>
              <font slot="MainText">人往高处走，水往低处流，加油少年，未来可期</font>
              <img slot="img" src="../../public/img/1.gif"/>
            </LeftBox>
            <LeftBox>
              <font slot="title">IE官网</font>
              <font slot="MainText">微软Edge浏览器官方微博5月16日消息，
                微软IE浏览器将于6月16日正式退役，IE浏览器退役后，将由Edge接力</font>
                <img slot="img" src="../../public/img/IE.png">
            </LeftBox>
         </ul>
        </div>

        <div id="right_main_box">

        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  import MyHeader from './MyHeader.vue';
  import LeftBox from './Left_Box.vue';
  
  export default {
    name: 'App',
    components: {
      MyHeader,LeftBox,
    },
    data() {
      return {
        show:'true',
        scrolltop:'0',
        list:['定位的要点','Vue介绍']
      }
    },
    methods:{

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

      top(){
        this.$nextTick(()=>{
          const top=setInterval(() => {
            var a=document.documentElement.scrollTop
            var b=0
            // 初始值=(结束值-初始值)/缓动系数
            var step=(a-b)/10
            step=step>0?Math.ceil(step):Math.floor(step)
            a=a-step
            document.documentElement.scrollTop=a
            if(a<=b){
              clearInterval(top)
             }
          }, 15);
        })
      }


    },
    watch:{
      scrollTop(){
        if(this.scrolltop>=100){
          console.log('1');
        }
      }
    },
    mounted(){
      window.addEventListener('scroll',()=>{
        const a=document.documentElement.scrollTop
        this.scrolltop=a
        // if(a>=100){
        //   this.show='false'
        // }
        // else 
        // if(a==10){
        //   this.show='true'
        // }
        // console.log(a);
      })
      // this.$bus.$on('',)
    }
  }
  </script>
  
  <style lang="less" scoped>
  // *{margin:0; padding: 0;}
  // li{list-style: none;}
  // a{text-decoration: none;}
  // .xishu{
    //   background: rgb(234, 255, 0);
    // }
    #ap{
      position: relative;
      #side-tool{
        position:fixed;
        top:50%;
        right: 10px;
        transform:translateY(-50%);
        width: 40px;
        height: 40px;
        color: white;
        background: rgb(0, 0, 0);
        // border: 1px;
        z-index: 100;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border-radius: 50%;
        transition: all 1s;
      }
      #side-tool:hover{
        color:white;
        background: red;
        transition: all 1s;
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
      background:rgba(0, 0, 0, 0.5);
      // opacity: 0.5;
      z-index: 50;
      animation: begin_action 1s forwards;
      transition: all 3s;
      h1{
        color: white;
        text-align: center;
        line-height: 100vh;
      }
    }
    #begin{
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      // display: none;
      background: white;
      z-index: 101;
      animation: begin 2s forwards;
    }
    
    #main{
      position: absolute;
      top:100vh;
      width: 100%;
      height: 100vh;
      background:rgba(0, 0, 0, 0);
      display: flex;
      justify-content: space-between;
      #left_main_box{
        margin: 20px 10px 20px 10px;
        width: 150px;
        // border: 1px solid black;
        // background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        ul{
          width: 100%;
          text-align: center;
          overflow: auto;
          li{
            margin: 1px;
            background: white;
          }
        }
      }
      #center_main_box{
        margin: 20px 10px 20px 10px;
        width: 60%;
        // background: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        
        ul{
          width: 100%;
          overflow: auto;
        }
      }
      #right_main_box{
        margin: 20px 10px 20px 10px;
        width: 25%;
        background: white;
        // border: 1px solid black;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
      }
    }
     
  }
  
  </style>
  