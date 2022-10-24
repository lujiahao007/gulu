<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  Vue.prototype.$toast = function (msg){
    console.log(msg)
  }
  export default {
    name: 'Gulutoast'
  }
</script>

<style lang="scss" scoped>
  .toast{

  }
</style>