<template>
  <div>
    <Paging>
        <div id="link_box" slot="link">
            <linkBox v-for="(item,index) in scenery" :key="index">
                                <i slot="title" href="">{{ item.title }}</i>
                                <img :src="item.src" >
                                <!-- <h1>{{ item.src }}</h1> -->
            </linkBox>
        </div>
    </Paging>
  </div>
</template>

<script>
import Paging from '../my-page/Paging.vue'
import linkBox from './linkBox.vue'
export default {
    components:{
        Paging,linkBox
    },
    data() {
        return {
            scenery:[
            {title:'风景',src:require('../../assets/scenery-img/1.jpg'),},
            {title:'科技',src:require('../../assets/scenery-img/2.jpg')},
            {title:'生活',src:require('../../assets/scenery-img/3.jpg')}
        ],
        }
    },
}
</script>

<style scoped>
#link_box{
    /* width: 1000px;
    height: 1000px; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>