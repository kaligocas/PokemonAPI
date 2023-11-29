import { createRouter, createWebHistory } from 'vue-router'
import LoginFormView from '../views/LoginFormView.vue'
import HomeView from '../views/PokemonView.vue';



import { useAuthStore } from '@/stores/auth'
import PrivateViewVue from '@/views/PrivateView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/PokemonView.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginFormView
    },
    {
      path: '/private',
      name: 'private',
      component: PrivateViewVue,
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
