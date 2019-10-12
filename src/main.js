import Vue from 'vue'
import App from './App.vue'
import store from './vuex/index'
import Router from 'vue-router'
import { TotalRouters, ForbidRouter } from './routers'//路由---解构路由过滤
import Ajax from './utils/ajax'//二次封装ajax
import './utils/filter'//VUE过滤器
import './style/reset.less'//基础重置样式
import './style/element_reset.less'//基础重置样式
Vue.use(Router)
console.log(store)
//设置vue 在启动时是否生成生产提示
Vue.config.productionTip = process.env.NODE_ENV === 'development'

let newAjax = new Ajax('', window.SYSTEM_CONFIG.MerchantCode)//实例化AJAX并且挂载VUE原型
Vue.prototype.$ajax = newAjax
//process.env  开发环境属性

/*根据业务需求方法过滤需要的路由---设置无权限路由是为了防止用户直接输入地址可访问未授权的页面内容*/
let allowRouter = new Router({
  routes: TotalRouters
})
renderApp(allowRouter)

//正常权限执行
function renderApp (router) {
  // 跳转路由时,主区域返回顶部
  router.afterEach((to, from) => {
    Vue.prototype.$nextTick(() => {
      document.querySelector('#main-wrap').scrollTop = 0
    })
  })
  let app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
}