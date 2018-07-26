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
      <div>
  <b-card title="Test"
          class="test">
    <p :class="textClass()">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
      <b-form-group label="Body">
        <b-form-textarea v-model = "phrase" class = "text" placeholder="Enter phrase to be translated..." rows="10"></b-form-textarea>
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
        { value: 'Skyward Sword Ancient Hylian', text: 'Skyward Sword Ancient Hylian' },
        { value: 'Twilight Princess Hylian', text: 'Twilight Princess Hylian' },
        { value: 'BotW Shiekah', text: 'BotW Shiekah' }
      ],
      options1: [
        { value: null, text: 'Please select an option' },
        { value: 'English', text: 'English' },
        { value: 'Skyward Sword Ancient Hylian', text: 'Skyward Sword Ancient Hylian' },
        { value: 'Twilight Princess Hylian', text: 'Twilight Princess Hylian' },
        { value: 'BotW Shiekah', text: 'BotW Shiekah' }
      ],
      phrase: ''
    },
    methods (){
      textClass(){
        if (this.options.value=== '')
      }
    }
  }
}
</script>

<style>
@import '../../static/style.css';
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

  .twilight-text{
    font-family: Twilight;
    font-size: 30px;
  }

  .ancient-text{
    font-family: Ancient;
    font-size: 30px;
  }

  .sheikah-text{
    font-family: Ancient;
    font-size: 30px;
  }
</style>
