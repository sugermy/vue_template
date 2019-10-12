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