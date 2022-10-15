<template>
  <button class="g-button">按钮</button>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .g-button{
    height: var(--button-height);
    font-size: var(--font-size);
    background: var(--button-background);
    border-radius: var(--border-radius);
    color: var(--color);
    border: 1px solid var(--border-color);
    padding: 0 1em;
    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      background: var(--button-active-background);
    }
    &:focus{
      outline: none;
    }
  }
</style>