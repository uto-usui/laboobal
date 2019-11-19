<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div ref="target" class="target">1</div>
  </section>
</template>

<script>
import { gsap } from 'gsap/all'

export default {
  name: 'Basic',
  components: {},
  data() {
    return {
      //
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.animation();
    })
  },
  destroyed() {
    //
  },
  methods: {
    animation() {
      const { target } = this.$refs

      gsap.to(target, {
        duration: 1,
        scale: 'random(0.5, 2)',
        rotationX: 'random(-360, 360)',
        rotationY: 'random(-360, 360)',
        rotationZ: 'random(-360, 360)',
        repeat: -1,
        repeatRefresh: true,
        ease: 'Power1.inOut',
      })
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: #f1f1f1;
  transform-style: flat;
  perspective: 400px;
}

.target {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #25ecb7;
  perspective: 800px;
}
</style>
