import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search'
import WeatherDetail from '@/components/WeatherDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/search/:keyword',
    name: 'search',
    component: Search
  }, {
    path: '/weather/:woeid',
    name: 'weather',
    component: WeatherDetail
  }]
})
