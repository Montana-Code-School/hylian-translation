<template>
  <div class = "classDiv">
    <b-card id ="backgroundCard">
    <div class="hero">
      <b-img src="https://vignette.wikia.nocookie.net/vsbattles/images/e/e6/Triforce.png/revision/latest?cb=20151115205031" alt="Triforce" />
      <h1 class="display-3">A Language Between Worlds</h1></br>
    </div>
    <p class="subtext">Hylian Translator</p>
        <div class="languageSelect">
          <h3>From:</h3>
          <b-form-select  v-model="selected" :options="options" class="select" />
          <h3>To:</h3>
          <b-form-select  v-model="selected1" :options="options1" class="select" />
        </div>
        </br>
        <div class="text">
          <b-form-group label="Translator">
            <b-form-textarea :class = "keyboardClass()" placeholder = "Enter phrase to be translated..."
              v-model="body" rows="3"></b-form-textarea>
          </b-form-group>
            <div v-if="this.notEnglish" :class = "keyboardClass()" class="keypad">
              <div><input @click="body += letter" :value="letter" type="button" v-for="letter in row1letters"></div>
              <div><input @click="body += letter" :value="letter" type="button" v-for="letter in row2letters"></div>
              <div><input @click="body += letter" :value="letter" type="button" v-for="letter in row3letters"></div>
            </div>
          <b-button v-on:click="translate" id = "buttonCustom" >
                 Translate
          </b-button>
       </div>
       <div class="text" v-if="this.translating" >
         <p :class = "textClass()">{{body}}</p>
         <form @submit.prevent="saveFavorite">
           <div>
             <b-btn type="submit" variant="success">Save favorite</b-btn>
           </div>
         </form>
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
      notEnglish: false
    }
  },

  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('You have saved this phrase to your favorites.')
    },
    textClass () {
      console.log(this.selected1);
      switch (this.selected1) {
        case 'Skyward Sword Ancient Hylian':
          return 'ancient-text'
        case 'Twilight Princess Hylian':
          return 'twilight-text'
        case 'BotW Sheikah':
          return 'sheikah-text'
        default:
          return 'Sans-Serif'
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
    },
    englishTest () {
      switch (this.selected) {
        case 'Skyward Sword Ancient Hylian':
          this.notEnglish = true;
          break;
        case 'Twilight Princess Hylian':
          this.notEnglish = true;
          break;
        case 'BotW Sheikah':
          this.notEnglish = true;
          break;
        default:
          this.notEnglish = false;
          break;
      }
    }
  }
}
</script>

<style>
@import '../../static/style.css';
</style>
