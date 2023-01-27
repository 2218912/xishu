<template>
    <div>
              <h2>register</h2>
              <table>
                  <tr>
                      <td colspan="2">用户名</td>
                  </tr>
                  <tr>
                      <td colspan="2"><input v-model="username" type="text"></td>
                  </tr>
                  <tr>
                      <td>密码</td>
                  </tr>
                  <tr>
                      <td colspan="2"><input v-model="password" type="text"></td>
                  </tr>
                  <!-- <tr><td><p>{{ message }}</p></td></tr> -->
                  <tr>
                      <td>
                        <router-link to="/login">
                            <button style="width:60px;margin-top:20px;">
                                登录
                            </button>
                        </router-link>
                      </td>
                      <td>
                          <!-- <router-link to="/register"> -->
                              <button @click="register" style="width:60px;margin-top:20px;">
                                  注册
                              </button>
                          <!-- </router-link> -->
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
        username:'',
        password:'',
        message:''
      }
  },
  components:{
  },
  methods:{
    register(){
        axios.defaults.baseURL='http://127.0.0.1/api'
        axios({
            method:'POST',
            url:'/register',
            data:{
                username:this.username,
                password:this.password
            }
        }).then((result) => {
            if(result.status>=200&&result.status<300){
                this.message=result.data.message
                alert(this.message)
                
            }
        }).catch((err) => {
            console.log(err.message);
        });
    }
  }
  }
  </script>
  
  <style scoped>
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