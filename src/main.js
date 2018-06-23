// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import vueResource from 'vue-resource'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(vueResource)
Vue.prototype.$api_url = 'http://localhost/weather.php'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
