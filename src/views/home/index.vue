<template>
  <div id='home'>

    <button @click='viewDetailsOne'>Initiate One</button>
    <button @click='viewDetailsTwo'>Initiate Two</button>

    <router-view></router-view>

  </div>
</template>

<style src='./style.scss' scoped lang='scss'></style>
<script src='./script.js'></script>