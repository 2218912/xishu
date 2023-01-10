import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
