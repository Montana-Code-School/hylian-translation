<template>
  <div>
    <b-card class = "card">
    <div class="hero">
      <b-img src="https://vignette.wikia.nocookie.net/vsbattles/images/e/e6/Triforce.png/revision/latest?cb=20151115205031" alt="Triforce" />
      <h1 class="display-3">Hylian Translator</h1></br>
    </div>
    <p class="subtext">A language between worlds</p>
        <div class="languageSelect">
          <h3>From:</h3>
          <b-form-select v-model="selected" :options="options" class="select" />
          <h3>To:</h3>
          <b-form-select v-model="selected1" :options="options1" class="select" />
        </div>
        </br>
        <div class="text">
          <b-form-group label="Translator">
            <b-form-textarea placeholder = "Enter phrase to be translated..." v-model="phrase" rows="6"></b-form-textarea>
          </b-form-group>
          <button id = "buttonCustom" v-on:click="greet" >
                 Click Me!</button>
         </div>

       </b-card >
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
@import '../../static/style.css';
  .hero {
    display:flex;
    color: white;
    justify-content: center;
    text-align: center;
    flex-direction: row;
    margin-top: 125px;
    margin-bottom:75px
  }
  .subtext {
    font-weight: 250;
    font-size: 1.5rem;
    display:flex;
    color: white;
    justify-content: center;
    text-align: center;
    margin-top:-100px;
    margin-left: 20px;
  }
  .hero .display-3 {
    padding-top: 50px;
    padding-left: 20px
  }
  .logo{
    width: 10px;
    height: 10px;
  }
  html, body {
      /* The image used */
      background-image: url("../assets/twilight1.jpg");
          /* Set rules to fill background */
     background-size: cover;
     height: 100%;
     overflow: hidden;
    }
  .languageSelect{
    display: flex;
    margin-left: 300px;
    margin-right: 300px;
    align-items: row;
    color: white;
  }
  .text{
    margin-left: 300px;
    margin-right: 300px;
    color: white;

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

  .select{
    margin-left: 10px;
    margin-right: 10px;
  }

  #buttonCustom{
    display: flex;
     align-items: center;
     justify-content: center;
  }

  .card {
    background-color: black;
  }
</style>
