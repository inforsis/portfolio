import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
