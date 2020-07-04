import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuehead from 'vue-head'
Vue.use(Vuehead)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
