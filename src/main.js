import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Routers from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
Vue.use(VueRouter)
Vue.config.productionTip = false
const RouterConfig = {
  mode: 'history',
  base:'/m',
  routes: Routers,
};
//重置样式
import './assets/reset.css'
import 'swiper/dist/css/swiper.css'
import './assets/animate.css'
import './assets/flexible'
import Toast from 'vue-easy-toast'
import 'vue-easy-toast/dist/vue-easy-toast.css'
import './assets/sass/base.sass'
Vue.use(Toast)
Vue.use(VueAwesomeSwiper)
fastClick.attach(document.body)
const router = new VueRouter(RouterConfig);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
