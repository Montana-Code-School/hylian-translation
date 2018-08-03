<template>
  <div>
    <h2>Profile</h2>
    <p>Welcome <b>{{name}}</b>!</p>
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
