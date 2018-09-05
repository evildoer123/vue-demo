<template lang="pug">
   footer.container-footer
     .footer-logo
       img(:src="logo")
     p 地址：重庆市九龙坡区杨家坪龙湖西城国际C座0809
     p 电话：（023-6294-6426）
     p 邮箱：master@pengbird.com
     p 邮编：400000
     slot
     p Copyright © 双月鸟信息科技有限公司  渝ICP备17014360号-1
</template>

<script>
  export default {
    name: "HomeFooter",
    data() {
      return {
      logo:'../../m/static/img/logo1.png'
      }
    },
    methods: {

    },
  }
</script>

<style scoped lang="sass">
  @import '../assets/sass/mixin'
  .container-footer
    box-sizing: border-box
    background-color: #DDDDDD
    padding: .35rem
    overflow: hidden
    .footer-logo
      text-align: center
      margin: .2rem 0
      & img
         width: 4rem
    & p
      text-align: center
      color: #444444
      +font-dpr(14px)
      line-height: .8rem
</style>
