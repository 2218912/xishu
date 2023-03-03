<template>
    <div>
        <!-- <div> -->
            <Paging>
                
                <div id="guidang" slot="guidang">
                    <div class="search">
                        <div class="search_right">
                            <input type="text" v-model="search" @keydown.enter="ssearch" placeholder="请输入关键词，区分大小写"><button @click="ssearch">搜索</button>
                        </div>
                    </div>
                    <div id="essaydata">
                        <essaybox v-for="(item,index) in newtitle " :key="index">
                            <h3 slot="title" v-text="item"></h3>
                            <font slot="content" v-text="content[index]"></font>
                            <font slot="date" v-text="time[index]"></font>
                        </essaybox>
                    </div>
                </div>
            </Paging>
        <!-- </div> -->
        
    </div>
</template>

<script>
// import MyHeader from '../components/MyHeader.vue'
import LeftBox from '../my-box/Left_Box.vue'
import Paging from '../my-page/Paging.vue'
import Theme from '../theme-btn/Theme.vue'
import axios from 'axios'
import essaybox from './essaybox.vue'

export default {
components:{
    // MyHeader
    Paging,Theme,LeftBox,essaybox
},
data(){
    return{
        // essaydata:{title:[],content:[]},
        search:'',
        newtitle:[],
        title:[],
        content:[],
        time:[],

        // essaydata:[title={},content={2,1}]
    }
},
methods:{
    ssearch(){
        // console.log(this.title);
        this.newtitle=this.title.filter((item,index,fn)=>{
          if(item.includes(this.search)){
                    return item
                }
        })
    },
    data(){
        // axios.defaults.baseURL='http://127.0.0.1/my/essay'
        axios({
            method:'GET',
            url:'/my/essay/data',
            headers:{
                Authorization:window.localStorage.getItem('token')
            }
        }).then((result) => {
            if(result.status>=200&&result.status<300){
                // console.log(result.data);
                this.title=result.data.title
                console.log(this.title);
                this.content=result.data.content
                this.time=result.data.time
            //    console.log(this.time);
                this.ssearch()
            }
        }).catch((err) => {
            
        });
       
    },
},
mounted(){
    
    this.data()
},

}
</script>

<style scoped>
.search{
    position: relative;
    width: 800px;
    height: 30px;
    margin: 0 auto;
    /* background: white; */
}
.search_right{
    position: absolute;
    right: 0px;
    display: flex;
}.search_right input{
     border: 2px solid #ffb003;
     text-indent: .5em;
    /* border: 3px solid black; */
    /* height: 25px; */
    /* background:rgba(255, 255, 255, 0) */
}.search_right button{
    width: 40px;
    height: 30px;
    border: 1px solid #ffb003;
    border-left: 0px;
    background: #ffb003;
    /* height: 25px; */
    /* border: 0; */
    /* border: 2px solid black; */
    /* border-left: 0;
    background: none; */
}
#essaydata{
    margin: 0 auto;
    width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    
}
#guidang{
    margin: 0 auto;
    width: 930px;
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    /* border: 1px solid black; */
}


</style>