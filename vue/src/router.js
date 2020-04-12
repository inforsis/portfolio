import VueRouter from 'vue-router'
import Home from './components/home/Home'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import Works from './components/works/Works'
import Contact from './components/contact/Contact'

const router = new VueRouter({
  base: "/",
  linkActiveClass: 'active',
  //mode: 'history',
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

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      if (document.getElementById('funFactsCard')) {
        document.getElementById('checkFunFacts').checked = true;
      }      
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  if (document.getElementById('funFactsCard')) {
    document.getElementById('checkFunFacts').checked = false;
  }
})


export default router