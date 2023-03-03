<template>
<transition-group name="animate__animated animate__bounce" tag="div" enter-active-class="animate__bounceInLeft " leave-active-class="animate__fadeOutDown" appear="">
    <div key="1">
    <div id="body">
      <div id="left_box">
          <div id="essay">
              <div id="essay_top">
                  <h1>文章发布</h1>
              </div>
              <hr>
              <div id="essay_bottom">
                  栏目名称<br/>
                  <input type="text" v-model="essay_title" placeholder="在此输入2~6之间栏目名称"><br/>
                  关键词<br/>
                  <input type="text" v-model="essay_guanjian" placeholder="在此输入栏目关键词"><br/>
                  描述<br/>
                  <textarea name="" id="" cols="30" rows="10" v-model="essay_content" @keyup.enter="add" placeholder="在此输入文章内容，回车或者点击添加按钮"></textarea><br>
                  <button @click="add" id="add">添加新栏目</button>
              </div>
          </div>
      </div>
      <div id="right_box">
          <div id="table">
              <div id="essay_top">
                  <h1>文章管理</h1>
              </div><hr/>
              <div id="essay_bottom">
                  <MyTable/>
              </div>
          </div>
      </div>
    </div>
</div>
</transition-group>

</template>

<script>
import 'animate.css';
import {nanoid} from 'nanoid'
import MyTable from './MyTable.vue'
import axios from 'axios'

export default {
    components:{
        MyTable
    },
        data(){
            return{
                // num:0,  //id累加
                // done:false,
                essaydata:[],
                essay_title:'',
                essay_guanjian:'',
                essay_content:'',
                nowdate:new Date(),
                // essay:JSON.parse(localStorage.getItem('essay')) || []
            
            }
        },
            methods:{
                tabledata(){
                    // console.log('1');
                        axios({
                            method:'GET',
                            url:'/my/essay/data',
                            headers:{
                                Authorization:window.localStorage.getItem('token')
                            }
                        }).then((result) => {
                            if(result.status>=200&&result.status<300){
                                this.essaydata=result.data.data
                                this.$bus.$emit('tabledata',this.essaydata)
                            }
                        }).catch((err) => {
                            
                        });
                    },
                // 添加数据
            async add(){
                // 当前时间
                var nowdate=new Date();
                var Y=nowdate.getFullYear();
                var M=nowdate.getMonth() + 1;
                var D=nowdate.getDate();
                var Time=`${Y}-${M}-${D}`;
                // 判断数据是否为空
                if(this.essay_title==''||this.essay_guanjian==''||this.essay_content==''){
                    return alert('请检查栏目名称，关键词，描述是否为空')
                }else{
                    // axios.defaults.baseURL='http://127.0.0.1/my/essay'
                    // 设置请求拦截器
                    axios.interceptors.request.use((res)=>{
                        let token=window.localStorage.getItem('token')
                        if(token){
                            res.headers['Authorization']=token
                        }
                        return res
                    },(err)=>{
                        console.log(err);
                        return Promise.reject(err)
                    })
                    // axios.interceptors.response
                    let add=await axios({
                        method:'POST',
                        url:'/my/essay/add',
                        data:{
                            title:this.essay_title,
                            content:this.essay_content
                            // data:Time
                        },
                        headers:{
                            
                        }
                    })
                    try {
                        if(add.status>=200&&add.status<300){
                            this.tabledata()
                        }
                    } catch (error) {
                        console.log(error);
                    }
                    // .then((result) => {
                    //     if(result.status>=200&&result.status<300){
                    //         // console.log(result);
                    //         this.tabledata()
                    //     }
                    // }).catch((err) => {
                    // console.log(err);
                    // });
                    // 创建数组对象
                    // const essayObj={id:nanoid(),title:this.essay_title,time:Time,done:false} 
                    // 以push在后面追加数据
                    // this.essay.push(essayObj)
                    // 添加完清空当前输入的数据
                    this.essay_title=''
                    this.essay_guanjian=''
                    this.essay_content=''
                }
            },
            
                
            },
                watch:{
                    },
                    mounted(){
                        this.tabledata()
                    },
                    beforeDestroy(){
                    }

}
</script>

<style lang="less" scoped>

#body{
    width: 100%;
    height: calc(100vh - 60px)
    
}
#left_box{
    float: left;
    width: 40%;
    height: 100%;
    #essay{
        margin: 0 auto;
        width: 95%;
        height: 100%;
        input,textarea{

            outline: none;
            width: 100%;
        }
        textarea{
            resize: vertical;
        }
        input{
            height: 25px;
        }
        #add{
            margin-top: 20px;
            width: 100px;
            height: 30px;
            color: white;
            border: 1px solid rgb(0, 187, 255);
            border-radius: 5px;
            background: rgb(0, 187, 255);
        }
    }
}
#essay_top{
    width: 100%;
    height: 40px;
    line-height: 40px;
}
#essay_bottom{
    margin-top: 10px;
    width: 100%;

}
#right_box{
    float: left;
    width: 60%;
    height: 100%;
    #table{
        margin: 0 auto;
        width: 95%;
        height: 400px;
        
    }
}

</style>