//导入Express模块
const express=require('express');
//创建web服务器
// const app=express();
const router=express.Router()
const userHandler=require('./router-handler/user.js')
// 注册新用户
router.post('/register',userHandler.regUser)
// 登录
router.post('/login',userHandler.login)


module.exports=router