import VueRouter from 'vue-router'
import Home from './components/home/Home'
import About from './components/about/About'
import Blog from './components/blog/Blog'

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/articles',
      name: 'Blog',
      component: Blog
    }
  ]
})