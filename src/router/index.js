import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shop from '../views/ShopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/orderTraching',
      name: 'orderTraching',
      component: () => import('../views/OrderTrackingView.vue')
    }
  ]
})

export default router
