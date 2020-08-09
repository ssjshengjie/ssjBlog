import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      redirect: '/index'
    },
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index"  */'../components/Index.vue')
  },
  {
    path: '/file',
    name: 'File',
    component: () => import(/* webpackChunkName: "index"  */'../components/File.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "index"  */'../components/About.vue')
  },
  {
    path: '/link',
    name: 'Link',
    component: () => import(/* webpackChunkName: "index"  */'../components/Link.vue')
  },
 /*  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/About.vue')
  } */
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
