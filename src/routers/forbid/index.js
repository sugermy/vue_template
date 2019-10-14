/*各模块路由---无权限路由页面*/

const ErrHtml = () => import('../../ErrHtml.vue');

const FORBID = [
  {
    path: '*',
    redirect: '/403'
  },
  {
    path: '/403',
    component: ErrHtml
  }
]
export default FORBID