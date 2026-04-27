import { createRouter, createWebHistory } from 'vue-router'

const HomePage = () => import('@/components/router/HomePage.vue')
const AboutPage = () => import('@/components/router/AboutPage.vue')
const AllCamps = () => import('@/components/router/AllCamps.vue')
const CampDetails = () => import('@/components/router/CampDetails.vue')
const ContactPage = () => import('@/components/router/ContactPage.vue')
const ErrorMessage = () => import('@/components/router/ErrorMessage.vue')
const ConvertURL = () => import('@/components/router/ConvertURL.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/home', component: HomePage, alias: '/' },
    { name: 'about', path: '/about', component: AboutPage },
    { name: 'allCamps', path: '/camps', component: AllCamps },
    { name: 'campDetails', path: '/camps/:slug', component: CampDetails, props: true },
    { name: 'contact', path: '/contact', component: ContactPage },
    { name: 'convertUrl', path: '/convert', component: ConvertURL },
    { path: '/:anything(.*)', component: ErrorMessage },
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  }
})

export default router
