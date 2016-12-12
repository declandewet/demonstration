'use strict';
import Vue from 'vue';
import { sync } from 'vuex-router-sync';

import App from './app';
import { router } from './router/routes';
import store from './store/combinedModules';



// keep URL state in the store and keep it in sync with the router
sync(store, router);



// create and mount the root instance
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});