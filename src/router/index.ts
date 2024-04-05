import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/anime/:id',
      name: 'animeInfo',
      component: () => import('@/views/AnimeInfo.vue')
    }
  ]
})

export default router
