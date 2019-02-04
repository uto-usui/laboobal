<template>
  <div class="wrap">

    <div class="slider js-slider" ref="slider">
      <div class="slider__inner js-slider__inner"></div>

      <nav class="slider__nav js-slider__nav">
        <div class="slider-bullet js-slider-bullet">
          <span class="slider-bullet__text js-slider-bullet__text">01</span>
          <span class="slider-bullet__line js-slider-bullet__line"></span>
        </div>
        <div class="slider-bullet js-slider-bullet">
          <span class="slider-bullet__text js-slider-bullet__text">02</span>
          <span class="slider-bullet__line js-slider-bullet__line"></span>
        </div>
        <div class="slider-bullet js-slider-bullet">
          <span class="slider-bullet__text js-slider-bullet__text">03</span>
          <span class="slider-bullet__line js-slider-bullet__line"></span>
        </div>
      </nav>

    </div>

  </div>

</template>

<script>

  import DistortionSlider from './DistortionSliderScript';

  export default {
    name: 'DistortionSliderA',
    data() {
      return {
        distortionSlider: {},
      };
    },
    mounted() {

      this.distortionSlider = new DistortionSlider(this.$refs.slider, {
        images: [
          'https://images.unsplash.com/photo-1548112129-b5cf67e9558d',
          'https://images.unsplash.com/photo-1548106755-5c6bf746ca84',
          'https://images.unsplash.com/photo-1547962041-6d2d7c4bdf6e',
        ],
        texture: '/images/texture/01.png',
        deep: 10.0,
      });

    },
    destroyed() {
      this.distortionSlider.destroy();
      this.distortionSlider = null;
    },
  };

</script>

<style scoped lang="scss">
  .wrap {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    font-family: 'helvetica neue', helvetica, sans-serif;
    background-color: #111;
  }

  .slider {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .slider__inner {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    //
    canvas {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }

  .slider__nav {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 10;
  }

  .slider-bullet {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }

  .slider-bullet__text {
    color: #fff;
    font-size: 0.65rem;
    margin-right: 1rem;
  }

  .slider-bullet__line {
    background-color: #fff;
    height: 1px;
    width: 1rem;
  }

</style>
