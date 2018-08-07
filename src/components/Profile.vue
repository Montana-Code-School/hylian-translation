<template>
  <div class = "container">
    <b-card class ="profileCard">
      <h2>Profile</h2>
      <p>Welcome <b></b>!</p>
      <image-carousel></image-carousel>
    </b-card>
  </div>
</template>
<script>
  import api from '@/api'
  import ImageCarousel from './ImageCarousel'
  export default {
    data () {
      return {
        user:{}
      }
    },
    created(){
      console.log(api.getUser('5ce3b3b0-9a5e-11e8-816b-672816728a33'));
    },
    components:{
      ImageCarousel
    },
    methods: {
      getName() {
        this.user = api.getUser('5ce3b3b0-9a5e-11e8-816b-672816728a33')
      }
    }
  }
</script>

<style>
@import '../../static/style.css';
</style>
