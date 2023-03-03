<template>
    <div class="table">
        <!-- 遮挡层 -->
        <div class="mask" v-show="flat">
            <!-- 添加用户 -->
            <div class="addbox" v-show="flat">
                <table>
                    <tr>
                        <td>用户名</td>
                    </tr>
                    <tr>
                        <td><input v-model="username" type="text"></td>
                    </tr>
                    <tr>
                        <td>密码</td>
                    </tr>
                    <tr>
                        <td><input v-model="password" type="text"></td>
                    </tr>
                    <tr>
                        <td>手机号</td>
                    </tr>
                    <tr>
                        <td><input v-model="tel" type="text"></td>
                    </tr>
                    <tr>
                        <td>邮箱</td>
                    </tr>
                    <tr>
                        <td><input v-model="email" type="text"></td>
                    </tr>
                    <tr>
                        <td class="td_button">
                            <el-button size="small" @click="add" type="primary">添加</el-button>
                            <el-button size="small" @click="cancel" type="primary">取消</el-button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <transition-group
            name="animate__animated animate__bounce"
            tag="div"
            enter-active-class="animate__lightSpeedInLeft aleft"
            leave-active-class="animate__lightSpeedOutRight aright"
            appear
            >
        
        <div key="1">
            <div class="search" >
                <el-input v-model="search" @keydown.enter="ssearch" size="small"  placeholder="查询用户名"></el-input>
                <el-button size="small" @click="ssearch" type="primary">查询</el-button>
            </div>
            <div class="header">
                <el-button size="small" @click="useradd" type="primary">添加用户</el-button>
                <!-- <button>添加用户</button>
                <button>删除用户</button>
                <button>重置密码</button> -->
            </div>
            
        </div>
    </transition-group>
    <el-table
    ref="multipleTable"
    :data="userinfo"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="id"
      label="ID"
      width="120">
      <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
    </el-table-column>
    <el-table-column
      prop="username"
      label="用户名"
      width="200">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="手机号"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="注册时间"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
  <!-- <div style="margin-top: 20px">
    <el-button @click="toggleSelection([userinfo[1], userinfo[2]])">切换第二、第三行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div> -->
    </div>
</template>

  
  <script>
  import 'animate.css'
import axios from 'axios'
  export default {
    data() {
        return {
            search:'',
            userinfo:[],
            date:[],
            newuserinfo:[],
            username:'',
            password:'',
            tel:'',
            email:'',
            multipleSelection: [],
            loading: true,
            flat:false,
        }
    },
    methods:{
        useradd(){
            // if(this.flat){
                this.flat=!this.flat
            // }
        },
        ssearch(){
            this.userinfo=this.newuserinfo.filter((item)=>{
            if(item.username.includes(this.search)){
                        return item
                    }
            })
            },
        async add(){
            let result=await axios({
            method:'POST',
            url:'/api/register',
            data:{
                username:this.username,
                password:this.password,
                tel:this.tel,
                email:this.email
            }
        })
        try {
            if(result.status>=200&&result.status<300){
                alert(result.data.message)
                console.log( result.data.message);
                if(result.data.message=='注册成功，欢迎加入本站！'){
                    this.flat=false
                    this.userdata()
                }
            }
        } catch (error) {
            console.log(err.message);
        }
        },
        cancel(){
            this.flat=false
        },
        async userdata(){
            const userdata=await axios({
                method:'GET',
                url:'/my/userinfoall',
                headers:{
                    Authorization:window.localStorage.getItem('token')
                },
            })
            try {
                if(userdata.status>=200&&userdata.status<300){
                this.newuserinfo=userdata.data.data
                this.ssearch()
                // console.log(this.newuserinfo);
                this.loading= false
                }
            } catch (error) {
            console.log(error);
            }
        },
        handleSelectionChange(val) {
          this.multipleSelection = val;
        },
    },
    // toggleSelection(rows) {
    //     if (rows) {
    //       rows.forEach(row => {
    //         this.$refs.multipleTable.toggleRowSelection(row);
    //       });
    //     } else {
    //       this.$refs.multipleTable.clearSelection();
    //     }
    //   },
    mounted(){
        this.userdata()
    }

  
  }
  </script>
  
  <style scoped>
    .table{
    width: 100%;
    height: calc(100vh - 70px);
    /* margin-left: 15px; */
    background: rgba(255, 255, 255, 0);
    }
    .mask{
        position: absolute;
        top: 0;
        width: calc(100% - 160px);
        height: 100%;
        background: rgba(255, 255, 255, .7);
        z-index: 101;
    }
    .addbox{
        position: absolute;
        top: 40%;
        left: 50%;
        margin-top: -90px;
        margin-left: calc(-25% + 160px);
        z-index: 102;
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background:white;
        box-shadow: 0 0 10px black;
    }
    table{
        margin: 0 auto;
    }
    .td_button{
        margin-top: 10px;
        display: flex;
        justify-content: space-evenly;
    }
  .search{
    margin:10px 0 0 10px;
    width: 250px;
    display: flex;
}
.header{
    margin:10px 0 0 10px;
    width: calc(100% - 10px);
    height: 50px;
    /* background: rgb(255, 179, 179); */
    color: white;
  }
  /* .header button{
    margin-right: 15px;
    position: relative;
    top: 25%;
    height: 50%;
    border: 0;
    width: 90px;
    height: 30px;
    color: white;
    border-radius: 5px;
  } */
  /* .header :nth-child(1),.header :nth-child(3){
    background: #00bbff;
  }
  .header :nth-child(2){
    background:red;
  } */
  
  h1{
      margin-top: 10px;
  }
  </style>