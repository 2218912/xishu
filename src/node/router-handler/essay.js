// 添加文章
const db=require('../mysql_db/index')
exports.pushessay=(req,res)=>{
    const essay=req.body
    const addSql = 'insert into essayadd set ?'
    // res.send(req.user.id)
    let a=new Date()
    const y=a.getFullYear()
    const m=a.getMonth()+1
    const d=a.getDate()
    const time=`${y}-${m}-${d}`

    const arr={title:essay.title,content:essay.content,date:time}
    db.query(addSql,arr,(err,results)=>{
        if(err) return res.cc(err)
        if (results.affectedRows !== 1) return res.cc('发布文章失败！')
        res.cc('发布成功',0)
    })
    // res.send('ok')

}

exports.essaydata=(req,res)=>{
    const sql='select * from essayadd'
    // const sql='select  from essayadd'
    var title=[]
    var content=[]
    var time=[]
    var id=[]
    var arr=[]
    db.query(sql,(err,results)=>{
        if(err) return res.cc(err)
        arr=results
        // console.log(arr);
        if(results) {
            for(i=0;i<results.length;i++){
                id[i]=results[i].id,
                title[i]=results[i].title
                content[i]=results[i].content
                time[i]=results[i].date
            }
            res.send({id,title,content,time,data:arr})
        }
    })
}