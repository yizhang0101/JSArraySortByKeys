<template>
    <div class="my-swiper">
        <swiper :options="swiperOption" class="sw">
            <swiper-slide class="sw-item"><img src="https://climg.mukewang.com/5e450a5e084ba43b03000170.jpg"></swiper-slide>
            <swiper-slide class="sw-item"><img src="https://img2.mukewang.com/szimg/59c0f06e0001150805400300-360-202.jpg"></swiper-slide>
        </swiper>


        
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css"; ////这里注意具体看使用的版本是否需要引入样式，以及具体位置。
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        //swiper3
        autoplay: 3000,
        speed: 1000,
        loop:true,
        spaceBetween:10,
        slidsPerView:'auto',
        coverflowEffect:{
          rotate:0,
          stretch:0,
          depth:0,
          modifier:1,
          slideShadows:false
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>

.my-swiper {
    height: 200px;
    width:100%;
}
    
    .sw{
      width: 100%;
      height: 100%;
      
    }

    .sw-item{
        width: 70%;
        height:  100%;
        img{
          width: 100%;
          height: 100%;
          display: block;
        }
      }

</style>

