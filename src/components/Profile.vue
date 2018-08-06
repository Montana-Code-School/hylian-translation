<template>
  <div class = "container">
    <b-card class ="profileCard">
      <h2>Profile</h2>
      <p>Welcome <b>{{name}}</b>!</p>
    </b-card>
  </div>
</template>
<script>
  import auth from '@/auth'
  export default {
    data () {
      return {
        name: auth.getName()
      }
    }
  }
</script>
