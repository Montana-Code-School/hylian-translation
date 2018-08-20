<template>
  <div class = "container">
    <b-card class ="profileCard">
      <h2>Welcome <b>{{name}}</b>!</h2>
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
        user: {},
        name: ''
      }
    },
    components:{
      ImageCarousel
    },
    created() {
      this.getName()
    },
    methods: {
      async getName() {
        this.user = await api.getUserByEmail(localStorage.email)
        console.log(this.user);
        this.name = this.user.name
      }
    }
  }
</script>

<style>
  @import '../../static/style.css';
</style>
