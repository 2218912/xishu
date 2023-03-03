import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
import Home from '../components/home-page/Home'

import Guidang from '../components/archive-page/guidang'

import Link from '../components/link-page/Link'

import About from '../components/about-page/About'

import LoginPage from '../components/login-page/LoginPage'
import Login from '../components/login-page/Login'
    import Register from '../components/login-page/Register'
// 后台组件
import backgroundMain from '../background-page/page-main/Main'
    import BHome from '../background-page/page-home/Home'
    import Essay from '../background-page/page-essay/Essay'
    import Review from '../background-page/page-review/Review'
    import User from '../background-page/page-user/User.vue'
    // 更改密码
    import UpPwd from '../background-page/my-header/updatepassword'

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, resolve, reject) {
//     if ( resolve || reject ) return originalPush.call(this, location, resolve, reject)
//     return originalPush.call(this, location).catch((e)=>{})
// }
// const originalreplace = VueRouter.prototype.replace
// VueRouter.prototype.replace = function push(location, resolve, reject) {
//     if ( resolve || reject ) return originalreplace.call(this, location, resolve, reject)
//     return originalreplace.call(this, location).catch((e)=>{})
// }

Vue.use(VueRouter)

const routes=[
{
    path:'/',
    // name:'home',
    component:Home,
    // redirect:'/home'
    // children:[
    // ]
},
{
    // 后台路由
    name:'background',
    path:'/background',
    component:backgroundMain,
    meta:{isAuth:true},
    children:[
        {meta:{isAuth:true},path:'home', component: BHome},         //首页
        {meta:{isAuth:true},path:'essay', component: Essay},       //文章
        {meta:{isAuth:true},path:'review', component: Review},     //评论
        {meta:{isAuth:true},path:'user', component: User},         //用户
            {meta:{isAuth:true},path:'uppwd',component:UpPwd},
    ]
},
{
    path:'/guidang',
    name:'guidang',
    component:Guidang
},
{
    path:'/link',
    name:'link',
    component:Link
},
{
    path:'/about',
    name:'about',
    component:About
},
{
    path:'/login',
    name:'login',
    component:LoginPage,
    children:[
        {path:'/',component:Login},
        {path:'/register',component:Register}
    ]
}

]
const router=new VueRouter({
    routes,
    scrollBehavior(to,from,save){
        return{
            y:0
        }
    }
})
// 全局路由守卫---每当路由切换之前被调用
router.beforeEach((to,from,next)=>{
    // console.log(to,from);
    // meta.isAuth是否需要鉴权
if(to.meta.isAuth){
    if(localStorage.getItem('token')){
        next();
    }else{
        alert('请先登录!')
        next({path:'/login'})
    }
}
next()
})

// 创建router实例 然后传routes配置

export default router
