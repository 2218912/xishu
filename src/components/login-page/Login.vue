<template>
  <div>
            <h2>login</h2>
            <table>
                <tr>
                    <td colspan="2">用户名</td>
                    
                </tr>
                <tr>
                    <td colspan="2"><input v-model="username" class="bordercolor"  type="text" placeholder="输入用户名"></td>
                </tr>
                <tr>
                    <td>密码</td>
                </tr>
                <tr>
                    <td colspan="2"><input @keyup.enter="login" v-model="password" type="password" placeholder="输入密码" ></td>
                </tr>
                <tr style="margin-top:10px">
                    <td colspan="2">
                        忘记密码
                    </td>
                </tr>
                <tr>
                    <td>
                        <!-- <router-link to="/login" @click="loginStyle"> -->
                            <button @click="login"  style="width:60px;margin-top:20px;">
                                登录
                            </button>
                        <!-- </router-link> -->
                    </td>
                    <td>
                        <router-link to="/register">
                            <button style="width:60px;margin-top:20px;">
                                注册
                            </button>
                        </router-link>
                    </td>
                </tr>
            </table>
            
        </div>
</template>

<script>
import axios from 'axios'
export default {
data(){
    return{
        flat:false,
        username:'',
        password:'',
        // essay:JSON.parse(localStorage.getItem('essay')) || []
    }
},
components:{
},
methods:{
    login(){
        // axios.defaults.baseURL='http://127.0.0.1/api',
        axios({
            method:'POST',
            url:'/api/login',
            data:{
                username:this.username,
                password:this.password
            },

        }).then((result) => {
            if(result.status>=200&&result.status<300){
                this.message=result.data.message
                if(this.message!=='登录成功'){
                    return alert(this.message)
                }
                // console.log(result.data.token);
                if(result.data.token)
                {   //向本地缓存发送token
                    window.localStorage.setItem('token',result.data.token)
                    // 替换当前路由路径
                    return this.$router.replace('/background/home')
                }
            }
        }).catch((err) => {
            console.log(err.message);
        });

    }
},
watch:{
    // essay:{
    //     deep:true,
    //     handler(value){
    //         console.log(value);
    //         localStorage.setItem('essay',JSON.stringify(value))
            
    //     }
    //     }
}
}
</script>

<style scoped>
.cc{
    color: red;
}
tr{
    /* padding: 10px 0px; */
    margin: 0 auto;
}
h2{
    text-align: center;
    font-style:oblique;
}
table{
    margin-top:10px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
}
input{
    width: 100%;
    outline: none;
    border: 0;
    background:none;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
    text-align: center;
}
button{
    height: 25px;
    color: white;
    background: green;
    border-radius: 10px;
    border: 0;
}
</style>