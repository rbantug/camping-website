import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const allPages = ref([
    { link: 'Home', route: 'home' },
    { link: 'About', route: 'about' },
    { link: 'Contact', route: 'contact' },
    { link: 'Camps', route: 'allCamps' },
    { link: 'Login/Register', route: 'auth' },
  ])

  const getAllPages = computed(() => allPages)
  return { getAllPages }
})
