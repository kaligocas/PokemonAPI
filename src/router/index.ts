import { createRouter, createWebHistory } from 'vue-router'
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
      component: () => import('../views/LoginFormView.vue'),
    },
    {
      path: '/Registrer',
      name: 'Registrer',
      component: () => import('../views/RegistrerView.vue'),
    },
  ],
});

export default router
