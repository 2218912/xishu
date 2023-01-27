const qs=require('querystring')
const bodyParser=(req,res,next)=>{

    let str=''
    // 监听req的data事件
    req.on('data',(chunk)=>{
        str+=chunk
    })
    // 监听req的end事件
    req.on('end',()=>{
        // 再str中存放的是完整的请求数据
        // console.log(str)
        // 调用qs.parse()方法，把查询字符串解析为对象
        const body=qs.parse(str)
        req.body=body
        // console.log(body);
        next()
    })
}

module.exports=bodyParser