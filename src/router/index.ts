import { createRouter, createWebHistory } from 'vue-router'
import type { RouterOptions } from 'vue-router'
import useUserStore from '@/stores/user'


export const routes: RouterOptions['routes'] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/HomeView.vue')
  },
  {
    path: '/element',
    name: 'element',
    component: () => import('../views/element-plus/ElementPlus.vue')
  },
  {
    path: '/hook',
    name: 'hook',
    component: () => import('../views/hook/HookView.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/store/StoreView.vue'),
    beforeEnter: (to, from, next) => {
      const userStore = useUserStore()
      console.log(userStore.user?.token)
      next()
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
