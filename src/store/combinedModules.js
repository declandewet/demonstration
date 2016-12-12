'use strict';
import Vue from 'vue';
import Vuex from 'vuex';

import details from './modules/details';



Vue.use(Vuex);

// create the store
const store = new Vuex.Store({

  strict: process.env.NODE_ENV !== 'production', // when in 'development' make it so whenever Vuex state is mutated outside of mutation handlers, an error will be thrown

  modules: {
    details
  }

});



// ********** ALLOW HMR FOR VUEX-RELATED CODE **********
if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept([
    './modules/details'
  ], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const details = require('./modules/details').default;
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        details
      }
    })
  });
}
// *****************************************************



export default store;