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
    path: '/template',
    name: 'template',
    component: () => import('../views/template/TemplateView.vue')
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
  },
  {
    path: '/env',
    name: 'env',
    component: () => import('../views/env/EnvView.vue')
  },
  {
    path: '/tsx',
    name: 'tsx',
    component: () => import('../views/tsx/TsxView.vue')
  },
  {
    path: '/css-module',
    name: 'css-module',
    component: () => import('../views/css-module/CssModule.vue')
  },
  {
    path: '/http-proxy',
    name: 'http-proxy',
    component: () => import('../views/http-proxy/HttpProxyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
