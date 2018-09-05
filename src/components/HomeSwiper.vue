<template>
  <div :class="[isDetail?'wraper-detail':'wrapper']">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="(item,index) in caseArray" :key="item.id">
        <img class="swiper-img" :src="'http://ypq-1253824680.coscd.myqcloud.com'+item.projectImg"  @click="goToDetail"/>
        <div class="desc" v-if="!isDetail">{{item.projectName}}</div>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
      <!--<div class="swiper-pagination" slot="pagination"></div>-->
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    isDetail: Boolean,
    caseArray: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: '.swiper-pagination',
        direction: 'horizontal',
        loop: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
      },
    }
  },
  computed: {
    showSwiper () {
      return this.caseArray.length
    }
  },
  methods: {
    goToDetail () {
      this.$router.push({name:'detail'})
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../assets/sass/mixin'
  .wrapper
    overflow: hidden
    width: 90%
    margin: .2rem auto
    background: #ffffff
    text-align: center
    .swiper-img
      width: 80%
      height: 62.5%
    .desc
      +text-overflow
      +font-dpr(14px)
      color: #666666
      text-align: center
      padding: .4rem 0
    .swiper-button-prev
      background-image: url("/m/static/img/left1.png")
      background-size: cover
      top: 40%
      left: 5px
      +size-dpr(16px,width)
      +size-dpr(26px,height)
    .swiper-button-next
        background-image: url("/m/static/img/right1.png")
        background-size: cover
        top: 40%
        right: 5px
        +size-dpr(16px,width)
        +size-dpr(26px,height)
  .wraper-detail
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 45.5%
    box-sizing: border-box
    background: #ffffff
    .swiper-img
      width: 100%
    & .swiper-pagination-bullets
       +size-dpr(90px,bottom)
    .swiper-button-prev
      background-image: url("/m/static/img/left2.png")
      background-size: cover
      top: 30%
      left: 6%
      +size-dpr(31px,width)
      +size-dpr(77px,height)
    .swiper-button-next
      background-image: url("/m/static/img/right2.png")
      background-size: cover
      top: 30%
      right: 6%
      +size-dpr(31px,width)
      +size-dpr(77px,height)
</style>
