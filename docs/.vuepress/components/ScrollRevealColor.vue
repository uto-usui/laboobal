<template>
  <section class="wrap" id="js-wrap" ref="wrap">
    <div class="inner">
      <div class="target" ref="target">background color</div>
    </div>
  </section>
</template>

<script>
  import ScrollRevealScript from './ScrollRevealScript';
  import math from './math';
  import chroma from 'chroma-js';
  import {TweenMax} from 'gsap';

  export default {
    name: 'ScrollRevealColor',
    components: {},
    methods: {},
    data() {
      return {
        reveal: {}
      };
    },
    mounted() {
      this.$nextTick(() => {

        this.reveal = new ScrollRevealScript(this.$refs.target, progress => {

          TweenMax.set(this.$refs.target, {
            backgroundColor: chroma.mix( chroma.hsl(110, .75, math.map(progress, 0, 1, .45, .7)), chroma.hsl(240, .75, math.map(progress, 0, 1, .45, .7)), progress, 'hsl').css()
          })

        }, null, 100, this.$refs.wrap);

      });
    },
    beforeDestroy() {
      this.reveal.destroy()
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
    perspective: 800px;
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
