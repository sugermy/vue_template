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
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]
export default TOTALS