import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PharmacyView from '../views/PharmacyView.vue'
import PharmacyBookingView from '../views/PharmacyBookingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/pharmacy/:id',
      name: 'pharmacy-detail',
      component: PharmacyView
    },
    {
      path: '/pharmacy/:id/book',
      name: 'pharmacy-booking',
      component: PharmacyBookingView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
