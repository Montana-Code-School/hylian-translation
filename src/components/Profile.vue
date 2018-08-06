<template>
  <div class = "container">
    <b-card class ="profileCard">
      <h2>Profile</h2>
      <p>Welcome <b>{{name}}</b>!</p>
      <image-carousel></image-carousel>
    </b-card>
  </div>
</template>
<script>
  import ImageCarousel from './ImageCarousel'
  import auth from '@/auth'
  export default {
    data () {
      return {
        name: auth.getName()
      }
    },
    components:{
      ImageCarousel
    }
  }
</script>
