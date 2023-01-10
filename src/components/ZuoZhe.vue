<template>
  <div>
    <h1>作者的介绍</h1>
    <h3>作者:戏叔</h3>
    <p>
        他是一个常常喜欢感慨生活的人
        ，这世间种种琐事很繁杂，所以选择网站开发，
        让自己每天保持一颗积极的心。
    </p>
    <zuoze class="right_box">
        <font slot="title">戏叔亲笔</font>
          <font slot="MainText">hi~~<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            我是这个网站的作者，希望您能留在本站分享你每一天愉快的心情，
            以及你的所有不开心，让更多人和你一起度过每一天的不开心，开心是一天，
            不开心也是一天，何不开开心心地过好每一天呢！！</font>
    </zuoze>
  </div>
</template>

<script>
import zuoze from '../components/Left_Box.vue'
export default {
components:{
    zuoze
}
}
</script>

<style scoped>
h1,h3,p{
    text-align: center;
}
font{
    text-indent: 2em;
    width: 250px;
}

.right_box{
    width: 500px;
    /* margin-left:50%;
    transform: translateX(-50%); */
    margin: 0 auto;
    margin-top: 10px;
}
</style>