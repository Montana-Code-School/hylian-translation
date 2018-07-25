<template>
  <div class="bg">
    <div class="clearfix">
      <b-img left src="https://vignette.wikia.nocookie.net/vsbattles/images/e/e6/Triforce.png/revision/latest?cb=20151115205031" alt="left image" />
    </div>
    <div class="hero">
      <h1 class="display-3">Hylian Translator</h1></br>
      <p class="lead">A language between worlds</p></br>
    </div>
    <div class="text">
      <h3>From:</h3>
      <b-form-select v-model="selected" :options="options" class="mb-3" />
      <h3>To:</h3>
      <b-form-select v-model="selected1" :options="options1" class="mb-3" />
    </div>
    </br>

    <div class="text">
      <b-form-group label="Translator">
        <b-form-textarea v-model="text" rows="6"></b-form-textarea>
      </b-form-group>
      <b-button v-on:click="greet" :size="lg" :variant="primary">
             Click Me!
      </b-button>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
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
  },
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('You just took orders from a button!!!')
    }
  }
}
</script>

<style>
  .hero {
    color: white;
    align-items: center;
    justify-content: center;
    text-align: center;
  },
  .hero .lead {
    font-weight: 250;
    font-size: 1.5rem;
  },
  .logo{
    width: 10px;
    height: 10px;
  }
  .bg {
      /* The image used */
      background-image: url("../assets/majorasMask3.jpg");
      /* Full height */
      height: 100%;

      /* Center and scale the image nicely */
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
  }
  .text{
    margin-left: 300px;
    margin-right: 300px;
    align-items: row;
    color: white;
  }
</style>
