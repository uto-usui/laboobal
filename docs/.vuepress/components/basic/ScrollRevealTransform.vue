<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div class="inner">
      <div ref="target" class="target">
        transform
      </div>
    </div>
  </section>
</template>

<script>
import { TweenMax } from 'gsap'
import ScrollRevealScript from './ScrollRevealScript'
import math from '../math'

export default {
  name: 'ScrollRevealTransform',
  components: {},
  data() {
    return {
      reveal: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      const easing = 0.1
      const updateValue = {
        scaleY: 0,
        rotationX: 0,
        y: 0,
      }

      this.reveal = new ScrollRevealScript(
        this.$refs.target,
        progress => {
          updateValue.scaleY +=
            (math.map(Math.abs(progress - 0.5), 0, 0.5, 1, 1.1) -
              updateValue.scaleY) *
            easing
          updateValue.rotationX +=
            (math.map(progress, 0, 1, 60, -60) - updateValue.rotationX) * easing
          updateValue.y +=
            (math.map(progress, 0, 1, 100, -100) - updateValue.y) * easing

          TweenMax.set(this.$refs.target, {
            scaleY: updateValue.scaleY,
            rotationX: updateValue.rotationX,
            y: updateValue.y,
          })
        },
        null,
        -150,
        this.$refs.wrap,
      )
    })
  },
  beforeDestroy() {
    this.reveal.destroy()
  },
  methods: {},
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

.inner {
  padding-top: 500px;
  padding-bottom: 500px;
}

.target {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  background-color: #25ecb7;
  //
  + .target {
    margin-top: 200px;
  }
}
</style>
