<template>
  <div class="bg">
    <div class="float-left">
    <img src="../assets/Triforce.png">

    </div>
    <div class="hero">
      <h1 class="display-3">Hylian Translator</h1></br>
      <p class="lead">A language between worlds</p></br>
    </div>
    <div class="float-center">
      <b-form-select v-model="selected" :options="options" class="mb-3" />
      <b-form-select v-model="selected1" :options="options1" class="mb-3" />
      <b-form-group label="Body">
        <b-form-textarea rows="4"></b-form-textarea>
      </b-form-group>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: null,
      selected1: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'English', text: 'English' },
        { value: 'Hylian', text: 'Hylian' }
      ],
      options1: [
        { value: null, text: 'Please select an option' },
        { value: 'English', text: 'English' },
        { value: 'Hylian', text: 'Hylian' }
      ]
    }
  }
}
</script>

<style>
  .hero {

    align-items: center;
    justify-content: center;
    text-align: center;
  },
  .hero .lead {
    font-weight: 250;
    font-size: 1.5rem;
  },
  .logo{
    align-items: left;
    float: left;
  }
  .bg {
      /* The image used */
      background-image: url("../assets/forest3.jpg");
      /* Full height */
      height: 100vh;

      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .text{
    width: 600px;
  }
</style>
