import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PokemonView.vue'
import LoginFormView from '../views/LoginFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      name: 'loginform',
      component: LoginFormView
    },
  ]
})

export default router
