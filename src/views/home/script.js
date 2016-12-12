'use strict';



export default {
  name: 'home',

  methods: {
    viewDetailsOne() {
      this.$router.push('details/1');
    },

    viewDetailsTwo() {
      this.$router.push('details/2');
    }
  }
}