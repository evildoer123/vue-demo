<template lang="pug">
  .container(ref="wraper")
    div
      img.case1(:src="caseImg")
      .tab-wraper
        .item(v-for="(item,index) in tab" :key="item.id" :class="[index == tab_active?'item-active':'']" @click="tabSwitch(index)") {{item.title}}
      .content(v-for="(item,index) in content" v-show="index == tab_active"  :key="item.id" :class="[tab_active == index ? 'slideInRight':'']")
        p.title {{item.title}}
        p.title1(v-for="item in item.idea" :key="item.id" ) {{item.all}}
        img.title2( :src="caseImg1")
      home-footer
</template>
<script>
  import HomeFooter from '@/components/HomeFooter'
  export default {
    name: "case",
    components: {
      HomeFooter
    },
    data() {
      return {
        caseImg: '../../../m/static/img/case1.png',
        caseImg1: '../../../m/static/img/case2.png',
        tab: [
          {id: 0, title: 'IP咨询与策划'},
          {id: 1, title: '互动运营与传播'},
          {id: 2, title: '互联网产品研发'}
        ],
        tab_active: 0,
        content: [
          {
            title: 'IP咨询与策划',
            id: 0,
            idea: [
              {
                id: 1,
                all: '【IP创意策划】IP文创提炼与咨询服务,IP故事脚本及创意服务,IP营销规划服务,IP及周边设计服务'
              },
              {
                id: 2,
                all: '【IP制造】IP玩偶设计与打样,IP周边研发,IP造型与空间展示,IP漫画、短视频与动画制作'
              },
              {
                id: 3,
                all: '【IP运营】IP营销推广服务,IP活动策划与执行;资源与渠道推广策略及采购,IP文化电商服务'
              }
            ]
          },
          {
            title: '互动运营与传播',
            id: 1,
            idea: [
              {
                id: 1,
                all: '【品牌运营】品牌策划与包装Vi与广告设计品牌资源整合运营企业文化建设'
              },
              {
                id: 2,
                all: '【整合解决方案】 提供市场评估-用户培育-平台搭建-粉丝运营-营销策划-数据挖掘等一揽子定制解决方案。以高效的互联网+模式帮助企业全面拥抱互联网，实现更高速成长。'
              },
              {
                id: 3,
                all: '【新媒体运营】“两微一端”自媒体运营社群运营新媒体活动策划与运营话题炒作与创意营销资源采购与发布服务文案、设计、动画与端视频制作服务'
              }
            ]
          },
          {
            title: '互联网产品研发',
            id: 2,
            idea: [
              {
                id: 1,
                all: '【APP定制开发】致力于为不同行业、不同规模的企业提供手机客户端APP开发服务，主要包括电商类APP开发、社交类APP、O2O类APP开发、生活服务类APP及行业定制APP开发等。'
              },
              {
                id: 2,
                all: '【微信定制开发】 为各行业企业提供微信小程序及H5定制业务，包含微商城、微生活、业务支撑接入等等功能。可以根据客户自己的需要进行产品的定制开发。'
              },
              {
                id: 3,
                all: '【电商平台定制开发】致力于各类企业用户的电子商务平台开发，主要包括微信商城开发、电商平台开发、O2O商城开发、网上商城开发以及相应的CRM管理。'
              }
            ]
          }
        ]
      }
    },
    methods:{
      tabSwitch(index) {
          this.tab_active = index
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
    .case1
      width: 100%
      display: block
    .tab-wraper
      width: 100%
      +border
      display: flex
      .item
        flex: 1
        text-align: center
        height: 1.6rem
        line-height: 1.6rem
        color: #333333
        position: relative
        +font-dpr(14px)
      .item-active
        color: #888888
        +line
    .content
      width: 100%
      padding: .45rem
      overflow: hidden
      box-sizing: border-box
      .title
        text-align: center
        +font-dpr(16px)
        font-weight: bolder
        line-height: 3em
      .title1
        color: #888888
        +font-dpr(13px)
        line-height: 2em
      .title2
        width: inherit
        display: block
        margin: .3rem 0
</style>
