import { createRouter, createWebHistory } from 'vue-router'
import { isUserLoggedIn } from '@core/auth/utils'
import AuthView from 'views/AuthView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthView
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: () => import('views/TasksView.vue'),
      meta: {
        requiresAuth: true,
      },
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = isUserLoggedIn()

  if (to.meta?.requiresAuth && !isLoggedIn) {
    return next({ name: 'home' })
  }

  if (to.meta?.requiresAuth && isLoggedIn) {
    return next()
  }

  return next()
})


export default router
