<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Slides with image only -->
      <b-carousel-slide img-src="./src/assets/BreathOfWild1.jpg" alt="Breath of the Wild">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/fourSwords2.jpg" alt="Four Swords Adventure">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/linkBetweenWorlds1.jpg" alt="A Link Between Worlds">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/majorasMask3.jpg" alt="Majora's Mask">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/minishCap1.jpg" alt="Minish Cap">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/ocarina1.jpg" alt="Ocarina Of Time">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/BreathOfWild1.jpg" alt="Breath of the Wild">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/originalZelda1.jpg" alt="First Zelda Game">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/phantomHour2.jpg" alt="Phantom Hourglass">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/seasons-ages1.jpg" alt="Oracle of Seasons and Ages">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/secondZelda1.jpg" alt="Zelda 2: The Adventure of Link">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/skywardSword2.png" alt="Skyward Sword">
      </b-carousel-slide>

      <b-carousel-slide img-src="../assets/BreathOfWild1.jpg" alt="Breath of the Wild">
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->
