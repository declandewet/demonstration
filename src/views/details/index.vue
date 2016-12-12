<template>
  <div class='details'>

    <div class='details-content'>

      <div v-if='fetching'>fetching...</div>

      <div v-else class='content'>
        {{JSON.stringify(thing, null, 2)}}
      </div>

    </div>

  </div>
</template>

<style src='./style.scss' scoped lang='scss'></style>
<script src='./script.js'></script>