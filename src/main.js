import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { FormRatingPlugin } from 'bootstrap-vue'
Vue.use(FormRatingPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
