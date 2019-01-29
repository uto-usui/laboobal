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

  const fragment = `
  varying vec2 vUv;

  // images
  uniform sampler2D texture1;
  uniform sampler2D texture2;
  uniform sampler2D disp;

  uniform float dispPower; // 0 ~ 1
  uniform float intensity;

  void main() {
    vec2 uv = vUv;

    vec4 disp = texture2D(disp, uv);
    vec2 dispVec = vec2(disp.x, disp.y);

    // horizontal
    vec2 distPos1 = vec2(uv.x + (dispVec.x * intensity * dispPower), uv.y);
    vec2 distPos2 = vec2(uv.x + (dispVec.x * -(intensity * (1.0 - dispPower))), uv.y);

    vec4 _texture1 = texture2D(texture1, distPos1);
    vec4 _texture2 = texture2D(texture2, distPos2);

    gl_FragColor = mix(_texture1, _texture2, dispPower);
  }
  `;

  export default {
    name: 'DistortionSliderC',
    mounted() {

      new DistortionSlider(this.$refs.slider, {
        images: [
          'https://images.unsplash.com/photo-1504808815740-fac4ff5aba5c',
          'https://images.unsplash.com/photo-1548621641-6aa2e973a768',
          'https://images.unsplash.com/photo-1547977609-5b451beb7b5e',
        ],
        texture: '/images/texture/03.jpg',
        deep: .5,
        fragment,
      });

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
