import Vue from 'vue'
import VueGtag from 'vue-gtag'
import Router from 'vue-router'

Vue.use(Router)
import App from './App.vue'
import routes from './router'

Vue.use(VueGtag, {
  config: {
    id: "UA-2477848-15"
  }
}, routes)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: routes,
  render: h => h(App)
})
