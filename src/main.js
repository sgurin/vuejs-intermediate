import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/routes';
import App from './App.vue';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
