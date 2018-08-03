import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostsManager from '@/components/PostsManager'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import auth from '@/auth'

Vue.use(Router)
Vue.use(Resource)

let router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/posts-manager',
      name: 'PostsManager',
      component: PostsManager,
      beforeEnter: requireAuth
    },
    {
      path: '/Profile',
      name: 'profile',
      component: Profile
    },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

export default router
