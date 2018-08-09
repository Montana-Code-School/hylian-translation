<template>
  <div class = "container">
    <b-card class ="SignUpCard">
      <h2>Sign Up</h2>
      <p v-if="$route.query.redirect">
        You need to login first.
      </p>
      <form @submit.prevent="login" autocomplete="off">
        <label><b-form-input class = "loginInput" size="lg" v-model="user.name" placeholder="Name"></b-form-input></label><br>
        <label><b-form-input class = "loginInput" size="lg" v-model="user.email" placeholder="Email"></b-form-input></label><br>
        <label><b-form-input class = "loginInput" size="lg" v-model="user.pass" placeholder="Password" type="password"></b-form-input></label><br>
        <label><b-form-input class = "loginInput" size="lg" v-model="user.favoriteZelda" placeholder="Favorite Zelda Game?"></b-form-input></label><br>
        <b-button class = "buttonCustom" type="submit">Sign Up</b-button>
        <p v-if="error" class="error">Bad login information</p>
      </form>
    </b-card>
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
          email: '',
          pass: ''
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
  @import '../../static/style.css';
</style>
