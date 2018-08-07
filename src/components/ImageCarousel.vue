<template>
  <div class = "carouselDiv">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333; width:800px; height: 450px"
                controls
                indicators
                background="#000000"
                :interval="2000"
                img-width="99%"
                img-height="450"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Slides with image only -->
      <b-carousel-slide
        img-src="https://i.ytimg.com/vi/c4bvZZa5Mtg/maxresdefault.jpg"
          alt="Legend of Zelda"
            style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://i.ytimg.com/vi/wxiCgBt-dPo/maxresdefault.jpg "
            alt="Adventure of Link"
              style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://responsejournal.net/sites/default/files/styles/anamorphic_1200/public/maxresdefault.jpg?itok=ac6FF_d5"
            alt="A Link to the Past"
              style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
        img-src="http://images6.fanpop.com/image/photos/33300000/Ocarina-of-Time-3D-legend-of-zelda-ocarina-of-time-33360742-2000-1186.jpg"
          alt="Ocarina of Time"
            style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://stmed.net/sites/default/files/the-legend-of-zelda%3A-majora%27s-mask-hd-wallpapers-33785-7527713.jpg"
            alt="Majoras Mask"
              style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://www.zeldadungeon.net/wp-content/uploads/2017/12/oracle-of-seasons-and-ages.jpg"
            alt="Oracle of Seasons and Ages"
              style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://www.zelda.com/windwaker/img/download/wp-1-1920x1080.jpg"
              alt="Wind Waker"
                style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://images3.alphacoders.com/631/631745.jpg"
            alt="Minish Cap"
              style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://i.kinja-img.com/gawker-media/image/upload/s--gUnms5aq--/c_scale,f_auto,fl_progressive,q_80,w_800/glofgxtw7adhqinzd3sf.png"
              alt="Twilight Princess"
                style = "height:450px; width:99%">
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://www.technobuffalo.com/wp-content/uploads/2016/05/phantom-hourglass-470x310@2x.jpg"
              alt="Phantom Hourglass"
                style = "height:450px; width:800px">
      </b-carousel-slide>

      <b-carousel-slide
          img-src="https://i.ytimg.com/vi/7CcULcHjvLs/maxresdefault.jpg"
              alt="Spirit Tracks"
                style = "height:450px; width:800px">
      </b-carousel-slide>

      <b-carousel-slide img-src="https://pre00.deviantart.net/8228/th/pre/f/2014/135/3/0/the_legend_of_zelda__skyward_sword___wallpaper_by_masterenex-d7ij6wu.png"
            alt="Skyward Sword"
              style = "height:450px; width:800px">
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://wallpaper-house.com/data/out/21/wallpaper2you_6880.jpg"
            alt="A Link Between Worlds"
              style = "height:450px; width:800px">
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://s.newsweek.com/sites/www.newsweek.com/files/styles/embed-lg/public/2018/08/06/breath-wild-timeline-update.jpg "
            alt="Breath of the Wild"
              style = "height:450px; width:800px">
      </b-carousel-slide>
    </b-carousel>
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

<style>
@import '../../static/style.css';
</style>
<!-- carousel-1.vue -->
