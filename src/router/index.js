import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
import Home from '@/components/Home'
import PostsManager from '@/components/PostsManager'
import ExampleComponent from '@/components/ExampleComponent'
// import Authorization from '@/Authorization'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(Resource)

let router = new Router({
  mode: 'history',
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
      name: 'Favorites',
      component: PostsManager,
      meta: {
        requiresAuth: true
      }
    }

  ]
})

// user has permissions code
// router.beforeEach(({to, next, abort, redirect}) => {
//      let authorized = false
//      let user = JSON.parse(window.localStorage.getItem('atiiv.auth-user'))
//
//      /**
//       * Remember that access object in the routes? Yup this why we need it.
//       *
//       */
//      if (to.access !== undefined) {
//          authorized = Authorization.authorize(
//              to.access.requiresLogin,
//              to.access.requiredPermissions,
//              to.access.permissionType
//          )
//
//          if (authorized === 'loginIsRequired') {
//              router.go({name: 'login'})
//          }
//
//          if (authorized === 'notAuthorized') {
//              /**
//               * Redirects to a "default" page
//               */
//              router.go({ /*...*/ })
//          }
//      }
//      /**
//       * Everything is fine? Let's to the page then.
//       */
//      next()
//  })
//
//  //redirect if authenticated
// router.beforeEach(({to, next, abort, redirect}) => {
//   let token = window.localStorage.getItem('token')
//      let user = JSON.parse(window.localStorage.getItem('auth-user'))
//
//      /**
//       * Checks if there's a token and the next page name is none of the following
//       */
//      if ((token) && (to.name === 'login' || to.name === 'register')) {
//          // redirects according user role
//          router.go({ /*...*/})
//      }
//
//      if (!token) {
//          // Logout
//   }
//
//   next()
// })

export default router
