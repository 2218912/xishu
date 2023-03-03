<template>
    <div>
        <el-container>
            <transition name="aside">
                <el-aside v-show="flat" style="width:160px;"><MyAside/></el-aside>
            </transition>
            <el-container>
                <el-header>
                    <MyHeader/>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import MyAside from '../my-Aside/MyAside.vue'
import MyHeader from '../my-header/MyHeader.vue'
export default {
    data(){
      return{
        flat:true
      }
    },
    components:{
        MyAside,
        MyHeader,
    },
    methods:{
        hide(){
            this.flat=!this.flat
            // console.log(this.flat);
        }

    },
    mounted(){
        this.$bus.$on('displayHide',this.hide)
    },
    beforeDestroy(){
        this.$bus.$off('displayHide')
    }
    
}
</script>

<style lang="less">
.el-container{
    display: flex;
    .el-header{
        height: 60px;
        background: #ffffff;
        padding: 0;
    }
    .el-main{
        display: block;
        // margin: 0 0 10px 0;
        width: 100%;
        padding: 0;
        background: rgba(255, 255, 255, 0.6);
    }
}

.aside-enter-active{
    animation: aside .5s linear reverse;
}
.aside-leave-active{
    animation: aside linear .5s;
}
@keyframes aside{
    from{
        margin-left: 0;
    }
    to{
        margin-left: -160px;
    }
}
</style>