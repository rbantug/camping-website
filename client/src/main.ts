import './assets/css/main.css'
import 'primeicons/primeicons.css'

import { createHead } from '@unhead/vue/client'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

app.mount('#app')
