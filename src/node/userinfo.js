const express=require('express')
const router=express.Router()
const userinfo=require('./router-handler/userinfo')
// 获取用户信息路由
router.get('/userinfo',userinfo.getuserinfo)
// 获取所有用户路由
router.get('/userinfoall',userinfo.getuserinfoAll)
// 更新用户信息路由
router.post('/updateuserinfo',userinfo.updateuserinfo)
// 更新密码路由
router.post('/updatepwd',userinfo.updatepassword)
module.exports=router