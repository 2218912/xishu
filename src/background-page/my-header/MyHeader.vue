<template>
    <div id="body">
        <div id="cb_btn" >
            <img src="../../assets/background-img/cb.png" :class="[rotate?'got':'aa']"  @click="displayHide">
        </div>
        <div class="mb">
            <!-- <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/background/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/background/' }">文章管理</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/background/' }">评论管理</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/background/' }">用户管理</el-breadcrumb-item>
</el-breadcrumb> -->
        </div>
        <div id="myheadshot">
            <div id="headshot">
            </div>
            <div id="my">
                <ul>
                    <li>个人中心</li>
                    <router-link to="uppwd">
                        <li>修改密码</li>
                    </router-link>
                    <!-- <router-link to="signout"> -->
                        <li @click="signout">退出账户</li>
                    <!-- </router-link> -->
                </ul>
            </div>
        </div>
    </div>
  
</template>

<script>
export default {
    data(){
        return{
            flat:1,
            rotate:false,
            flat:true
        }
    },
    
    methods:{
        displayHide(){
            console.log('1');
            this.$bus.$emit('displayHide')
            // 改变rotate值进行三目运算
            this.rotate=!this.rotate
            console.log(this.rotate);
        },
        signout(){
            if(confirm('您确认退出嘛')===true){
                // localStorage.clear()
                // window.location='http://127.0.0.1:8080/#/login'
                localStorage.setItem('token','')
                this.$router.replace('/')
            }
        }
    
    }
}
</script>

<style lang="less" scoped>
*{margin: 0;padding: 0;}
#body{
    position: relative;
    width: 100%;
    height: 60px;
    z-index: 1000;
    #cb_btn{
        position: absolute;
        top:50%;
        left:0px;
        transform: translateY(-50%);
        color: white;
        width: 50px;
        height: 100%;
        border: 0px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img{
            margin: 0 auto;
            width: 20px;
            height: 20px;
            // transform: rotate(-90deg);
        }
    }

    #myheadshot{
        position: absolute;
        right: 30px;
        width: 50px;
        height: 100%;
        #headshot{
            position: absolute;
            top:50%;
            left: 50%;
            width: 35px;
            height: 35px;
            transform: translate(-50%,-50%);
            border-radius: 50%;
            border: 1px solid rgb(0, 0, 0);
        }
        #my{
            display: none;
            position: absolute;
            top: 100%;
            left: -50%;
            width: 100px;
            height: 80px;
            z-index: 100;
            background: rgba(0, 0, 0, .5);
        }
        #my>ul{
            width: 100%;
            text-align: center;
            li{
                margin-top: 3px;
                color: white;
            }
        }
    }
    #myheadshot:hover #my{
        display: block;
    }
}



/* 三目运算判断进行旋转样式start */
.aa{
    transform: rotate(90deg);
    transition: all .5s;
}
.got{
    transform: rotate(-360deg);
    transition: all .5s;
}
/* 三目运算判断进行旋转样式end */
 
</style>