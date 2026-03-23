import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import SearchSchool from '@/views/SearchSchool.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overall',
      component: App,
    },
    {
      path: '/search',
      name: 'searchingschools',
      component: SearchSchool,
    },
  ],
})

export default router
