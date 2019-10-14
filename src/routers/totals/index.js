/*各模块路由*/

import store from '../../vuex'
//商城基本信息获取，设置属性
store.dispatch('setShopName', '南岳衡山交通')

const Home = () => import('../../views/Home.vue');
const About = () => import('../../views/About.vue');

const TOTALS = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: store.state.shopName
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]
export default TOTALS