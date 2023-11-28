import { createRouter, createWebHistory } from 'vue-router'
import LoginFormView from '../views/LoginFormView.vue'
import HomeView from '../views/PokemonView.vue';



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
      name: 'login',
      component: LoginFormView,
    },
  ],
});

export default router
