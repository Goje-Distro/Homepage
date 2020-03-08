<template>
  <!-- You can find this swiper instance object in current component by the "mySwiper"  -->
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="banner in banners" :key="banner.index" class="swiper-slide">
        <img :src="banner" />
      </div>
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        'https://picsum.photos/800/500',
        'https://picsum.photos/800/500',
        'https://picsum.photos/800/500'
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        },
        on: {
          slideChange() {
            // eslint-disable-next-line no-console
            console.log('onSlideChangeEnd', this)
          },
          tap() {
            // eslint-disable-next-line no-console
            console.log('onTap', this)
          }
        }
      }
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log('app init', this)
    setTimeout(() => {
      this.banners.push('/5.jpg')
      // eslint-disable-next-line no-console
      console.log('banners update')
    }, 3000)
    // eslint-disable-next-line no-console
    console.log(
      'This is current swiper instance object',
      this.mySwiper,
      'I will slideTo banners 3'
    )
    this.mySwiper.slideTo(3)
  }
}
</script>

<style lang="scss" scoped>
.my-swiper {
  height: 300px;
  width: 100%;
  .swiper-slide {
    text-align: center;
    font-size: 38px;
    font-weight: 700;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .swiper-pagination {
    > .swiper-pagination-bullet {
      background-color: red;
    }
  }
}
</style>
