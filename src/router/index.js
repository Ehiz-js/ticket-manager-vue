import Dashboard from '@/components/Dashboard.vue'
import TicketManagerPage from '@/components/TicketManagerPage.vue'
import AppLayoutView from '@/views/AppLayoutView.vue'
import LandingPageVue from '@/views/LandingPageVue.vue'
import LoginView from '@/views/LoginView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'
import SignupView from '@/views/SignupView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageVue,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },

    {
      path: '/app',
      component: AppLayoutView,
      children: [
        // index redirect
        {
          path: '',
          redirect: '/app/dashboard',
        },
        {
          path: 'dashboard',
          component: Dashboard,
        },
        {
          path: 'tickets',
          component: TicketManagerPage,
        },
      ],
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: PageNotFoundView,
    },
  ],
})

export default router
