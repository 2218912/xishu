//导入Express模块
const express=require('express');
//创建web服务器
const app=express();
// 解析客户端数据
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// 解决跨域
const cors=require('cors')
app.use(cors())
// 导入密钥
const key=require('./router-handler/Token')
// 解析token的中间件
const expressJWT = require('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: key.token }).unless({ path: [/^\/api\//] }))

// 错误中间件
// 定义res.cc()方法中间件
app.use((req,res,next)=>{
    res.cc=function(err,status=1){
        res.send({
            status,
            message:err instanceof Error ? err.message:err
        })
    }
    next()
})
app.use(function (err, req, res, next) {
    // 省略其它代码...

    // 捕获身份认证失败的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  
    // 未知错误...
  })
// app.use((req, res, next) => {
//     console.log(`URL:${req.url}`);
//     next()
// })
// 导入注册登录路由模块
const userRouter=require('./user')
app.use('/api',userRouter)
// 导入获取用户信息的路由模块
const userinfo=require('./userinfo')
app.use('/my',userinfo)
const essay=require('./essay')
app.use('/my/essay',essay)
//启动web服务器
app.listen(8000,()=>{
console.log('http://127.0.0.1')
})