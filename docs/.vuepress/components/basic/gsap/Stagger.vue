<template>
  <section id="js-wrap" ref="wrap" class="wrap">
    <div class="inner">
      <div v-for="index in 100" :key="`target${index}`" ref="target" class="target"></div>
    </div>
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
        duration: 1.25,
        scale: 0.75,
        z: 100,
        repeat: -1,
        repeatDelay: 0.2,
        yoyo: true,
        ease: 'back.inOut(4)',
        stagger: {
          amount: 1,
          grid: [10, 10],
          from: 'center',
        },
      })
    },
  },
}
</script>

<style scoped lang="scss">
.wrap {
  position: relative;
  z-index: 9;
  background-color: #f1f1f1;
  perspective: 800px;
}

.inner {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  height: 500px;
  transform: translateZ(-800px) rotateX(60deg) rotateY(30deg);
  transform-style: preserve-3d;
  perspective: 800px;
}

.target {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25ecb7;
}
</style>
