<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">A Language Between Worlds</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item v-if="loggedIn" to="/profile">Profile</b-nav-item>
          <b-nav-item v-if="!loggedIn" to="/signup" >Sign Up</b-nav-item>
          <b-nav-item v-if="!loggedIn" to="/login" >Login</b-nav-item>
          <b-nav-item v-if="loggedIn"  to="/logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- routes will be rendered here -->
    <router-view />
  </div>
</template>

<script>
  import auth from './auth'
  export default {
    data () {
      return {
        loggedIn: auth.loggedIn()
      }
    },
    created () {
      auth.onChange = loggedIn => {
        this.loggedIn = loggedIn
      }
    }
  }
</script>
