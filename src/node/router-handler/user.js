
// 注册处理函数
exports.regUser=(req,res)=>{
    // 获取客户端提交到服务器的用户信息
    // const mysql=require('mysql')
    const userinfo=req.body
    if(!userinfo.username || !userinfo.password)
    return res.send({status:1,message:'请检查账号密码是否为空！'})
    // 导入db
    const db=require('../mysql_db/index')
    // 导入加密模块
    const bcrypt=require('bcryptjs')
    // 定义SQL语句，查询用户名是否被占用
    const sqlStr = `select * from users where username=?`
    db.query(sqlStr,userinfo.username,(err,results)=>{
        // 执行sql语句失败
        if(err){
            // return res.send({status:1,message:err.message})
            return res.cc(err)
        }
        // 判断用户名是否被占用
        if(results.length>0){
            // return res.send({status:1,message:'用户名已被占用，请更换其他用户名！'});
            return res.cc('用户名已被占用，请更换其他用户名！')
        }
        // 若是可用用户名，对提交的密码进行加密
        userinfo.password=bcrypt.hashSync(userinfo.password,10)
        // 定义用户插入数据库SQL语句
        const addSql = 'insert into users set ?'
        const newUser={username:userinfo.username,password:userinfo.password,tel:userinfo.tel,email:userinfo.email,status:0}
        db.query(addSql,newUser,(err,results)=>{
            // 执行SQL语句失败
            if(err) {return res.send({status:1,message:err.message})}
            // SQL语句执行成功，但影响行数不为1
            if(results.affectedRows!==1){
                // return res.send({status:1,message:'注册失败，请稍后重试'})
                return res.cc('注册失败，请稍后重试')
            }
            // res.send({status:0,message:'注册成功，欢迎加入本站！'})
            res.cc('注册成功，欢迎加入本站！',0)
        })
        

    })
    // res.send('reguser OK')
}

// 登录处理函数
exports.login=(req,res)=>{
    // res.send('login OK')
    const userinfo=req.body
    if(!userinfo.username || !userinfo.password)
    return res.send({status:1,message:'请检查账号密码是否为空！'})
    // 导入db
    const db=require('../mysql_db/index')
    const bcrypt=require('bcryptjs')
    const sql = `select * from users where username=?`
    db.query(sql,userinfo.username,(err,results)=>{
        // 执行语句失败
        if(err) return res.cc(err)
        // 执行sql语句成功，但查询到数据不等于1
        if(results.length!==1) return res.cc('请检查账号密码是否有误！')
        // 用户输入的密码，和数据库存储的加完密的密码进行校验
        const compareResult=bcrypt.compareSync(userinfo.password,results[0].password)
        // 为true则密码正确，跳过以下判断，反之密码错误
        if (!compareResult) {
            return res.cc('请检查账号密码是否有误！')
          }
        //   生成Token字符串，利用ES6语法剔除敏感信息
        const user={...results[0],password:''}
        const Token=require('./Token')
        //   console.log(user);
        const jwt=require('jsonwebtoken')
        const tokenStr=jwt.sign(user,Token.token,{expiresIn:'7h'})
        res.send({
            status:0,
            message:'登录成功',
            token: 'Bearer ' + tokenStr,
            // id:req.user.id
        },)
    })

}
