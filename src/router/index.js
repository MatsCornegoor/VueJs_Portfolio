import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects/:slug',
      name: 'Projects',
      props: true, 
      component: Projects
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

export default router


