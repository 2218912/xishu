const express=require('express')
const router=express.Router()

const essay=require('./router-handler/essay')
// 发布文章
router.post('/add',essay.pushessay)
// 文章数据
router.get('/data',essay.essaydata)
// router.post('')

module.exports=router