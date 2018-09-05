<template lang="pug">
    div.div-position(ref="wrapper")
      div
        .banner-wraper
          img.banner(:src="banner")
        .service
          span.tip1 服务项目
          span.tip2 / Serivce items
        .tip-wraper(v-for="item in service" :key="item.tip1" @click.stop="goCase(item)")
          img.tip-img(:src="item.url")
          .tip-list
            p.introduce {{item.title}}
            p.intro
              span.list1  {{item.tip1}}
              span.list2  more>
        .service
          span.tip1 案例
          span.tip2 / Case
        Swiper(:isDetail="isDetail" :caseArray="caseArray")
        .about(:style="aboutImg" ref="about")
          p.about1 关于
          div.about-wraper
            p.about2 双月鸟信息科技是一家互联网解决方案全栈服务商。提供策划+运营+技术一整套服务。
            p 公司旗下拥有《易教宝》教育培训行业解决方案。以微信小程序为载体，向教育培训行业提供从招生、教务、在线教育、资源整合的生态平台。
        div.home( ref='home')
          home-footer
            form.form(@submit.prevent="onSubmit")
              .item
                label 姓名
                input(type='text' v-model.trim='name')
              .item
                label 手机
                input(v-model.trim='phone'  type="number")
              .item
                label 邮箱
                input(v-model.trim='email')
              .item
                label 留言
                input(type='text' v-model.trim='leaveWord')
              button(type='submit') 提交
</template>

<script>
  import Swiper from '@/components/HomeSwiper'
  import HomeFooter from '@/components/HomeFooter'
  import axios from 'axios'
  import Bscroll from 'better-scroll'
  export default {
    name: "index",
    components: {
      Swiper,
      HomeFooter,
    },
    props: {
      isAbout :{
        type: Boolean,
        default: false
      },
      caseArray:{
        type: Array,
        default: []
      }
    },
    methods: {
      onSubmit() {
        let reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        let [name, email, leaveWord, phone] = [this.name, this.email, this.leaveWord, this.phone]
        if (!name) {
          this.showTest('姓名不能为空')
          return false
        } else if (!leaveWord) {
          this.showTest('留言不能为空')
          return false
        } else if (!reg.test(phone)) {
          this.showTest('电话号码不正确')
          return false
        } else {
          axios.post('https://www.pengbird.com/pbCustomer/save', {
            name, email, leaveWord, phone
          }).then(res => {
            if (res.ret != 0) {
              this.name = this.email = this.leaveWord = this.phone = '';
              this.showTest('提交成功啦', 3000)
            }
          })
        }
      },
      showTest(msg, time = 2000) {
        const options = {
          className: ['my-toast1'],
          horizontalPosition: 'center',
          verticalPosition: 'center',
          duration: time,
          mode: 'queue',
          transition: 'my-transition'
        }
        this.$toast(msg, options);
      },
      goCase() {
        this.$router.push({name: 'case'})
      },
      _initScroll () {
          this.scroll = new Bscroll(this.$refs.wrapper,{
            click: true,
            probeType: 3
          })
          this.scroll.on('scrollEnd',pos =>{
          this.pageY = pos.y
          })
      }
    },
    data() {
      return {
        banner: '../../../m/static/img/banner1.png',
        aboutImg: "background-image: url('../../../m/static/img/about.png')",
        service: [
          {
            url: '/m/static/img/tip1.png',
            title: 'IP咨询与服务',
            tip1: '宏观的视角',
          },
          {
            url: '../../../m/static/img/tip2.png',
            title: '互动运营与传播',
            tip1: '人性的体察',
          },
          {
            url: '../../../m/static/img/tip3.png',
            title: '互联网产品的研发',
            tip1: '严谨的创作',
          }
        ],
        name: '',
        phone: '',
        leaveWord: '',
        email: '',
        home: '',
        pageY: 0,
        isDetail: false,
      }
    },
    mounted (){
      setTimeout(()=>{
        this._initScroll()
      },20)
    },
    deactivated () {
      console.log(this.scroll)
    },
    activated () {
      if(this.scroll){
        console.log(this.pageY)
        this.scroll.refresh();
        this.scroll.scrollTo(0,this.pageY)
      }
    },
    watch:{
      isAbout(newNum) {
        if (newNum) {
        this.$nextTick(()=>{
        this.scroll.scrollToElement(this.$refs.about,2000)
        })
        }
      },
      caseArray (){
        setTimeout(()=>{
          this._initScroll()
        },20)
      }
    }
  }
</script>
<style scoped lang="sass">
  @import '../../assets/sass/mixin'
  .div-position
    position: absolute
    width: 100%
    left: 0
    bottom: 0
    +size-dpr(60px, top)
    overflow: hidden
    .banner
      width: 100%
    .service
      +border1
      width: 71%
      margin: .8rem auto
      text-align: center
      height: 1.3rem
      line-height: 1.3rem
      .tip1
        +color1
        +font-dpr(18px)
        font-weight: bolder
      .tip2
        +color2
        +font-dpr(16px)
        margin-left: .5em
        letter-spacing: .1em
    .tip-wraper
      width: 93%
      position: relative
      margin: .6rem auto
      height: 0
      padding-bottom: 62.5%
      .tip-img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 0
      .tip-list
        position: absolute
        left: 0
        right: 0
        bottom: 0
        margin: auto
        z-index: 2
        padding: .4rem .4rem
        background-color: rgba(255, 255, 255, .8)
        .introduce
          +color3
          +font-dpr(16px)
          line-height: 2em
          font-weight: bolder
        .intro
          +clearfix
          color: $color1
          line-height: 2em
          +font-dpr(13px)
          .list1
            float: left
          .list2
            float: right
    .about
      width: 90%
      height: 0
      background-size: cover
      background-repeat: no-repeat
      padding-bottom: 90.5%
      overflow: hidden
      margin: .35rem auto
      position: relative
      color: #ffffff
      .about1
        position: absolute
        right: 10%
        top: 8%
        +font-dpr(30px)
        font-weight: bolder
        width: .5rem
        line-height: 1rem
      .about-wraper
        width: 95%
        right: 0
        left: 0
        margin: auto
        +font-dpr(14px)
        position: absolute
        +size-dpr(14px, bottom)
        line-height: 0.6rem
        +break-word
        & > p:first-child
          margin-bottom: .35rem
    .form
      margin: .2rem 0
      .item
        display: flex
        flex-direction: column
        margin-bottom: .2rem
        & label
          color: #444444
          +font-dpr(14px)
          line-height: 1.8em
        & input
          background-color: transparent
          outline: none
          color: #444444
          +font-dpr(14px)
          border-radius: 0
          border-bottom: 1px solid #666666
          height: .8rem
          line-height: .8rem
      & button
        width: 100%
        color: #FFFFFF
        +font-dpr(14px)
        line-height: 2.8em
        margin-top: .5rem
        letter-spacing: .3em
        background-color: #333333
</style>
