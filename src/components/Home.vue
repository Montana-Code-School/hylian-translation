<template>
  <div class = "classDiv">
    <b-card class ="backgroundCard">
      <div class="hero">
        <b-img src="https://vignette.wikia.nocookie.net/vsbattles/images/e/e6/Triforce.png/revision/latest?cb=20151115205031" alt="Triforce" />
        <h1 class="display-3">A Language Between Worlds</h1></br>
      </div>
      <p class="subtext">Hylian Translator</p>
          <div class="languageSelect">
            <h3>From:</h3>
            <b-form-select  v-model="selected" :options="options" class="select" />
            <h3>To:</h3>
            <b-form-select  :class = "textClass()" v-model="selected1" :options="options1" class="select" />
          </div>
          </br>
          <div class="text">
            <b-form-group label="Translator">
              <b-form-textarea :class = "keyboardClass()" placeholder = "Enter phrase to be translated..."
                v-model="message" rows="3"></b-form-textarea>
            </b-form-group>
              <div v-if="this.notEnglish" :class = "keyboardClass()" class="keypad">
                <div><input @click="message += letter" :value="letter" type="button" v-for="letter in row1letters"></div>
                <div><input @click="message += letter" :value="letter" type="button" v-for="letter in row2letters"></div>
                <div><input @click="message += letter" :value="letter" type="button" v-for="letter in row3letters"></div>
              </div>
            <b-button v-on:click="translate" class = "buttonCustom" >
                   Translate
            </b-button>
         </div>
         <div v-if="this.translating">
           <canvas  style="border:1px solid #BBB; background-color: white; width: 99%; height: 300px;" v-insert-message="{text:message, style: font}"></canvas>
         </div>
      </b-card >
    </div>
</template>

<script>
import api from '@/api'

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
        { value: 'BotW Sheikah', text: 'BotW Sheikah' }
      ],
      options1: [
        { value: null, text: 'Please select an option' },
        { value: 'English', text: 'English' },
        { value: 'Skyward Sword Ancient Hylian', text: 'Skyward Sword Ancient Hylian' },
        { value: 'Twilight Princess Hylian', text: 'Twilight Princess Hylian' },
        { value: 'BotW Sheikah', text: 'BotW Sheikah' }
      ],
      phrase: '',
      body: '',
      translating: false,
      row1letters: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
      row2letters: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
      row3letters: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
      notEnglish: false,
      message: '',
      font: '40px Sans-Serif'
    }
  },
  directives: {
      insertMessage: function(canvasElement, binding) {
          // Get canvas context
          var ctx = canvasElement.getContext("2d");
          // Clear the canvas
          ctx.clearRect(0, 0,ctx.width, ctx.height);
          // Insert stuff into canvas
          ctx.fillStyle = "black";
          ctx.font = binding.value.style;
          ctx.fillText(binding.value.text, 10, 50);
      }
  },
  watch: {
      message: function() {
          console.log("message changed to " + this.message);
      }
    },
  methods: {
    textClass () {
      switch (this.selected1) {
        case 'Skyward Sword Ancient Hylian':
          this.font =  '40px Ancient';
          break;
        case 'Twilight Princess Hylian':
          this.font = '40px Twilight';
          break;
        case 'BotW Sheikah':
          this.font = '40px Sheikah';
          break;
        default:
          this.font = '40px Sans-Serif';
          break;
      }
    },
    translate () {
      this.translating = true
    },
    saveFavorite () {
      api.createFavorite(this.body)
    },
    keyboardClass () {
      switch (this.selected) {
        case 'Skyward Sword Ancient Hylian':
          this.notEnglish = true;
          return 'ancient-text'
          break;
        case 'Twilight Princess Hylian':
          this.notEnglish = true;
          return 'twilight-text';
          break;
        case 'BotW Sheikah':
          this.notEnglish = true;
          return 'sheikah-text';
          break;
        default:
          this.notEnglish = false;
          return 'Sans-Serif';
          break;
      }
    }
  }
}
</script>

<style>
@import '../../static/style.css';
</style>
