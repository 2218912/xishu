//导入Express模块
const express=require('express');
// 导入mysql模块
const mysql=require('mysql')

const db=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'zjf_db'
})

module.exports=db