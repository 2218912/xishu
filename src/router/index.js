import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
import Home from '../components/home-page/Home'

import About from '../components/about-page/About'
// import Paging from '../components/Paging'
import Guidang from '../components/archive-page/guidang'

import LoginPage from '../components/login-page/LoginPage'
    import Login from '../components/login-page/Login'
        import Register from '../components/login-page/Register'


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
    path:'/guidang',
    name:'guidang',
    component:Guidang
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

// 创建router实例 然后传routes配置
const router=new VueRouter({
    routes,
    scrollBehavior(to,from,save){
        return{
            y:0
        }
    }
})

export default router
