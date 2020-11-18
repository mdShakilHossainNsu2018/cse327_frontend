import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify';
import router from './router'
import Vuetify from 'vuetify';
//index.js or main.js
import 'vuetify/dist/vuetify.min.css' //Ensure you are using A Css Loader
Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
