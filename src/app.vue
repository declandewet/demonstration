<template>
  <div id='app'>
    <router-view></router-view>
  </div>
</template>



<script>
'use strict';
import { mapState } from 'vuex';
import * as types from './store/actionTypes';

export default {
  name: 'app',

  metaInfo () {
    return {
      title: 'The site title',
      meta: [
        { name: 'theme-color', content: '#316338' },
        { name: 'description', content: 'site description' },
        { property: 'og:title', content: 'Site title' },
        { property: 'og:description', content: 'og description' },
        { property: 'og:site_name', content: 'Site name' }
      ]
    }
  }
}
</script>



<style scoped lang='scss'>

</style>