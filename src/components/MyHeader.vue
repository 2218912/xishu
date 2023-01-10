<template>
    <div>
      <!-- <button @click="a">xs</button> -->
        <header :class="thee">
          <nav>
              <font id="title" @click="theme()">戏叔小站</font>
              <ul>
                <!-- <li @click="ma">

                </li> -->
                <router-link v-for="(item,index) in route" 
                :key="index" :to="item.path">
                <li >
                    <i :class="item.icon"></i>
                    <span>{{ item.name }}</span>
                  </li>
                </router-link>
              </ul>
          </nav>
        </header>
  </div>
  </template>
  
  <script>
  
  export default {
      name:'MyHeader',
      components:{
          // MyNav
      },
      data(){
          return{
            thee:'theme_white',
            flat:'true',
            route:[
              {path:'/',icon:'iconfont icon-zhuye',name:'主页'},
              {path:'/guidang',icon:'iconfont icon-guidangxiangmu',name:'归档'},
              {path:'',icon:'iconfont icon-lianjie',name:'链接'},
              {path:'/about',icon:'iconfont icon-shixin',name:'关于'},
              {path:'',icon:'iconfont icon-shixin',name:'登录'}
            ]

          }
      },
      methods:{
       theme(){
        if(this.flat){
          this.thee='theme_black';
          this.flat=!this.flat;
        }else{
          this.thee='theme_white';
          this.flat=!this.flat;
        }
        console.log('1');
       },
       
      }
      
  
  }
  </script>
  
  <style scoped>
  a{
    color: #4c4948;
  }
  a:hover{
    color: #49b1f5;
  }
  /* a:hover #body{
    margin-top: 10px;
  } */
  #title{
  line-height: 60px;
  margin-left: 40px;
  font-size: 18px;
  font-weight: bold;
}
  header{
    /* display: none; */
    position:fixed;
    top:-50px;
    width: 100%;
    height: 60px;
    min-width: 550px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 101;
    animation: begin_action 1s forwards;
    transition: all 3s;
      
  }
  i{
    line-height: 30px;
  }
  ul{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    display: flex;
    width: 400px;
    height: 30px;
  }
  li{
    /* position: relative; */
    padding: 0 10px;
    cursor: pointer;
    width: 50px;
    text-align: center;
  }
  font{
    cursor: pointer;
  }
  /* font:hover,span:hover{
    color: #49b1f5;
  } */
  li:hover{
    position: relative;
  }
  li:hover a{
    color: #49b1f5;
    border: 0;
  }
  li:hover::after{
    content: '';
    position: absolute;
    left: 8px;
    bottom: -1px;
    right: 0;
    border: 1px solid #49b1f5;
    width: 50px;
    height: 1px;
    background: #49b1f5;
    animation: li_bottom 0.5s;
  }
  
  @keyframes li_bottom{
    from{
      width: 0;
    }
    to{
      width: 50px;
    }
  }
  
  </style>