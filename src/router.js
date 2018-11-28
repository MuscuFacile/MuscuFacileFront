import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/components/dashboard/Dashboard'
import LogIn from '@/components/user/LogIn'
import SignUp from '@/components/user/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Log in',
      component: LogIn
    },
    {
      path: '/signup',
      name: 'Sign up',
      component: SignUp
    }
  ]
})
