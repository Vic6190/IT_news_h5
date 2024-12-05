import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/myActivity',
      name: 'myActivity',
      component: () => import('../views/myActivity.vue'),
    },
    {
      path: '/myFollow/:type?',
      name: 'myFollow',
      component: () => import('../views/myFollow.vue'),
    },
    {
      path: '/myPost',
      name: 'myPost',
      component: () => import('../views/myPost.vue'),
    },
  ],
})

export default router
