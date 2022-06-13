import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useAuthStore } from '../stores/auth'
import CounterView from '../views/CounterView.vue'
import CartView from '../views/CartView.vue'
import Count from '../components/CountComp.vue'
//import Count from '../components/Count.vue'
//import {userStore} from '../stores/user'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/modal',
      name: 'modal',
      component: () => import('../views/ModalView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/counter',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/test',
      name: 'test',
      component: Count
    }
  ]
})


router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  //const userStore = userStore();
  //userStore.name = 'Ramon';
  const auth = JSON.parse(localStorage.getItem('auth'));
  console.log(auth)

  if(to.name === 'login'){
    console.log('next login')  
    next()
  }else if (to.meta.requiresAuth && (auth == null || !auth.auth || !auth.user)) { 
    authStore.auth = false
    authStore.user = null  
    next('/login')
  } else { 
    console.log('next') 
    authStore.auth = auth?.auth
    authStore.user = auth?.user 
    next()
  }
})

export default router
