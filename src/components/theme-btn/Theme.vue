<template>
  <div>
    <div id="side-tool" >
        <div id="top">
            <div id="side-tool-chidren" @click="background" :class="{righta:true,come:theme,to:!theme}"   >
                <i class="iconfont icon-denglu"></i>
            </div>

            <div id="side-tool-chidren" @click="time" :class="{righta:true,come:theme,to:!theme}"   >
                <i class="iconfont icon-yejian1"></i>
            </div>
        </div>
        <div id="bottom">
            <div id="side-tool-chidren" @click="setup" >
              <i class="iconfont icon-shezhi setup"></i>
            </div>
            <div id="side-tool-chidren" @click="top" >
              <i class="iconfont icon-arrowupshangjiantou"></i>
            </div>
        </div>
        </div>
  </div>
</template>

<script>
export default {

    data(){
        return{
            theme:true,
            theme1:true
        }
    },
    methods:{
        background(){
            this.$router.replace('/background/home').catch(err => err)
            // window.location='http://127.0.0.1:8080/#/background/home'
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
      
        },
        setup(){
            // console.log('1');
            this.theme=!this.theme
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
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        z-index: 101;
        .setup{
            transform-origin:50% 50%;
            animation:2s linear infinite running setup;
        }
        @keyframes setup{
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
        .righta{
            // margin: 100px;
            // position: ;
            // top:-50px;
            // right: -45px;
            transition: all 2s;
        }
        #top{
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        #bottom{
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        .come{
            animation:run 0.5s forwards;
        }
        .to{
            animation:run 0.5s alternate forwards ;
        }

        @keyframes run{
            0%{
                transform: translateX(50px);
            }
            100%{
                // transform: translateX(0px);
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