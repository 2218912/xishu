//导入Express模块
const express=require('express');
//创建web服务器
const app=express();


app.use(express.urlencoded({ extended: false }))

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
const cors=require('cors')
app.use(cors())
//代码区
const userRouter=require('./user')
app.use('/api',userRouter)

//启动web服务器
app.listen(80,()=>{
console.log('http://127.0.0.1')
})