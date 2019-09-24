<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div class="inner">
      <div ref="target" class="target">
        background color
      </div>
    </div>
  </section>
</template>

<script>
import chroma from 'chroma-js'
import { TweenMax } from 'gsap'
import ScrollRevealScript from './ScrollRevealScript'
import math from './math'

export default {
  name: 'ScrollRevealColor',
  components: {},
  data() {
    return {
      reveal: {},
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.reveal = new ScrollRevealScript(
        this.$refs.target,
        progress => {
          TweenMax.set(this.$refs.target, {
            backgroundColor: chroma
              .mix(
                chroma.hsl(110, 0.75, math.map(progress, 0, 1, 0.45, 0.7)),
                chroma.hsl(240, 0.75, math.map(progress, 0, 1, 0.45, 0.7)),
                progress,
                'hsl',
              )
              .css(),
          })
        },
        null,
        100,
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
  background-color: #25ecb7;
  //
  + .target {
    margin-top: 200px;
  }
}
</style>
