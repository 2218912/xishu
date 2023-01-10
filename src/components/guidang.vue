<template>
    <div>
        <div>
            <Paging>
                <div id="guidang" slot="guidang"  >
                <guidang1 v-for="(item,index) in scenery" :key="index">
                    <i slot="title" href="">{{ item.title }}</i>
                    <img :src="item.src" >
                    <!-- <h1>{{ item.src }}</h1> -->
                </guidang1>
            </div>
            </Paging>
        </div>
    </div>
</template>

<script>
// import MyHeader from '../components/MyHeader.vue'
import Paging from '../components/Paging.vue'
import guidang1 from '../components/guidang1.vue'

export default {
components:{
    // MyHeader
    Paging,guidang1
},
data(){
    return{
        scenery:[
            {title:'风景',src:require('../../public/img/scenery-img/1.jpg'),},
            {title:'科技',src:require('../../public/img/scenery-img/2.jpg')},
            {title:'生活',src:require('../../public/img/scenery-img/3.jpg')}
        ]
    }
}
}
</script>

<style scoped>
/* #guidang{
    display: flex;
} */
#guidang{
    margin: 0 auto;
    width: 930px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    /* border: 1px solid black; */
}


</style>