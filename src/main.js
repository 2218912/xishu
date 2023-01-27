import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import vuex from 'vuex'
import store from './store'

Vue.use(vuex)


Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
