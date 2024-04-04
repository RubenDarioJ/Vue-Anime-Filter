import { createRouter, createWebHistory } from 'vue-router'
import Info from '@/components/Image-info.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/info',
      name: 'info',
      // component: () => import('@/components/Image-info.vue')
      component: Info
    }
  ]
})

export default router
