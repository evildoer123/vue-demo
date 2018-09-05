<template lang="pug">
  .container(ref="wraper")
    div
      home-swiper(:isDetail="isDetail" :caseArray="caseArray")
      .cases
        div.cases-wraper(v-for="(item,index) in caseArray" :key="item.id" :class="[tabActive == index ?'cases-active':'']" @click="goSwitchTab(index)")
            img.cases-item(:src="'http://ypq-1253824680.coscd.myqcloud.com'+item.projectImg")
      p.cases-title
        span.title1 概况
        span.title2 / Survey
      .casers-content-wrpaer(v-if="caseArrayActive")
        p.cases-content( v-html="caseArrayActive.projectProfile")
        p.cases-title
          span.title1 关于
          span.title2 / About
        p.cases-list
           span.cases-left  服务
           span.cases-right {{caseArrayActive.projectType}}
        p.cases-list
          span.cases-left  用时
          span.cases-right {{caseArrayActive.projectTime}}
        p.cases-list
          span.cases-left  负责
          span.cases-right {{caseArrayActive.projectPrincipal}}
      home-footer
</template>

<script>
  import HomeFooter from '@/components/HomeFooter'
  import HomeSwiper from '@/components/HomeSwiper'
  export default {
    name: "case",
    components: {
      HomeFooter,
      HomeSwiper
    },
    props:{
      caseArray:{
        type: Array,
        default: []
      }
    },
    methods: {
      goSwitchTab (index) {
        this.tabActive = index
      }
    },
    data () {
      return {
        isDetail: true,
        tabActive: 0
      }
    },
    computed: {
      caseArrayActive () {
        let idx = this.tabActive
        let activeArray = this.caseArray.filter( (item,index) => idx == index)
        return activeArray[0]
      }
    },
    activated (){
      this.$refs.wraper.scrollTo(0,0)
    }
  }
</script>

<style scoped lang="sass">
  @import "../../assets/sass/mixin"
  .container
    position: absolute
    +size-dpr(60px, top)
    bottom: 0
    left: 0
    width: 100%
    margin: auto
    +y-scroll
    .cases
      width: 100%
      +x-scroll
      margin: .6rem 0 .8rem
      +clearfix
      .cases-wraper
        +size-dpr(50px,width)
        display: inline-block
        height: 0
        margin: 0 .2rem
        +size-dpr(50px,padding-bottom)
        position: relative
        .cases-item
          width: 100%
          height: 100%
          position: absolute
          top: 0
          left: 0
      .cases-active
        border: solid #333
        +size-dpr(2px,border-width)
    .cases-title
       text-align: center
       +font-dpr(20px)
       line-height: 3em
       .title1
         color: #333333
       .title2
         color: #BBBBBB
         margin-left: .2em
    .casers-content-wrpaer
      padding: .35rem .65rem
      overflow: hidden
      .cases-content
        color: #888888
        +font-dpr(14px)
        line-height: 2em
      .cases-list
        +clearfix
        border-bottom: 1px solid #DDDDDD
        margin: .25rem 0
        padding: .45rem 0
        +font-dpr(15px)
        .cases-left
          float: left
          color: #333333
        .cases-right
          width: 70%
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          float: right
          text-align: right
          color: #888888
</style>
