<template>
  <div class="wrapper" :class="{'error': error}">
    <input
        type="text"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)">

    <template v-if="error">
      <icon name="info" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>

  </div>
</template>

<script>
  import Icon from './icon'
  export default {
    name: 'GuluInput',
    components: {
      Icon
    },
    props:{
      value:{
        type: String
      },
      disabled:{
        type: Boolean
      },
      readonly:{
        type: Boolean
      },
      error:{
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 12px;
  $box-shadow-color: rgba(0,0,0,0.5);
  $red: #f1453d;
  .wrapper{
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    &.error{
      >input{border-color: $red}
    }
    .icon-error{
      margin-left: .5em;
      fill: #f1453d;
      font-size: 15px;
    }
    .errorMessage{
      color: #f1453d;
    }
    >input{
      height: $height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;
      &:hover{
        border-color: $border-color-hover;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-shadow-color;
        outline: none;
      }
      &:disabled{
        border-color: #999;
        color: #999;
        cursor: not-allowed;
      }
    }
  }
</style>