<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div v-for="index in 4" ref="target" :key="index" class="target">
      {{ index }}
      <div class="target__inner" />
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap/all'
import HoverControlScript from './HoverControlScript'

export default {
  name: 'HoverControl',
  components: {},
  data() {
    return {
      hoverControl: [],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init()
    })
  },
  destroyed() {
    this.hoverControl.forEach((el) => {
      el.destroy()
    })
  },
  methods: {
    init() {
      ;[...this.$refs.target].forEach((el, i) => {
        const animationTarget = el.querySelector('.target__inner')

        this.hoverControl[i] = new HoverControlScript(
          el,
          () => {
            return new Promise(resolve => {
              gsap.to(animationTarget, {
                duration: 0.6,
                scaleX: 1,
                backgroundColor: '#FF6473',
                ease: 'Expo.easeOut',
                onComplete: () => {
                  resolve()
                },
              })
            })
          },
          () => {
            return new Promise(resolve => {
              gsap.to(animationTarget, {
                duration: 0.5,
                scaleX: 0,
                ease: 'Expo.easeInOut',
                onComplete: () => {
                  resolve()
                },
              })
            })
          },
        )
      })
    },
    mouseOver() {

    }
  },
}
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

.target {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(500px / 4);
  margin-left: auto;
  margin-right: auto;
  background-color: #25ecb7;
  //
  //&:hover {
  //background-color: #FF6473;
  //}
}

.target__inner {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: scaleX(0);
  transform-origin: left center;
}
</style>
