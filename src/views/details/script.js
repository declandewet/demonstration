'use strict';
import { mapState } from 'vuex';
import * as types from '../../store/actionTypes';



export default {
  name: 'details',



  metaInfo() {
    return {
      title: `${this.thing.name} - website`,
      meta: [
        { name: 'description', content: `${this.thing.name} details` },
        { property: 'og:title', content: 'Check out this thing!' },
        { property: 'og:description', content: this.thing.name },
        { property: 'og:image', content: this.thing.image }
      ]
    }
  },



  computed: {
		...mapState({
      thing: state => state.details.thing, // the thing to show the details of
      fetching: state => state.details.fetching, // if we are currently fetching the details
    })
  },



  beforeCreate() {
    this.$store.dispatch(types.GET_DETAILS, { id: parseInt(this.$route.params.id) });
  },



  beforeDestroy() {
    this.$store.dispatch(types.RESET_DETAILS);
  }
}