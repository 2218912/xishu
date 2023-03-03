import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from './router'
import vuex from 'vuex'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


// Vue.use(vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
    // console.log('nihao'+this.prototype);
  }
}).$mount('#app')
