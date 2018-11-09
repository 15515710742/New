import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
import "./assets/commect/scss/base.scss"
import "./assets/commect/scss/jl.scss"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // created(){
  //   console.log(1);
  // },
  render: h => h(App)
}).$mount('#app')
