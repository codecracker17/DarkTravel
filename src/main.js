import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Artikel from'./components/Artikel.vue'
import CountrySelect from'./components/Country_Select.vue'

Vue.config.productionTip = false

const router = new VueRouter({
  router,
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: CountrySelect },
    { path: '/Artikel', component: Artikel }
    ]
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
