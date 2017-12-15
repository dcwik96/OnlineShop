import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Cart from '@/pages/Cart';
import Admin from '@/pages/Admin';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/',
      name: 'Cart',
      component: Cart,
    },
  ],
});
