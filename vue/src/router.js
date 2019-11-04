import VueRouter from 'vue-router'
import Home from './components/home/Home'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'

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
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})