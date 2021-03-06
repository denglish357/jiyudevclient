import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import vuetify from './plugins/vuetify'
Vue.use(VueHead)

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
