import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },

  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/home/result.vue')
  },

  {
    path: "/404",
    children: [{
      path: "/404",
      component: (resolve) => require(["@/views/error/404.vue"], resolve),
    },],
  },
  {
    path: "*",
    redirect: "/404",
  },
]

const router = new VueRouter({
  routes
})

export default router
