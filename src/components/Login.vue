<template>
  <div>
    <h2>Login</h2>
    <p v-if="$route.query.redirect">
      You need to login first.
    </p>
    <form @submit.prevent="login" autocomplete="off">
      <label><input v-model="user.name" placeholder="Name"></label>
      <label><input v-model="user.email" placeholder="Email"></label>
      <label><input v-model="user.pass" placeholder="Password" type="password"></label>
      <label><input v-model="user.favoriteZelda" placeholder="What's your favorite Zelda Game?"></label><br>
      <button type="submit">login</button>
      <p v-if="error" class="error">Bad login information</p>
    </form>
  </div>
</template>

<script>
  import auth from '../auth'
  import api from '../api'
  export default {
    data () {
      return {
        error: false,
        user: {
          email: 'claireobie15@gmail.com',
          pass: 'Flyolo15!'
        },

      }
    },
    methods: {
       login () {
        auth.login(this.user.email, this.user.pass, loggedIn => {
          if (!loggedIn) {
            this.error = true
          } else {
            if (this.user.id) {
               api.updateUser(this.user.id, this.user)
            } else {
               api.createUser(this.user)
            }
            this.$router.replace(this.$route.query.redirect || '/')
          }
        })
      },
    }
  }
</script>

<style>
  .error {
    color: red;
  }
</style>
