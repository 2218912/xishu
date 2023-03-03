<template>
    <div>
      <!-- <button @click="a">xs</button> -->
        <header :class="{theme_white:theme,theme_black:!theme}">
          <nav>
              <font id="title" @click="theme1()">戏叔小站</font>
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
   import {mapState} from 'vuex';

  export default {
      name:'MyHeader',
      components:{
          
      },
      data(){
          return{
            flat:'true',
            route:[
              {path:'/',icon:'iconfont icon-zhuye',name:'主页'},
              {path:'/guidang',icon:'iconfont icon-guidangxiangmu',name:'归档'},
              {path:'/link',icon:'iconfont icon-lianjie',name:'链接'},
              {path:'/about',icon:'iconfont icon-shixin',name:'关于'},
              {path:'/login',icon:'iconfont icon-denglu',name:'登录'}
            ]

          }
      },
      methods:{
       theme1(){
        if(this.flat){
          this.thee='theme_black';
          this.flat=!this.flat;
        }else{
          this.thee='theme_white';
          this.flat=!this.flat;
        }
        // console.log('1');
       },
       
      },

      computed:{
        ...mapState('theme',{theme:'theme'})
      }
      
  
  }
  </script>
  
  <style lang="less" scoped>
  // Header手机适配
  @media screen and (min-width:320px) and (max-width:480px){
    header{
      position:fixed;
      top:-50px;
      width: 100%;
      height: 60px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      z-index: 101;
      animation: begin_action 1s forwards;
      #title{
        line-height: 60px;
        margin-left: 20px;
        font-size: 18px;
        font-weight: bold;
      }
      ul{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0px;
        display: flex;
        // width: 350px;
        // min-width: 320px;
        height: 30px;
        
        a{
          color: #4c4948;
        }
        a:hover{
          color: #49b1f5;
        }
        li{
          width: 50px;
          padding:0px;
          
          i{
            line-height: 30px;
          }
        }
        li:hover{
          position: relative;
        }
        li:hover a{
          color: #49b1f5;
          border: 0;
        }
        // li:hover::after{
        //   content: '';
        //   position: absolute;
        //   left: 0px;
        //   bottom: -1px;
        //   border: 1px solid #49b1f5;
        //   // width: 45px;
        //   height: 1px;
        //   background: #49b1f5;
        //   animation: li_bottom 0.5s forwards;
        // }
      }
  }
  

}
  // HeaderPC适配
  @media only screen and (min-width: 1029px){
  header{
      position:fixed;
      top:-50px;
      width: 100%;
      height: 60px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      z-index: 101;
      animation: begin_action 1s forwards;
      #title{
        line-height: 60px;
        margin-left: 40px;
        font-size: 18px;
        font-weight: bold;
      }
      ul{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0px;
        display: flex;
        align-items: center;
        width: 350px;
        height: 30px;
        a{
          color: #4c4948;
        }
        a:hover{
          color: #49b1f5;
        }
        li{
          width: 50px;
          padding:0 10px;
          i{
            line-height: 30px;
          }
        }
        li:hover{
          position: relative;
          transition:all 0.5s;
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
      }
  }

//   a{
//     color: #4c4948;
//   }
//   a:hover{
//     color: #49b1f5;
//   }
//   #title{
//   line-height: 60px;
//   margin-left: 40px;
//   font-size: 18px;
//   font-weight: bold;
// }
//   header{
//     position:fixed;
//     top:-50px;
//     width: 100%;
//     height: 60px;
//     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
//     z-index: 101;
//     animation: begin_action 1s forwards;
    
      
//   }
//   i{
//     line-height: 30px;
//   }
//   ul{
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     right: 10px;
//     display: flex;
//     width: 400px;
//     height: 30px;
//   }
//   li{
//     padding: 0 10px;
//     cursor: pointer;
//     width: 50px;
//     text-align: center;
//   }
//   font{
//     cursor: pointer;
//   }
//   li:hover{
//     position: relative;
//   }
//   li:hover a{
//     color: #49b1f5;
//     border: 0;
//   }
//   li:hover::after{
//     content: '';
//     position: absolute;
//     left: 8px;
//     bottom: -1px;
//     right: 0;
//     border: 1px solid #49b1f5;
//     width: 50px;
//     height: 1px;
//     background: #49b1f5;
//     animation: li_bottom 0.5s;
//   }
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