<template>
  <div>
    <div id="side-tool" >
        <div id="side-tool-chidren" @click="time" >
            <i class="iconfont icon-yejian1"></i>
        </div>
        <div id="side-tool-chidren" @click="time" >
          <i class="iconfont icon-shezhi setup"></i>
        </div>
        <div id="side-tool-chidren" @click="top" >
          <i class="iconfont icon-arrowupshangjiantou"></i>
        </div>
        </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            theme1:true
        }
    },
    methods:{
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
      
        },
        time(){
            this.theme1=!this.theme1
            this.$store.dispatch('theme/time',this.theme1)
        },
    },
}
</script>

<style lang="less" scoped>

#side-tool{
        position:fixed;
        // top:50%;
        right: 10px;
        bottom: 30px;
        // transform:translateY(-50%);
        width: 40px;
        height: 130px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 101;
        .setup{
            transform-origin:50% 50%;
            animation: setup 1999990000s;
        }
        @keyframes setup{
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(999999999999deg);
            }
            
        }
        #side-tool-chidren{
          width: 35px;
          height: 35px;
          color: white;
          background: rgba(73,177,245,0.7);
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          border-radius: 5px;
          transition: all .5s;
        }
        #side-tool-chidren:hover{
          color:white;
          background: #ff7242;
          transition: all 0.5s;
        }
    }
</style>