import { createRouter, createWebHistory } from 'vue-router'
import type { RouterOptions } from 'vue-router'

export const routes: RouterOptions['routes'] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/element',
    name: 'element',
    component: () => import('../views/element-plus/index.vue')
  },
  {
    path: '/hook',
    name: 'hook',
    component: () => import('../views/hook/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
