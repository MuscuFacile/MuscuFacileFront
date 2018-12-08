import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSession from 'vue-session'

import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(VueSession)
Vue.use(Vuetify, {
  iconfont: 'fa'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
