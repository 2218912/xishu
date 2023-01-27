import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const theme={
    namespaced:true,        //命名空间
    actions:{
        time:function(fn,data){
            console.log('按钮触发');
            fn.commit('Time',data)
        }
    },

    mutations:{
        Time:function(state,data){
            state.theme=data
        }
    },

    state:{
        theme:true
}
}


export default new Vuex.Store({
    modules:{
        theme
    }
})