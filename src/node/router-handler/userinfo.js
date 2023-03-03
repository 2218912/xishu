// 导入数据库表
const db=require('../mysql_db/index')
// 导入处理密码模块
const bcrypt=require('bcryptjs')
// 获取用户信息回调
exports.getuserinfo=(req,res)=>{
    const sql='select id,username,password from users where id=?'
    db.query(sql,req.user.id,(err,results)=>{
        if(err) return res.cc(err)
        if(results.length!==1) return res.cc('没有该用户')
        res.send({
            status:0,
            message:'获取用户信息成功',
            data:results[0]

        })
    })
}
// 获取用户全部信息
exports.getuserinfoAll=(req,res)=>{
    const sql='select id,username,tel,email from users'

    db.query(sql,(err,results)=>{
        if(err) return res.send(err)
        if(results.length==0) return res.send('获取失败')
        res.send({
            status:0,
            message:'获取用户信息成功',
            data:results
        })
    })
}
// 修改，更新信息回调
exports.updateuserinfo=(req,res)=>{
    
    // 更新sql语句,
    const sql='update users set ? where username=?'
    db.query(sql,[req.body,req.body.username],(err,results)=>{
        if(err) return res.cc(err)
        if(results.affectedRows!==1) return res.cc('修改用户信息失败')
        return res.cc('修改成功!',0)
    })
}

// 用户更新密码回调
exports.updatepassword=(req,res)=>{
    // res.send(req.user.id)
    // res.send(req.user.id)
    
    const sql = `select * from users where id=?`
    db.query(sql, req.user.id, (err, results) => {
        // 执行 SQL 语句失败
        if (err) return res.cc(err)
      
        // 检查指定 id 的用户是否存在
        if (results.length !== 1) return res.cc('用户不存在！')
      
        
        // TODO：判断提交的旧密码是否正确
        const compareResult=bcrypt.compareSync(req.body.oldpwd,results[0].password)
        if(!compareResult) return res.cc('原密码错误!')
        // res.cc('ok')
        // 校验原密码正确后，对新密码进行加密，如何储存到数据库
        const upsql='update users set password=? where id=?'
        // 对新密码进行加密处理
        const newPwd=bcrypt.hashSync(req.body.newpwd,10)
        db.query(upsql,[newPwd,req.user.id],(err,results)=>{
            if(err) return res.cc(err)
            if(results.affectedRows!==1) return res.cc('密码更新失败')
            res.cc('密码更新成功，请重新登录！',0)
    
        })
      })
    
        
}