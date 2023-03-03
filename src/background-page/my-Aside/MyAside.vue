<template>
    <el-row class="tac" >
      <el-col :span="12" >
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b">
        <h5>戏叔博客管理系统</h5>
        <router-link to="/background/home">
          <el-menu-item index="2">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>

          <router-link to="/background/essay">
            <el-menu-item index="1" >
              <i class="el-icon-s-order"></i>
              <span slot="title">文章</span>
            </el-menu-item>
          </router-link>

          <router-link to="/background/review">
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">评论</span>
            </el-menu-item>
          </router-link>

          <router-link to="/background/user">
            <el-menu-item index="4" >
              <i class="el-icon-s-custom"></i>
              <span slot="title">用户</span>
            </el-menu-item>
          </router-link>

          <!-- <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-set-up"></i>
              <span>设置</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu> -->
        </el-menu>
      </el-col>
    </el-row>
  </template>
  
  <script>
  export default {
    data(){
      return{
        myroter:[
          {
            path:'/background/Bhome',
            name:'home',
            label:'首页',
            icon:'el-icon-s-home',
            url:'Home/Home'
          },
          {
            path:'/background/essay',
            name:'essay',
            label:'文章',
            icon:'el-icon-s-order',
            url:'Essay/Essay'
          },
          {
            path:'/background/review',
            name:'review',
            label:'评论',
            icon:'el-icon-setting',
            url:'Review/Review'
          },
          {
            path:'/user',
            name:'user',
            label:'首页',
            icon:'s-home',
            url:'User/User'
          },
          {
            label:'设置',
            icon:'el-icon-set-up',
            children:[
              {}
            ]
          }

        ]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

    },
    computed:{
      // 没有子菜单
      noChildren(){
        return this.essay.filter(itme=>!itme.children)
      },
      // 有子菜单的
      hasChildren(){
        return this.essay.filter(itme=>itme.children)
      }
    }
  }
  </script>
  
  <style lang="less" scoped>
  /* body{
    width: 100%;
    height: 100%;
  } */
  
  .tac{
    width: 160px;
    height: 100vh;
    background: #304156;
    border: 0px solid red;
    .el-menu{
      border: 0px;
      h5{
        width: 100%;
        height: 80px;
        color: rgb(255, 255, 255);
        // font-size: 0.5rem;
        background: #304156;
        text-align:center;
        line-height: 80px;
      }
    }
  }
  .el-col-12{
    width: 100%;
    // height: 100%;
  }
  </style>