<template>
    <div>
        <div class="left_box">
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
        </div>
    </div>
  
</template>

<script>

export default {
    name:'LeftBox',
    data(){
        return{

        }
    }
}
</script>

<style lang="less" scoped>
.left_box{
    position: relative;
    width: 100%;
    height: 200px;
    /* border: 1px solid rgba(0,0,0,0.4); */
    background: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
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
        color: black;
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
    transition: all 0.5s;
}
.left_box{
    transition: all 0.5s;
}
</style>