<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index"><img :src="slide" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carousel',
    components: {
      swiper,
      swiperSlide
    },
    props: ['swiperSlides'],
    data() {
      return {
        swiperOption: {
          autoplay: true,
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    mounted() {
      // setInterval(() => {
      //   console.log('simulate async data')
      //   if (this.swiperSlides.length < 10) {
      //     this.swiperSlides.push(this.swiperSlides.length + 1)
      //   }
      // }, 3000)
    }
  }
</script>

<style lang="less" scoped>
  .swiper-slide > img {
    width: 100%;
  }
</style>
