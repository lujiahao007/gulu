<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluButtonGroup',
  mounted(){
    for(let note of this.$el.children){
      if(note.nodeName !== 'BUTTON'){
        console.warn('g-button-group的子元素应该全是g-button,但是你写的是' + note.nodeName)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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