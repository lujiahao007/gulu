<template>
  <button class="g-button" :dir=" iconPosition === 'right' ? 'rtl' : 'ltr'" @click="$emit('click')">
    <!--    loading-->
    <g-icon
        name="loading"
        class="g-icon-loading"
        :class="iconPosition === 'right' ? 'ml' : 'mr'"
        v-if="loading">
    </g-icon>

    <!--    icon-->
    <g-icon
        :name="icon"
        v-if="icon && !loading"
        :class="iconPosition === 'right' ? 'ml' : 'mr'">
    </g-icon>

    <!--    文字-->
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      icon: {
        type: String,
        default: ''
      },
      iconPosition:{
        type: String,
        default: 'left',
        validator(value){
          return (value === 'left' || value === 'right')
        }
      },
      loading:{
        type: Boolean,
        default: false
      }
    },
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
    justify-content: center;
    vertical-align: middle;

    &:hover{
      border-color: var(--border-color-hover);
    }
    &:active{
      background: var(--button-active-background);
    }
    &:focus{
      outline: none;
    }
    .ml{
      margin-left: .3em;
    }
    .mr{
      margin-right: .3em;
    }
  }
  
  @keyframes spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }

  .g-icon-loading{
    animation: spin 3s infinite linear;
  }
</style>