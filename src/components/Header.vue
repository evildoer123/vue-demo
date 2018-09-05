<template lang="pug">
    .container
      header.header
        img.logo(:src="logo" @click="goIndex")
        img.logo1(v-show="!showTab" src="/m/static/img/logo2.png" @click="openTab")
        img.logo1(v-show="showTab" src="/m/static/img/close.png" @click="openTab")
      transition(name="slide")
        .wraper-container(v-show="showTab")
          .wraper(v-for="item in link" :key="item.name" @click="goPath(item)")
            span.link {{item.name}}
            img.right(src="../../m/static/img/right.png")
</template>
<script>
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    name: "header1",
    props:{
      boxShadow:{
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        logo:'../../m/static/img/logo.png',
        link: [
          {
            name: '首页',
            to: 'index'
          },
          {
            name: '服务项目',
            to: 'case'
          },
          {
            name: '案例',
            to: 'detail'
          },
          {
            name: '关于我们',
            to: 'index'
          },
          {
            name: '联系',
            to: 'index'
          }
        ],
        showTab: false,
      }
    },
    computed: {
      ...mapGetters([
        'getNum'
      ])
    },
    methods: {
      goPath(item) {
       let { name } =  this.$route
        this.$router.push({name:item.to})
        this.showTab = false
        this.$emit('change', this.showTab)
        if(item.name == '关于我们' || item.name == '联系'){
        this.$emit('tip',true)
        }
      },
      openTab() {
        this.showTab = !this.showTab
        this.$emit('change',this.showTab)
      },
      goIndex () {
        this.$router.push({name:'index'})
      }
    },
    watch:{
      boxShadow(newNum){
        if(!newNum){
          this.showTab = false
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  @import '../assets/sass/mixin'
  .container
    position: relative
    z-index: 9
    background-color: #ffffff
    .header
      position: relative
      +size-dpr(60px,height)
      text-align: center
      display: flex
      justify-content: center
      align-items: center
      +border
      .logo
        width: 2.65rem
      .logo1
        width: .45rem
        padding: .2rem .6rem
        position: absolute
        top: 0
        bottom: 0
        right: .3em
        margin: auto
    .wraper-container
      width: 100%
      background-color: #ffffff
      position: absolute
      top: 61px
      left: 0
      .wraper
        display: flex
        justify-content: space-between
        align-items: center
        padding: .25rem .5rem
        +border
        .link
          +color1
          font-weight: bolder
          +font-dpr(13px)
        .right
          width: .6rem
  .slide-enter-active
      transition: all .3s linear
  .slide-leave-active
      transition: none
  .slide-enter,.slide-leave-to
      transform: translate3d(-100%,0,0)
</style>
