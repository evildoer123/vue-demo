<template lang="pug">
  .boxshadow(@click.stop="close")
</template>

<script>
    export default {
        name: "shade",
      methods:{
      close (){
          this.$emit('close')
      }
      }
    }
</script>

<style scoped lang="sass">
  @import '../assets/sass/mixin'
  .boxshadow
    +boxshadow
</style>
