import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home'
import Homea from '../components/Homea'

import About from '../components/About'
// import Paging from '../components/Paging'
import Guidang from '../components/guidang'


Vue.use(VueRouter)

const routes=[
{
    path:'/',
    // name:'home',
    component:Homea,
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
