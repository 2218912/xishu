<template>
  <div>
            <h2>login</h2>
            <table>
                <tr>
                    <td colspan="2">用户名</td>
                    
                </tr>
                <tr>
                    <td colspan="2"><input type="text"></td>
                </tr>
                <tr>
                    <td>密码</td>
                </tr>
                <tr>
                    <td colspan="2"><input type="text"></td>
                </tr>
                <tr style="margin-top:10px">
                    <td colspan="2">
                        忘记密码
                    </td>
                </tr>
                <tr>
                    <td>
                        <!-- <router-link to="/login" @click="loginStyle"> -->
                            <button style="width:60px;margin-top:20px;">
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
export default {
data(){
    return{
        flat:false,
    }
},
components:{
},
methods:{
    loginStyle(){
        // this.a=this.loginStyle
    }
    
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
    margin-top: 20px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    text-align: center;
}
input{
    width: 100%;
    outline: none;
    border: 0;background:none;
    border-bottom: 1px solid rgba(0, 0, 0, .5);
}
button{
    height: 25px;
    color: white;
    background: green;
    border-radius: 10px;
    border: 0;
}
</style>