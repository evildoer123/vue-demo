<template lang="pug">
    div
      home-header(@change="tabChange" @tip="goAbout" :boxShadow="boxShadow")
      transition(name='fade')
        keep-alive
          router-view(:isAbout="isAbout" :caseArray="caseArray")
      transition(name="shade")
        shade(v-show="boxShadow" @close="goClose")
</template>
<script>
  import HomeHeader from '@/components/Header'
  import shade from '@/components/shade'
  import axios from 'axios'
export default {
  name: 'App',
  data () {
     return {
       boxShadow: false,
       isAbout: false,
       caseArray: []
     }
  },
  methods: {
    tabChange (boxShadow){
    this.boxShadow = boxShadow
    },
    goAbout(isAbout){
      this.isAbout = isAbout
      this.$nextTick(()=>{
        this.isAbout = false
      })
    },
    goClose(){
      this.boxShadow = false
    }
  },
  created(){
    axios.get('https://www.pengbird.com/list?type=0').then(res => {
      const {data} = res
      this.caseArray = data
    })
  },
  components:{
    HomeHeader,
    shade
  },
}
</script>
<style lang="sass">
  .fade-enter-active,.fade-leave-active
    transition: all .3s linear
  .fade-enter,.fade-leave-to
    transform: translate3d(100%,0,0)
  .shade-enter-active,shade-leave-active
    transition: all .3s ease-in-out
  .shade-enter,.shade-leave-to
    opacity: 0
</style>
