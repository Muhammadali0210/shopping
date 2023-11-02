import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Shop from '../views/ShopView.vue'
import SeeDetails from '../views/SeeDetailsView.vue'

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
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/WishlistView.vue')
    },
    {
      path: '/orderTraching',
      name: 'orderTraching',
      component: () => import('../views/OrderTrackingView.vue')
    },
    {
      path: '/seeDetails',
      name: 'seeDetails',
      component: SeeDetails
    },

  ]
})

export default router
