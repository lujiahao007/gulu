<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
 .g-button-group{
   display: inline-flex;
   vertical-align: middle;
   margin-left: 1px;

   .g-button{
     border-radius: 0;
     margin-left: -1px;
     &:first-child{
       border-radius: 4px 0 0 4px;
     }
     &:last-child{
       border-radius: 0 4px 4px 0;
     }
     &:hover{
       position: relative;
       z-index: 1;
     }
   }
 }
</style>