<template>
  <div>
    <div id="body">
        <div id="main">
            <table>
                <thead><h1>修改密码</h1></thead>
                <tbody>
                    <tr>
                        <td>原密码：</td>
                    </tr>
                    <tr>
                        <td><input type="text" v-model="oldpwd"></td>
                    </tr>
                    <tr>
                        <td>新密码：</td>
                    </tr>
                    <tr>
                        <td><input type="text" v-model="newpwd"></td>
                    </tr>
                    <tr id="button">
                        <td><button @click="set">提交</button><button @click="cancel">取消</button></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            oldpwd:'',
            newpwd:'',
        }
    },
    methods: {
        set(){
            // axios.defaults.baseURL='http://127.0.0.1/my'
            axios({
                method:'POST',
                url:'/my/updatepwd',
                headers:{
                    Authorization:window.localStorage.getItem('token')
                },
                data:{
                    oldpwd:this.oldpwd,
                    newpwd:this.newpwd
                }
            }).then((result) => {
                if(result.status>=200&&result.status<300){
                    alert(result.data.message)
                    this.$router.replace('/login')
                }
            }).catch((err) => {
                return console.log(err);
            });
        },
        cancel(){
            this.$router.replace('/background/home')
          }
    },

}
</script>

<style lang="less" scoped>
#body{
    width: 100%;
    height: 100%;
    #main{
        position: absolute;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%) scale(0);

        width: 30%;
        height: 50%;
        background: white;
        animation: uppwd 2s forwards;
        table{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%) ;
            
            thead{
                text-align: center;
                font-size: 20px;
            }
            tbody{
                margin-top:10px
            }
            td{
                font-size: 20px;
                font-size: 0.5em;
            }
            #button td{
                margin-top: 10px;
                display: flex;
                justify-content: space-around;
            }
            td>button{
                width: 50px;
            }
        }
    }
    @keyframes uppwd{
        from{
            transform:translate(-50%,-50%) scale(0);
        }
        to{
            transform:translate(-50%,-50%) scale(1);
        }
    }
}
</style>