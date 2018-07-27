
<template>
<div>
    <form @submit.prevent="authenticate()">
        <label for="">Name:</label>
        <input v-model="auth.name" type="text">

        <label for="">Password</label>
        <input v-model="auth.password" type="password">

        <button type="submit">Login</button>
    </form>
</div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
      auth: { name: 'meow', password: 'yes' },
      user: {}
    }
  },
  methods: {
    /**
     * Attempts to authenticate the user
     *
     * @return {mixed}
     */
    async authenticate () {
      let credentials = this.auth
      await api.createUser(credentials)
      // window.localStorage.setItem('token', response.data.token)
      // window.localStorage.setItem('auth-user', JSON.stringify(response.data.user))
      // this.$route.router.go({name: 'example-component'})
    }
  }
}
</script>
