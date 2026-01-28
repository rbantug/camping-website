import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/components/router/HomePage.vue'
import AboutPage from '@/components/router/AboutPage.vue'
import AllCamps from '@/components/router/AllCamps.vue'
import CampDetails from '@/components/router/CampDetails.vue'
import ContactPage from '@/components/router/ContactPage.vue'
import AuthPage from '@/components/router/AuthPage.vue'
import ErrorMessage from '@/components/router/ErrorMessage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/home', component: HomePage, alias: '/' },
    { name: 'about', path: '/about', component: AboutPage },
    { name: 'allCamps', path: '/camps', component: AllCamps },
    { name: 'campDetails', path: '/camps/:id', component: CampDetails },
    { name: 'contact', path: '/contact', component: ContactPage },
    { name: 'auth', path: '/auth', component: AuthPage },
    { path: '/:anything(.*)', component: ErrorMessage },
  ],
})

export default router
