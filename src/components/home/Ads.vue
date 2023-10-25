<template>
    <div class="ads-wrapper">
        <div class="main-title">Share With #Shoppes</div>
        <div class="ads-link text-fz14-lh24-fw500-p text-grey">Follow <span class="text-black cursor">@shoppes</span> instagram for inspirations</div>
        <div class="ads-slider-content">
            <!-- swipper slider -->

            <div class="my-swiper-content">
              <div class="container">
                <swiper
                  class="my-swiper"
                  :slides-per-view="6"
                  :space-between="0"
                  :loop="true"
                  @swiper="onSwiper"
                  @slideChange="onSlideChange"
                >
                  <swiper-slide class="swiper-slide" v-for="images in ads_images">
                    <img :src="images.img_url" alt="img">
                    1sliser
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            
        </div>
    </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
    data() {
      return {
        ads_images:[
          {
            img_url: "../src/images/ads1.jpg",
          },          
          {
            img_url: "../src/images/ads2.jpg",
          },          
          {
            img_url: "../src/images/ads3.jpg",
          },          
          {
            img_url: "../src/images/ads4.jpg",
          },          
          {
            img_url: "../src/images/ads5.jpg",
          }, 
          {
            img_url: "../src/images/ads6.jpg",
          },
        ],
      }
    },
  };
</script>
<style scoped>
.ads-link{
    text-align: center;
    transform: translateY(-50px);
}
@media (max-width: 992px) {
    .ads-link{
        transform: translateY(-40px);
    }
}
.my-swiper-content{
  width: 100%;
  height: 170px;
}
.container{
  overflow: hidden;
  border: 1px solid red;
  height: 170px;
}
.swiper-slide{
  height: 170px;
  width: 170px;
  padding: 0 12px;
}
.swiper-slide img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media (max-width: 1200px) {
  .container{
    height: 140px;
  }
  .my-swiper-content{
    height: 140px;
  }
  .swiper-slide{
    height: 140px;
  }
}
@media (max-width: 992px){
  .container{
    position: relative;
  }
  .my-swiper{
    position: absolute;
    width: 960px;
    left: 50%;
    transform: translateX(-50%);
  }
}
@media (max-width: 500px){
  .container{
    width: 100%;
    height: 125px;
  }
  .my-swiper-content{
    height: 125px;
  }
  .my-swiper{
    width: 846px;
    height: 125px;
  }
  .swiper-slide{
    padding: 0 8px;
    height: 125px;
    width: 125px;
  }
}

</style>