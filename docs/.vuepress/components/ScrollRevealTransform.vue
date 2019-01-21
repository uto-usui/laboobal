<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="inner">
      <div class="target" ref="target">transform</div>
    </div>
  </section>
</template>

<script>
  import ScrollRevealScript from './ScrollRevealScript';
  import math from './math';
  import {TweenMax} from 'gsap';

  export default {
    name: 'ScrollRevealTransform',
    components: {},
    methods: {},
    data() {
      return {};
    },
    mounted() {
      this.$nextTick(() => {

        const easing = .05;
        const updateValue = {
          rotationX: 0,
          y: 0,
        };

        new ScrollRevealScript(this.$refs.target, progress => {

          updateValue.rotationX += (math.map(progress, 0, 1, 90, -90) - updateValue.rotationX) * easing;
          updateValue.y += (math.map(progress, 0, 1, 100, -100) - updateValue.y) * easing;

          TweenMax.set(this.$refs.target, {
            //            scaleY: math.map(progress, 0, 1, .7, 1.),
            rotationX: updateValue.rotationX,
            y: updateValue.y,
          });

        }, null, -150, this.$refs.wrap);

      });
    },
  };
</script>

<style scoped lang="scss">

  .wrap {
    position: relative;
    overflow: scroll;
    height: 500px;
    background-color: #f1f1f1;
    transform-style: preserve-3d;
    perspective: 400px;
  }

  .inner {
    padding-top: 500px;
    padding-bottom: 500px;
  }

  .target {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    background-color: #25ECB7;
    //
    + .target {
      margin-top: 200px;
    }
  }

</style>
