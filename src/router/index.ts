import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '../views/PokemonView.vue'
import LoginFormView from '../views/LoginFormView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Pokemon View',
      component: PokemonView
    },
    {
      path: '/',
      name: 'Login',
      component: LoginFormView
    },
  ]
})

export default router
