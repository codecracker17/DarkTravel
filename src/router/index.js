import Vue from 'vue';
import VueRouter from 'vue-router';
import Artikel from'./components/Artikel.vue';
import CountrySelect from'./components/Country_Select.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    router,
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: CountrySelect },
      { path: '/Artikel', component: Artikel }
      ]
  });

  export default router;