<template>
  <div>
    <Header>首页</Header>
    <div class="content">
      <Swiper :swiperSlides="swiperSlides"></Swiper>
      <div class="list">
        <ul>
          <li v-for="(star, index) in starList" :key="index">
            <img :src="star.starImage" alt="">
            <div>
              <p class="star-name">{{star.starName}}</p>
              <p class="star-career">{{star.career}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/base/Header'
import Swiper from '@/base/Swiper'
import { getSwiper, getStar } from '@/api/index'
export default {
  name: 'Home',
  data () {
    return {
      swiperSlides: [],
      starList: []
    }
  },
  components: {
    Header,
    Swiper
  },
  created () {
    this.getSwiper()
    this.getStar()
  },
  methods: {
    async getSwiper(){
      this.swiperSlides = await getSwiper()
    },
    async getStar(){
      this.starList = await getStar()
    }
  }
}
</script>

<style scoped lang="less">
  .list {
    ul {
      height: 200px;
    }
    li {
      display: flex;
      width: 100%;
      height: 100%;
      div {
        margin-left: 20px;
        p {
          margin: 30px 0;
        }
      }
    }
    li > img {
      width: 184px;
      height: 200px;
    }
  }
</style>
