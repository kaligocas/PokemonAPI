import { createRouter, createWebHistory } from 'vue-router'
import PokemonView from '../views/PokemonView.vue'
import LoginFormView from '../views/LoginFormView.vue'

import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Pokemon View',
      component: PokemonView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginFormView
    },
    {
      path: '/private',
      name: 'private',
      component: PokemonView,
      meta: { requiresAuth: true}
    },
  ]
})

router.beforeEach( (to)=>{

  const store = useAuthStore()

  if(to.meta.requiresAuth && !store.user.isAuthenticated){
    return { name: 'Login'}
  }
})

export default router
