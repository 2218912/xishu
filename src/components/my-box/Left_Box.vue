<template>
    <div :class="{left_box:true,theme_white:theme,theme_black:!theme}">
        <!-- <div > -->
            <h3>
                <slot name="title"></slot>
            </h3>
            <hr>
            <p>
                <slot name="MainText"></slot>
            </p>

            <div id="img">
                <slot name="img"></slot>
            </div>
        <!-- </div> -->
    </div>
  
</template>

<script>
import {mapState} from 'vuex'

export default {
    name:'LeftBox',
    data(){
        return{

        }
    },
    computed:{
        ...mapState('theme',{theme:'theme'})
    }
}
</script>

<style lang="less" scoped>
.left_box{
    position: relative;
    width: 100%;
    height: 200px;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    // background: rgba(0, 0, 0, .4);
    h3{
        margin-top: 5px;
        text-align: center;
    }
    hr{
        margin: 0 auto;
        background: black;
        border: 1px solid black;
        width: 80%;
    }
    p{
        margin-top: 10px;
        text-align: center;
        font-weight: bold;
        // color: black;
        padding: 0 25px ;
    }
    #img{
        position: absolute;
        right: 40px;
        bottom: 20px;
        width: 100px;
        height: 100px;
        border: 0px solid red;
    }
    img{
        width: 100px;
        height: 100px;
        transition: all 0.5s;
    }
    #img:hover img{
        transform: scale(1.2);
        transition: all 0.5s;
    }
}
.left_box:hover{
    transform:scale(1.02);
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    transition: background 2s, color 2s,transform .5s;
}
.left_box{
    transition: background 2s, color 2s,transform .5s;
}
</style>