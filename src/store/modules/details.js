'use strict';
import * as types from '../actionTypes';



export default {

  state: {
    thing: {},
    fetching: false
  },



  mutations: {

    setDetails(state, {thing}) {
      state.thing = thing;
      state.fetching = false;
    },

    resetDetails(state) {
      state.thing = {};
      state.fetching = false;
    },

    fetch(state) {
      state.fetching = true;
    }

  },



  actions: {

    [types.GET_DETAILS]({commit, state}, {id}) {
      commit('fetch');

      let thing;
      if (id === 1) {
        thing = {
          name: 'Thing one',
          id: 1
        }
      }

      if (id === 2) {
        thing = {
          name: 'Thing two',
          id: 2
        }
      }

      // mimic a network operation
      setTimeout(() => {
        commit('setDetails', { thing });
      }, 1000);
    },

    [types.RESET_DETAILS]({commit, state}) {
      commit('resetDetails');
    }

  }

};