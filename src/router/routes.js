import Vue from 'vue'
import Router from 'vue-router';
import Meta from 'vue-meta';

import Home from '../views/home/index';
import Details from '../views/details/index';



// create the router and configure the routes
const router = new Router({
  mode: 'history',
  // scrollBehavior: (to, from, savedPosition) => ({ x: 0, y: 0 }),
  routes: [
    {
      path: '/', component: Home,
      children: [
        { path: '/details/:id', component: Details }
      ]
    },

    { path: '*', redirect: '/' }
  ]
});

Vue.use(Router);

Vue.use(Meta);



export { router };