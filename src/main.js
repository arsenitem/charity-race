
import 'core-js/stable';
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VueMask from 'v-mask'



import store from './store/index.js'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = true
Vue.use(BootstrapVue)
Vue.use(VueMask);
Vue.use(IconsPlugin)
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
