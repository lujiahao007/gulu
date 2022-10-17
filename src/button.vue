<template>
  <button class="g-button" :dir=" iconPosition === 'right' ? 'rtl' : 'ltr'">
    <svg class="icon" :class="iconPosition === 'right' ? 'ml' : 'mr'">
      <use :xlink:href=" '#i' +icon"></use>
    </svg>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: ['icon','iconPosition']
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
    padding: 0 .6em;
    display: inline-flex;
    align-items: center;

    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      background: var(--button-active-background);
    }
    &:focus{
      outline: none;
    }
    .icon{
      width: 1em;
      height: 1em;
    }
    .ml{
      margin-left: .3em;
    }
    .mr{
      margin-right: .3em;
    }
  }
</style>